'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusPill, StatusPillStatus } from "@/components/shared/status-pill";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

const gateActivity = [
  { time: '14:02', workerId: 'V0822', role: 'Operator', site: 'Pit B', status: 'OK' as StatusPillStatus, reason: '' },
  { time: '13:58', workerId: 'C1045', role: 'Maintainer', site: 'Workshop', status: 'Critical' as StatusPillStatus, reason: 'Expired License' },
  { time: '13:55', workerId: 'V0731', role: 'Supervisor', site: 'Pit A', status: 'OK' as StatusPillStatus, reason: '' },
  { time: '13:49', workerId: 'C3312', role: 'Operator', site: 'ROM Pad', status: 'Warning' as StatusPillStatus, reason: 'Medical Exp. (3d)' },
  { time: '13:45', workerId: 'V0910', role: 'Geologist', site: 'Pit B', status: 'OK' as StatusPillStatus, reason: '' },
];

const chartData = [
  { hour: "06:00", compliant: 120, blocked: 5 },
  { hour: "07:00", compliant: 150, blocked: 8 },
  { hour: "08:00", compliant: 110, blocked: 3 },
  { hour: "09:00", compliant: 90, blocked: 2 },
  { hour: "10:00", compliant: 70, blocked: 1 },
  { hour: "11:00", compliant: 80, blocked: 0 },
  { hour: "12:00", compliant: 60, blocked: 4 },
  { hour: "13:00", compliant: 95, blocked: 2 },
];

const chartConfig = {
  compliant: { label: "Compliant", color: "hsl(var(--chart-1))" },
  blocked: { label: "Blocked", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

export function GateActivityCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Gate Activity</CardTitle>
                <CardDescription>Recent entries and hourly throughput.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="text-sm font-medium mb-2">Recent Gate Events</h4>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Time</TableHead>
                                <TableHead>Worker ID</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {gateActivity.map((event, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-mono text-xs">{event.time}</TableCell>
                                    <TableCell className="font-mono text-xs">{event.workerId}</TableCell>
                                    <TableCell>{event.role}</TableCell>
                                    <TableCell><StatusPill status={event.status} /></TableCell>
                                    <TableCell className="text-destructive">{event.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Separator />
                <div>
                    <h4 className="text-sm font-medium mb-2">Entries by Hour</h4>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{top: 5, right: 0, left: -20, bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <ChartTooltip
                                    cursor={{ fill: 'hsl(var(--secondary))' }}
                                    content={<ChartTooltipContent />}
                                />
                                <Bar dataKey="compliant" stackId="a" fill="var(--color-compliant)" radius={[0, 0, 0, 0]} />
                                <Bar dataKey="blocked" stackId="a" fill="var(--color-blocked)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}