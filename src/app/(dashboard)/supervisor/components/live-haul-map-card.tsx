'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const mockTruckData = {
    id: 'TRK-118',
    operatorId: '821',
    currentCycle: 'Hauling to Crusher',
    lastPayload: '65.2t',
    status: 'Hauling'
};

export function LiveHaulMapCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Live Haul Map</CardTitle>
                <CardDescription>Real-time truck positions and status.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <MapShell />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
                                View Truck TRK-118
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Truck Details: {mockTruckData.id}</SheetTitle>
                                <SheetDescription>
                                    Live data for the selected asset.
                                </SheetDescription>
                            </SheetHeader>
                            <Separator className="my-4" />
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Assigned Operator ID</span>
                                    <span className="font-mono">{mockTruckData.operatorId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Current Cycle</span>
                                    <span className="font-medium">{mockTruckData.currentCycle}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status</span>
                                    <span className="font-medium">{mockTruckData.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Last Payload (Loadscan)</span>
                                    <span className="font-medium">{mockTruckData.lastPayload}</span>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </CardContent>
        </Card>
    );
}
