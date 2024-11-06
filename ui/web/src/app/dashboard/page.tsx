import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowUpRight,
    Users,
    DollarSign,
    ShoppingCart,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recentSales";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard for SaaS CMS",
};

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button>Download</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Subscriptions
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Sales
                        </CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Now
                        </CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                            You made 265 sales this month.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentSales />
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle>Latest Customers</CardTitle>
                    <Link href="/dashboard/customers" passHref>
                        <Button
                            variant="ghost"
                            className="text-sm text-muted-foreground"
                        >
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* This would typically be a mapped array of customers */}
                        <div className="flex items-center">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Olivia Martin
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    olivia.martin@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">
                                +$1,999.00
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Jackson Lee
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    jackson.lee@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$39.00</div>
                        </div>
                        <div className="flex items-center">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Isabella Nguyen
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    isabella.nguyen@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$299.00</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
