"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
    { name: "Mon", inbound: 24, outbound: 18 },
    { name: "Tue", inbound: 30, outbound: 22 },
    { name: "Wed", inbound: 28, outbound: 25 },
    { name: "Thu", inbound: 32, outbound: 29 },
    { name: "Fri", inbound: 35, outbound: 33 },
    { name: "Sat", inbound: 22, outbound: 20 },
    { name: "Sun", inbound: 20, outbound: 17 },
];

export function NetworkUsageChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="inbound" stackId="a" fill="#8884d8" />
                <Bar dataKey="outbound" stackId="a" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}
