'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, Stethoscope } from "lucide-react";

const auditItems = [
    {
        title: "Licenses Expiring (next 30d)",
        count: 12,
        details: "Focus on Haul Truck Operators",
        icon: FileText,
    },
    {
        title: "Medicals Expiring (next 30d)",
        count: 8,
        details: "Mainly at Pit B & Workshop",
        icon: Stethoscope,
    },
    {
        title: "Training Hotspots (Induction)",
        count: 2,
        details: "New MACMAHON intake requires site induction",
        icon: UserCheck,
    }
];

export function AuditReadinessCard() {
    return (
        <Card className="card-hover">
            <CardHeader className="flex-row items-center justify-between">
                <div>
                    <CardTitle>DMRE Audit Readiness</CardTitle>
                    <CardDescription>Expirations and hotspots requiring attention.</CardDescription>
                </div>
                 <Button disabled>Export Audit Summary</Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {auditItems.map((item, index) => (
                    <div key={index} className="p-4 bg-secondary rounded-lg flex gap-4 items-start">
                        <item.icon className="size-8 text-primary mt-1" />
                        <div>
                            <p className="text-2xl font-bold font-headline">{item.count}</p>
                            <p className="font-medium leading-tight">{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}