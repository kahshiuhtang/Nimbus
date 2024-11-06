import { AlertTriangle } from "lucide-react";

const errors = [
    {
        timestamp: "2023-05-15T15:00:00Z",
        message: "Database connection failed",
    },
    { timestamp: "2023-05-15T15:10:00Z", message: "API rate limit exceeded" },
    { timestamp: "2023-05-15T15:20:00Z", message: "File not found" },
    { timestamp: "2023-05-15T15:30:00Z", message: "Invalid user input" },
    { timestamp: "2023-05-15T15:40:00Z", message: "Server timeout" },
];

export function RecentErrors() {
    return (
        <div className="space-y-8">
            {errors.map((error, index) => (
                <div key={index} className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-destructive" />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {error.message}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {new Date(error.timestamp).toLocaleString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
