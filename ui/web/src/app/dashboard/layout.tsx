// layout.tsx
import React from "react";
import Navbar from "@/components/layout/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
