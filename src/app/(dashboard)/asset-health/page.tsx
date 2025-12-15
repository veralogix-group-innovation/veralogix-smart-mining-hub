import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AssetHealthPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Fleet & Haulage Analytics</h1>
        <p className="text-muted-foreground">Monitor and predict the health of your entire fleet.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Asset Utilization</CardTitle>
            <CardDescription>Real-time usage and efficiency metrics.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Predictive Maintenance</CardTitle>
            <CardDescription>Upcoming service requirements and alerts.</CardDescription>
          </CardHeader>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>Fuel Consumption</CardTitle>
            <CardDescription>Analysis of fuel usage across the fleet.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
