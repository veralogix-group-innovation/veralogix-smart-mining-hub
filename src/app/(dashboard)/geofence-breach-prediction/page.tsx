import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";

export default function GeofenceBreachPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Geofence Breach Prediction</h1>
        <p className="text-muted-foreground">Proactive alerts for potential geofence boundary crossings.</p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Site Geofence Map</CardTitle>
          <CardDescription>Live map showing vehicle trajectories and predicted breach alerts.</CardDescription>
        </CardHeader>
        <MapShell />
      </Card>
    </div>
  );
}
