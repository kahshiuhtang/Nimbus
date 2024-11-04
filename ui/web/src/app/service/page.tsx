import { Metadata } from "next";
import ServiceForm from "@/components/forms/serviceForm";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
    title: "Create New Service | Cloud Distribution SaaS",
    description:
        "Create a new service to distribute your software on the cloud with ease.",
};

export default function NewServicePage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-10">
                <div className="flex justify-center">
                    <ServiceForm />
                </div>
            </div>
        </div>
    );
}
