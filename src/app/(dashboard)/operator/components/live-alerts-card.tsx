import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AlertSeverity = "INFO" | "PRIORITY" | "CRITICAL";

interface AlertItem {
    time: string;
    type: string;
    severity: AlertSeverity;
}

const alerts: AlertItem[] = [
    { time: "14:12", type: "Proximity alert: TRK-205", severity: "PRIORITY" },
    { time: "13:45", type: "Route warning: Haul Rd B congested", severity: "INFO" },
    { time: "13:20", type: "Mechanical: Low tire pressure FL", severity: "PRIORITY" },
    { time: "12:55", type: "Geofence breach imminent", severity: "CRITICAL" },
    { time: "11:30", type: "Overload detected: Load #18", severity: "INFO" },
];

const severityStyles: Record<AlertSeverity, string> = {
    INFO: "border-secondary text-muted-foreground",
    PRIORITY: "border-accent text-accent",
    CRITICAL: "border-primary text-primary font-bold",
};

export function LiveAlertsCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Live Alerts</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {alerts.map((alert, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center justify-between p-3 rounded-lg border border-transparent transition-colors hover:border-accent/50",
                                index === 0 && "border-l-2 border-l-primary font-bold bg-secondary"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-sm text-muted-foreground">{alert.time}</span>
                                <p>{alert.type}</p>
                            </div>
                            <Badge
                                variant="outline"
                                className={cn("text-xs", severityStyles[alert.severity])}
                            >
                                {alert.severity}
                            </Badge>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
