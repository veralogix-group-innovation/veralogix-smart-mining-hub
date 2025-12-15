import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapShell } from "@/components/shared/map-shell";

export default function DynamicRouteOptimizationPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Dynamic Route Optimization</h1>
        <p className="text-muted-foreground">AI-powered haul truck path suggestions for real-time efficiency gains.</p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Haulage Map</CardTitle>
          <CardDescription>Live view of all haul trucks with AI-suggested optimal routing.</CardDescription>
        </CardHeader>
        <MapShell />
      </Card>
    </div>
  );
}
