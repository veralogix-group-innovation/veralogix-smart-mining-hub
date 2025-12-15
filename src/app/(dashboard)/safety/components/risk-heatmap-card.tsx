'use client';

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function RiskHeatmapCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <CardTitle>Risk Heatmap</CardTitle>
                <CardDescription>High-risk zones based on incident density.</CardDescription>
            </div>
            <ToggleGroup type="single" defaultValue="combined" variant="outline">
                <ToggleGroupItem value="v2v">V2V</ToggleGroupItem>
                <ToggleGroupItem value="v2p">V2P</ToggleGroupItem>
                <ToggleGroupItem value="combined">Combined</ToggleGroupItem>
            </ToggleGroup>
        </div>
      </CardHeader>
      <MapShell />
    </Card>
  );
}
