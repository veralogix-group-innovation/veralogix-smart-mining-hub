'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const profileData = [
  { chainage: 0, design: 100, asBuilt: 100.1 },
  { chainage: 50, design: 102.5, asBuilt: 102.8 },
  { chainage: 100, design: 105, asBuilt: 105.5 },
  { chainage: 150, design: 107.5, asBuilt: 107.4 },
  { chainage: 200, design: 110, asBuilt: 109.8 },
  { chainage: 250, design: 112.5, asBuilt: 112.1 },
  { chainage: 300, design: 115, asBuilt: 115.3 },
];

export function RoadProfileCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Ramp Profile: HR-B-RMP-03</CardTitle>
                <CardDescription>Design elevation vs. as-built profile.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={profileData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                            <XAxis dataKey="chainage" stroke="hsl(var(--muted-foreground))" fontSize={12} unit="m" />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="m" />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                                labelStyle={{ color: 'hsl(var(--foreground))' }}
                            />
                            <Line type="monotone" dataKey="design" strokeWidth={2} stroke="hsl(var(--accent))" name="Design" dot={false} />
                            <Line type="monotone" dataKey="asBuilt" strokeWidth={2} stroke="hsl(var(--primary))" name="As-Built" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
