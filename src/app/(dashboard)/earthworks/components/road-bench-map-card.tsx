'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const mockSegmentData = {
    id: 'HR-B-RMP-03',
    status: 'Out of Spec',
    gradient: '10.5%',
    width: '28m',
    lastRework: '2024-07-15',
    risk: 'High (slippage risk in wet conditions)',
};

export function RoadBenchMapCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Road & Bench Map</CardTitle>
                <CardDescription>Live status of road segments and bench tolerances. Lines in brighter green are out of spec.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <MapShell />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
                                View Segment HR-B-RMP-03
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Segment Details: {mockSegmentData.id}</SheetTitle>
                                <SheetDescription>
                                    Live data for the selected road segment.
                                </SheetDescription>
                            </SheetHeader>
                            <Separator className="my-4" />
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status</span>
                                    <span className="font-bold text-primary">{mockSegmentData.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Average Gradient</span>
                                    <span className="font-medium">{mockSegmentData.gradient}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-muted-foreground">Average Width</span>
                                    <span className="font-medium">{mockSegmentData.width}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Last Rework</span>
                                    <span className="font-mono text-xs">{mockSegmentData.lastRework}</span>
                                </div>
                                 <Separator />
                                 <div>
                                    <h4 className="font-medium mb-2">Risk Analysis</h4>
                                    <p className="text-muted-foreground">{mockSegmentData.risk}</p>
                                 </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </CardContent>
        </Card>
    );
}
