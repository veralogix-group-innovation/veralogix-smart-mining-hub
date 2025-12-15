'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const forecastData = [
  { value: 168800 },
  { value: 170200 },
  { value: 169500 },
  { value: 171000 },
  { value: 172500 },
  { value: 172000 },
];

const recommendations = [
    "Reassign 1 truck from Pit A to Pit B to reduce average queue time.",
    "Schedule rework on Ramp 3 within 24h due to increased risk score.",
    "Review operator TR-811's performance for potential fatigue coaching.",
];

export function AiInsightsStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Risk Score Card */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-base">AI Section 54 Risk Score</CardTitle>
            <Badge variant="outline" className="border-accent text-accent text-xs">AI Risk Score</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold font-headline text-primary">68<span className="text-3xl text-muted-foreground">/100</span></p>
          <p className="text-xs text-muted-foreground mt-2">Based on serious non-compliance events, recent near-misses, and CPS activations.</p>
        </CardContent>
      </Card>

      {/* Diesel Forecast Card */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-base">AI Diesel Spend Forecast (24h)</CardTitle>
            <Badge variant="outline" className="border-accent text-accent text-xs">AI Prediction</Badge>
          </div>
        </CardHeader>
        <CardContent>
            <div className="flex justify-between items-end">
                <p className="text-3xl font-bold font-headline">R172,500</p>
                <div className="h-12 w-24">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={forecastData}>
                            <defs>
                                <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="url(#forecastFill)" strokeWidth={2} />
                        </AreaChart>
                     </ResponsiveContainer>
                </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Predicted cost based on current operational tempo and haulage patterns.</p>
        </CardContent>
      </Card>

      {/* Recommendations Card */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-base">AI Top Recommendations</CardTitle>
             <Badge variant="outline" className="border-accent text-accent text-xs">AI Insight</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.slice(0, 2).map((rec, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <p className="text-muted-foreground">{rec}</p>
              </li>
            ))}
          </ul>
           <p className="text-xs text-muted-foreground/50 mt-4">AI-generated – subject to human review.</p>
        </CardContent>
      </Card>
    </div>
  );
}
