'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const reworkData = [
  { id: 'HR-C-01', site: 'North Ramp', hours: 8.5, fuel: 170, cost: 3400 },
  { id: 'Bench-L3-E', site: 'East Wall', hours: 6.2, fuel: 124, cost: 2480 },
  { id: 'HR-A-05', site: 'Main Haul', hours: 4.0, fuel: 80, cost: 1600 },
  { id: 'Dump-2-Tip', site: 'South Dump', hours: 3.1, fuel: 62, cost: 1240 },
];

const problemSegments = [
    'HR-C-01 (High Traffic, Poor Drainage)',
    'Bench-L3-E (Material Compaction Issues)',
    'HR-A-05 (Repeated Corner Damage)',
];

export function ReworkAnalysisCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Rework & Cost Analysis</CardTitle>
                <CardDescription>Breakdown of rework effort and associated costs for out-of-spec segments.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Segment ID</TableHead>
                                <TableHead>Site</TableHead>
                                <TableHead>Rework (hrs)</TableHead>
                                <TableHead>Fuel (L)</TableHead>
                                <TableHead>Est. Cost (ZAR)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {reworkData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="font-mono text-xs">{row.id}</TableCell>
                                    <TableCell>{row.site}</TableCell>
                                    <TableCell>{row.hours.toFixed(1)}</TableCell>
                                    <TableCell>{row.fuel}</TableCell>
                                    <TableCell>R{row.cost.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="md:col-span-1">
                    <h4 className="font-medium mb-2">Top 3 Problem Segments</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        {problemSegments.map((segment, index) => (
                           <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 size-2 shrink-0 rounded-full bg-accent" />
                            <span>{segment}</span>
                           </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
