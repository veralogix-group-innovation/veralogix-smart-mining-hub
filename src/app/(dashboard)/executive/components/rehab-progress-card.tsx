'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function RehabProgressCard() {
    const progress = 72;
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Rehabilitation Progress</CardTitle>
                <CardDescription>Area restored vs annual plan.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                        <p className="text-sm font-medium text-muted-foreground">Progress</p>
                        <p className="text-2xl font-bold font-headline text-primary">{progress}%</p>
                    </div>
                    <Progress value={progress} className="h-3" />
                     <p className="text-xs text-muted-foreground text-right pt-1">
                        <span className="font-bold text-foreground">14.4ha</span> / 20ha
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
