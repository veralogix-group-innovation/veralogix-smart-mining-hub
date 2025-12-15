import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";
import { ViewToggle } from "@/components/shared/view-toggle";

export default function HeatmapsPage() {
  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-headline font-semibold text-primary">Risk Heatmaps</h1>
          <p className="text-muted-foreground">AI-generated risk analysis based on terrain, traffic, and incidents.</p>
        </div>
        <ViewToggle />
      </header>
      <Card>
        <CardHeader>
          <CardTitle>High-Risk Zone Analysis</CardTitle>
          <CardDescription>Overlay heatmaps for unstable terrain, near-miss hotspots, and more.</CardDescription>
        </CardHeader>
        <MapShell />
      </Card>
    </div>
  );
}
