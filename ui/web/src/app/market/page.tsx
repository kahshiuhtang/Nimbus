"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";

// Dummy data for services
const services = [
    {
        id: 1,
        name: "Web Development",
        provider: "TechPro Solutions",
        price: 500,
        description: "Custom website development tailored to your needs.",
    },
    {
        id: 2,
        name: "Logo Design",
        provider: "Creative Minds",
        price: 200,
        description: "Eye-catching logo design to represent your brand.",
    },
    {
        id: 3,
        name: "Content Writing",
        provider: "WordCraft",
        price: 100,
        description: "Engaging content for your website or blog.",
    },
    {
        id: 4,
        name: "SEO Optimization",
        provider: "RankBoost",
        price: 300,
        description: "Improve your website's search engine rankings.",
    },
    {
        id: 5,
        name: "Social Media Management",
        provider: "SocialGurus",
        price: 250,
        description: "Manage and grow your social media presence.",
    },
    {
        id: 6,
        name: "Video Editing",
        provider: "CutPro Edits",
        price: 150,
        description: "Professional video editing for your content.",
    },
    {
        id: 7,
        name: "Mobile App Development",
        provider: "AppWizards",
        price: 1000,
        description: "Create custom mobile apps for iOS and Android.",
    },
    {
        id: 8,
        name: "Graphic Design",
        provider: "PixelPerfect",
        price: 180,
        description: "Stunning graphics for all your design needs.",
    },
];

export default function MarketPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredServices = services.filter(
        (service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar/>
            <header className="sticky top-0 z-10 bg-background border-b">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-3xl font-bold mb-4 text-center">
                        Service Marketplace
                    </h1>
                    <Input
                        type="search"
                        placeholder="Search services..."
                        className="mb-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>
            <main className="flex-grow overflow-auto">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredServices.map((service) => (
                            <Card key={service.id} className="flex flex-col">
                                <CardHeader>
                                    <div className="relative w-full h-48 mb-4">
                                        <Image
                                            src={`https://picsum.photos/100/200`}
                                            alt={service.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <CardTitle className="flex justify-between items-start">
                                        <span>{service.name}</span>
                                        <Badge variant="secondary">
                                            ${service.price}
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage
                                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${service.provider}`}
                                            alt={service.provider}
                                        />
                                        <AvatarFallback>
                                            {service.provider
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="ml-2 text-sm font-medium">
                                        {service.provider}
                                    </span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
