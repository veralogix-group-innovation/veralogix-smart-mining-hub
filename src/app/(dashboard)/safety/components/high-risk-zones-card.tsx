'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const riskDrivers = [
  "Increased near-misses at Ramp 3 intersection.",
  "Higher-than-normal night shift fatigue alerts.",
  "CPS interventions up 15% vs last week.",
];

export function HighRiskZonesCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>AI Hotspot Risk Score</CardTitle>
            </div>
            <Badge variant="outline" className="border-accent text-accent text-xs">AI Risk Score</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
            <p className="text-6xl font-bold font-headline text-primary">72<span className="text-4xl text-muted-foreground">/100</span></p>
        </div>
        <ul className="space-y-2">
          {riskDrivers.map((driver, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <p className="text-muted-foreground">{driver}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground/50 pt-2">AI-generated – subject to supervisor review.</p>
      </CardContent>
    </Card>
  );
}
