'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

const anomalies = [
    { text: "Truck TRK-107: unusually high idle time vs fleet average.", detailsLink: "#" },
    { text: "Shovel SHV-02: cycle time trending 8% above normal baseline.", detailsLink: "#" },
    { text: "Ramp C: Increased vibration data suggests potential road degradation.", detailsLink: "#" },
];

export function AiAnomalyWatchCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>AI Anomaly Watch</CardTitle>
                        <CardDescription>Key performance deviations detected this shift.</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent text-xs">AI Anomaly Detection</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <ul className="space-y-3">
                    {anomalies.map((anomaly, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                            <AlertCircle className="size-4 mt-0.5 text-primary shrink-0" />
                            <div>
                                <p className="text-muted-foreground">{anomaly.text}</p>
                                <a href={anomaly.detailsLink} className="text-xs text-primary hover:underline">View details</a>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="text-xs text-muted-foreground/50 pt-2">AI-generated – subject to human review.</p>
            </CardContent>
        </Card>
    );
}
