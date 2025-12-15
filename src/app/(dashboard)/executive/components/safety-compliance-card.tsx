'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const incidentData = [
    { month: "Jan", incidents: 5 },
    { month: "Feb", incidents: 4 },
    { month: "Mar", incidents: 6 },
    { month: "Apr", incidents: 3 },
    { month: "May", incidents: 2 },
];

const complianceData = [
    { name: 'Status', compliant: 96, expiring: 3, nonCompliant: 1 }
];

export function SafetyComplianceCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Safety & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">Incident Rate (TRIFR)</p>
                        <p className="text-2xl font-bold font-headline">1.82</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Near Misses (MTD)</p>
                        <p className="text-2xl font-bold font-headline">28</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">CPS Interventions</p>
                        <p className="text-2xl font-bold font-headline">12</p>
                    </div>
                </div>
                <Separator />
                <div>
                    <CardDescription>Incident Trend (Last 5 Months)</CardDescription>
                    <div className="h-32 mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={incidentData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                               <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                               <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                               <Tooltip cursor={{ fill: 'hsl(var(--secondary))' }} contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                               <Bar dataKey="incidents" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <Separator />
                 <div>
                    <CardDescription className="mb-2">Workforce Compliance Snapshot</CardDescription>
                     <div className="h-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={complianceData} stackOffset="expand">
                                <XAxis type="number" hide domain={[0, 100]} />
                                <YAxis type="category" dataKey="name" hide />
                                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                                <Bar dataKey="compliant" fill="hsl(var(--chart-1))" stackId="a" />
                                <Bar dataKey="expiring" fill="hsl(var(--chart-2))" stackId="a" />
                                <Bar dataKey="nonCompliant" fill="hsl(var(--chart-5))" stackId="a" />
                            </BarChart>
                        </ResponsiveContainer>
                         <div className="mt-2 flex justify-end text-xs text-muted-foreground gap-4">
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-1" />Compliant (96%)</span>
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-2" />Expiring (3%)</span>
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-5" />Non-Compliant (1%)</span>
                        </div>
                     </div>
                 </div>
            </CardContent>
        </Card>
    );
}
