'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AiRoadRiskIndexTile() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-medium text-muted-foreground">AI Road Risk Index</CardTitle>
                    <Badge variant="outline" className="border-accent text-accent text-xs">AI Risk Index</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-6xl font-bold font-headline text-primary">42<span className="text-4xl text-muted-foreground">/100</span></p>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Surface condition</span>
                        <span className="font-bold text-accent">Degrading</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Gradient & width compliance</span>
                        <span className="font-bold text-foreground">Attention</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
