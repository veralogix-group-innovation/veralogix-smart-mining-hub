'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const kpis = [
  { title: "Overall Sensor Coverage", value: 85, description: "Mobile + Plant sensors installed" },
  { title: "Mobile & Road Coverage", value: 88, description: "Yellow Fleet + road vehicles" },
  { title: "Plant & Tailings Coverage", value: 79, description: "Crusher to tailings dam chain" },
];

function CoverageKpiTile({ title, value, description }: { title: string, value: number, description: string }) {
    return (
        <Card className="card-hover">
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-muted-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-headline">{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
                <p className="text-xs text-muted-foreground pt-1">{description}</p>
            </CardContent>
        </Card>
    );
}

export function CoverageKpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => (
        <CoverageKpiTile
          key={index}
          title={kpi.title}
          value={kpi.value}
          description={kpi.description}
        />
      ))}
    </div>
  );
}
