"use client";

import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { time: "00:00", usage: 30 },
    { time: "04:00", usage: 25 },
    { time: "08:00", usage: 40 },
    { time: "12:00", usage: 65 },
    { time: "16:00", usage: 55 },
    { time: "20:00", usage: 45 },
    { time: "23:59", usage: 35 },
];

export function CpuUsageChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="usage"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
