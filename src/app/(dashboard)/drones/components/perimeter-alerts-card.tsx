'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Siren } from "lucide-react";

const alerts = [
    { zone: "Fence Section 7B", time: "04:15", description: "Thermal signature detected." },
    { zone: "West Gate Approach", time: "02:50", description: "Vehicle stopped near boundary." },
    { zone: "Perimeter Road North", time: "23:05", description: "Unusual movement detected." },
];

export function PerimeterAlertsCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Perimeter Security Alerts</CardTitle>
                <CardDescription>Latest alerts from automated drone patrols.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4 mb-6">
                    <Siren className="size-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Alerts in last 24h</p>
                        <p className="text-3xl font-bold font-headline">5</p>
                    </div>
                </div>
                <ul className="space-y-4">
                    {alerts.map((alert, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                           <span className="font-mono text-xs text-muted-foreground mt-1">{alert.time}</span>
                           <div>
                                <p className="font-medium">{alert.zone}</p>
                                <p className="text-muted-foreground">{alert.description}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
