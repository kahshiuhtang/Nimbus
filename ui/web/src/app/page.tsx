import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Search, MountainIcon } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="ml-2 text-2xl font-bold">Nimbus</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#features"
                    >
                        Features
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#marketplace"
                    >
                        Marketplace
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#pricing"
                    >
                        Pricing
                    </a>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Distribute Your Services with Ease
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Streamline your service distribution,
                                    discover new SaaS offerings, and accept
                                    payments. Grow your business with our
                                    all-in-one SaaS marketplace platform.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Get Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Easy Distribution",
                                    description:
                                        "Distribute your services to a wide audience with just a few clicks.",
                                },
                                {
                                    title: "Secure Payments",
                                    description:
                                        "Accept payments securely with our integrated payment system.",
                                },
                                {
                                    title: "Analytics Dashboard",
                                    description:
                                        "Track your performance with our comprehensive analytics dashboard.",
                                },
                                {
                                    title: "Customer Management",
                                    description:
                                        "Manage your customers and their subscriptions effortlessly.",
                                },
                                {
                                    title: "Automated Billing",
                                    description:
                                        "Set up recurring billing and automate your revenue stream.",
                                },
                                {
                                    title: "24/7 Support",
                                    description:
                                        "Get help anytime with our round-the-clock customer support.",
                                },
                            ].map((feature, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id="marketplace"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Discover SaaS Solutions
                        </h2>
                        <div className="max-w-xl mx-auto mb-10">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input
                                    type="text"
                                    placeholder="Search for SaaS solutions..."
                                />
                                <Button type="submit">
                                    <Search className="h-4 w-4 mr-2" />
                                    Search
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "CloudCRM",
                                    category: "Customer Relationship",
                                    price: "$49/mo",
                                },
                                {
                                    name: "DataViz Pro",
                                    category: "Data Visualization",
                                    price: "$79/mo",
                                },
                                {
                                    name: "SecureAuth",
                                    category: "Authentication",
                                    price: "$39/mo",
                                },
                                {
                                    name: "AIWriter",
                                    category: "Content Creation",
                                    price: "$59/mo",
                                },
                                {
                                    name: "DevOps Suite",
                                    category: "Development Tools",
                                    price: "$99/mo",
                                },
                                {
                                    name: "MarketBoost",
                                    category: "Marketing Automation",
                                    price: "$69/mo",
                                },
                            ].map((saas, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{saas.name}</CardTitle>
                                        <CardDescription>
                                            {saas.category}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-2xl font-bold">
                                            {saas.price}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">
                                            Learn More
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Button variant="outline" size="lg">
                                Explore All SaaS Solutions
                            </Button>
                        </div>
                    </div>
                </section>
                <section
                    id="pricing"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Simple, Transparent Pricing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Starter",
                                    price: "$29",
                                    features: [
                                        "100 Monthly Active Users",
                                        "Basic Analytics",
                                        "24/7 Support",
                                    ],
                                },
                                {
                                    name: "Pro",
                                    price: "$99",
                                    features: [
                                        "1,000 Monthly Active Users",
                                        "Advanced Analytics",
                                        "Priority Support",
                                        "Custom Integrations",
                                    ],
                                },
                                {
                                    name: "Enterprise",
                                    price: "Custom",
                                    features: [
                                        "Unlimited Monthly Active Users",
                                        "Dedicated Account Manager",
                                        "On-Premise Deployment Option",
                                        "Custom Contract",
                                    ],
                                },
                            ].map((plan, index) => (
                                <Card
                                    key={index}
                                    className={
                                        index === 1 ? "border-primary" : ""
                                    }
                                >
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <CardDescription>
                                            <span className="text-3xl font-bold">
                                                {plan.price}
                                            </span>
                                            {plan.price !== "Custom" && (
                                                <span className="text-xl">
                                                    /month
                                                </span>
                                            )}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center"
                                                >
                                                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">
                                            {plan.price === "Custom"
                                                ? "Contact Sales"
                                                : "Get Started"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Ready to Get Started?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join thousands of companies already using
                                    SaaSify to grow their business and discover
                                    new SaaS solutions.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg">Sign Up Now</Button>
                                <Button size="lg" variant="outline">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Nimbus. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacy
                    </a>
                </nav>
            </footer>
        </div>
    );
}
