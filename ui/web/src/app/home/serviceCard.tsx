"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign } from "lucide-react";
import { NmbsService } from "@/lib/types/types";

interface ServiceCardProps {
    service: NmbsService;
    type: string;
}
export default function ServiceCard({ service, type }: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>
                    <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {service.date}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {service.price.toFixed(2)}
                    </div>
                    <Badge
                        variant={
                            service.status === "Active" ||
                            service.status === "Available"
                                ? "default"
                                : "secondary"
                        }
                    >
                        {service.status}
                    </Badge>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">
                    {type === "bought" ? "Manage Subscription" : "Edit Listing"}
                </Button>
            </CardFooter>
        </Card>
    );
}
