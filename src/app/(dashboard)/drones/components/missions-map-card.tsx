'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";

export function MissionsMapCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Missions Map</CardTitle>
                <CardDescription>Live and completed mission paths and survey areas.</CardDescription>
            </CardHeader>
            <CardContent>
                <MapShell />
            </CardContent>
        </Card>
    );
}
