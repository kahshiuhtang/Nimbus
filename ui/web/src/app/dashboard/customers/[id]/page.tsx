import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, HardDrive, Network } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CpuUsageChart } from "@/components/dashboard/cpuUsageChart";
import { NetworkUsageChart } from "@/components/dashboard/networkUsageChart";
import { RecentLogs } from "@/components/dashboard/recentLogs";
import { RecentErrors } from "@/components/dashboard/recentErrors";

export const metadata: Metadata = {
    title: "Customer Profile",
    description: "Detailed customer information and usage metrics",
};

async function getCustomerData(id: string) {
    // In a real application, you would fetch this data from your API
    return {
        id,
        name: "Jane Smith",
        email: "jane@example.com",
        plan: "Pro",
        status: "active",
        lastActive: "2023-05-15T14:30:00Z",
        cpuUsage: 65,
        ramUsage: 48,
        diskUsage: 72,
        bandwidthUsage: 58,
    };
}

export default async function CustomerProfilePage({
    params,
}: {
    params: { id: string };
}) {
    const customer = await getCustomerData(params.id);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                    {customer.name}
                </h2>
                <div className="flex items-center space-x-2">
                    <Link href="/dashboard/customers" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Customers
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            CPU Usage
                        </CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {customer.cpuUsage}%
                        </div>
                        <Progress value={customer.cpuUsage} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            RAM Usage
                        </CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {customer.ramUsage}%
                        </div>
                        <Progress value={customer.ramUsage} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Disk Usage
                        </CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {customer.diskUsage}%
                        </div>
                        <Progress value={customer.diskUsage} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Bandwidth Usage
                        </CardTitle>
                        <Network className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {customer.bandwidthUsage}%
                        </div>
                        <Progress
                            value={customer.bandwidthUsage}
                            className="mt-2"
                        />
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>CPU Usage Over Time</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <CpuUsageChart />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Network Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <NetworkUsageChart />
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="logs" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                    <TabsTrigger value="errors">Errors</TabsTrigger>
                </TabsList>
                <TabsContent value="logs" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Logs</CardTitle>
                            <CardDescription>
                                Showing the last 5 log entries
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentLogs />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="errors" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Errors</CardTitle>
                            <CardDescription>
                                Showing the last 5 error entries
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentErrors />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card>
                <CardHeader>
                    <CardTitle>Customer Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-sm text-muted-foreground">
                                {customer.email}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Plan</p>
                            <p className="text-sm text-muted-foreground">
                                {customer.plan}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Status</p>
                            <p className="text-sm text-muted-foreground capitalize">
                                {customer.status}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Last Active</p>
                            <p className="text-sm text-muted-foreground">
                                {new Date(customer.lastActive).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
