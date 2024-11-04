"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Cloud,
    Menu,
    User,
    ShoppingCart,
    Briefcase,
    Users,
    Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const routes = [
        { name: "Market", path: "/market", icon: ShoppingCart },
        { name: "Services", path: "/services", icon: Briefcase },
        { name: "Users", path: "/users", icon: Users },
        { name: "Products", path: "/products", icon: Package },
    ];

    const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
        <>
            {routes.map((route) => (
                <Link
                    key={route.path}
                    href={route.path}
                    className={`flex items-center space-x-2 ${
                        mobile ? "mb-4" : ""
                    } ${
                        pathname === route.path
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    <route.icon className="h-5 w-5" />
                    <span>{route.name}</span>
                </Link>
            ))}
        </>
    );

    return (
        <nav className="border-b">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <Cloud className="h-6 w-6" />
                    <span className="font-bold text-xl">Nimbus</span>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <NavItems />
                </div>

                <div className="flex items-center space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="relative h-8 w-8 rounded-full"
                            >
                                <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56"
                            align="end"
                            forceMount
                        >
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        John Doe
                                    </p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        john@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="/profile"
                                    className="flex w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-4">
                                <NavItems mobile />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
