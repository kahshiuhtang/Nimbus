"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, ShoppingCart } from "lucide-react";
import { NmbsService } from "@/lib/types/types";
import ServiceCard from "@/app/home/serviceCard";
import Navbar from "@/components/layout/navbar";

// Mock data for services
const boughtServices: NmbsService[] = [
    {
        id: 1,
        name: "Cloud Storage",
        price: 9.99,
        date: "2023-05-15",
        status: "Active",
    },
    {
        id: 2,
        name: "VPN Service",
        price: 5.99,
        date: "2023-06-01",
        status: "Active",
    },
    {
        id: 3,
        name: "Website Hosting",
        price: 14.99,
        date: "2023-04-22",
        status: "Expired",
    },
];

const sellingServices: NmbsService[] = [
    {
        id: 1,
        name: "Web Development",
        price: 50,
        date: "2023-07-01",
        status: "Available",
    },
    {
        id: 2,
        name: "Graphic Design",
        price: 35,
        date: "2023-06-15",
        status: "Booked",
    },
    {
        id: 3,
        name: "SEO Consultation",
        price: 75,
        date: "2023-07-10",
        status: "Available",
    },
];

export default function HomeDashboard() {
    const [activeTab, setActiveTab] = useState("bought");
    if(!activeTab) activeTab;
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to Your Nimbus Dashboard
                </h1>
                <Tabs
                    defaultValue="bought"
                    className="w-full"
                    onValueChange={(value) => setActiveTab(value)}
                >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger
                            value="bought"
                            className="flex items-center justify-center"
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Services You've Bought
                        </TabsTrigger>
                        <TabsTrigger
                            value="selling"
                            className="flex items-center justify-center"
                        >
                            <Package className="w-4 h-4 mr-2" />
                            Services You're Selling
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="bought">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {boughtServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    type="bought"
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="selling">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {sellingServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    type="selling"
                                />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
