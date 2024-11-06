import { Clock } from "lucide-react";

const logs = [
    { timestamp: "2023-05-15T14:30:00Z", message: "User logged in" },
    { timestamp: "2023-05-15T14:35:00Z", message: "Database query executed" },
    { timestamp: "2023-05-15T14:40:00Z", message: "API request processed" },
    { timestamp: "2023-05-15T14:45:00Z", message: "File upload completed" },
    { timestamp: "2023-05-15T14:50:00Z", message: "User logged out" },
];

export function RecentLogs() {
    return (
        <div className="space-y-8">
            {logs.map((log, index) => (
                <div key={index} className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {log.message}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {new Date(log.timestamp).toLocaleString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
