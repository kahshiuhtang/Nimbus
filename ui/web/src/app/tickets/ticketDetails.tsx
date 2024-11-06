"use client";

import React from "react";
import { ArrowLeft, Paperclip, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

interface Message {
    id: number;
    sender: string;
    content: string;
    time: string;
}

interface Ticket {
    id: number;
    from: string;
    subject: string;
    status: "Open" | "In Progress" | "Closed";
    lastUpdate: string;
    service: string;
}

interface TicketDetailsProps {
    ticket: Ticket;
    onBack: () => void;
}

export default function TicketDetails({ ticket, onBack }: TicketDetailsProps) {
    const messages: Message[] = [
        {
            id: 1,
            sender: ticket.from,
            content:
                "Hi, I'm having trouble with the API integration. Can you help?",
            time: "2 days ago",
        },
        {
            id: 2,
            sender: "Support Team",
            content:
                "Of course! Can you please provide more details about the issue you're experiencing?",
            time: "2 days ago",
        },
        {
            id: 3,
            sender: ticket.from,
            content:
                "I'm getting a 404 error when trying to make a POST request to the /users endpoint.",
            time: "1 day ago",
        },
        {
            id: 4,
            sender: "Support Team",
            content:
                "Thank you for the information. Let me check the API logs and get back to you shortly.",
            time: "1 day ago",
        },
        {
            id: 5,
            sender: "Support Team",
            content:
                "I've identified the issue. There was a recent update that changed the endpoint to /api/v2/users. Can you try using this new endpoint?",
            time: "5 hours ago",
        },
    ];

    const getStatusColor = (status: Ticket["status"]) => {
        switch (status.toLowerCase()) {
            case "open":
                return "bg-green-100 text-green-800";
            case "in progress":
                return "bg-yellow-100 text-yellow-800";
            case "closed":
                return "bg-gray-100 text-gray-800";
            default:
                return "bg-blue-100 text-blue-800";
        }
    };

    return (
        <div className="space-y-4">
            <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tickets
            </Button>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>{ticket.subject}</CardTitle>
                        <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                        </Badge>
                    </div>
                    <CardDescription>
                        From {ticket.from} • {ticket.service} • Opened{" "}
                        {ticket.lastUpdate}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px] pr-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`mb-4 flex ${
                                    message.sender === "Support Team"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`rounded-lg p-3 ${
                                        message.sender === "Support Team"
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted"
                                    }`}
                                >
                                    <p className="text-sm font-semibold">
                                        {message.sender}
                                    </p>
                                    <p className="text-sm">{message.content}</p>
                                    <p className="mt-1 text-xs opacity-70">
                                        {message.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="flex w-full items-center space-x-2">
                        <Avatar>
                            <AvatarImage
                                src="/placeholder-avatar.jpg"
                                alt="Support Team"
                            />
                            <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                        <Textarea
                            className="flex-1"
                            placeholder="Type your message here..."
                        />
                        <Button type="submit" size="icon">
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send message</span>
                        </Button>
                        <Button type="button" size="icon" variant="outline">
                            <Paperclip className="h-4 w-4" />
                            <span className="sr-only">Attach file</span>
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}
