'use client';

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const coverageData = [
    { label: "Crushing & Screening Coverage", value: 78 },
    { label: "Thickener & Pumps Coverage", value: 82 },
    { label: "Tailings & Return Water Coverage", value: 65 },
];

export function PlantSensorCoverageCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Plant Sensor Coverage</CardTitle>
                <CardDescription>Health and coverage of key process sensors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {coverageData.map((item) => (
                    <div key={item.label}>
                        <div className="flex justify-between items-baseline mb-1">
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className="text-sm text-muted-foreground font-bold">{item.value}%</p>
                        </div>
                        <Progress value={item.value} className="h-2" />
                    </div>
                ))}

                <Button asChild variant="link" className="p-0 h-auto text-primary mt-4">
                    <Link href="/plant">
                        View details
                        <ArrowRight className="ml-2 size-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
