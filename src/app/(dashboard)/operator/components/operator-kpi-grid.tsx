import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const kpis = [
    { title: "Assigned Machine", value: "TRK-203", description: "65t Haul Truck" },
    { title: "Current Shift", value: "06:00 - 18:00", description: <Badge variant="outline" className="border-primary text-primary">4h 15m remaining</Badge> },
    { title: "Hours on Shift", value: "7h 45m", description: "Including breaks" },
    { title: "Fatigue Score", value: "22", description: <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 px-2.5 py-1 text-xs font-semibold text-background">NORMAL</div> },
];

export function OperatorKpiGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
                <Card key={index} className="card-hover">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium text-muted-foreground">
                            {kpi.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold font-headline">{kpi.value}</p>
                        <div className="text-sm text-muted-foreground mt-1">{kpi.description}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
