'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusPill } from "@/components/shared/status-pill";
import type { StatusPillStatus } from "@/components/shared/status-pill";

const missions = [
    { missionId: 'VTOL-24-0718-01', type: 'Stockpile', duration: '38m', area: '1.2ha', outcome: 'OK' },
    { missionId: 'VTOL-24-0718-02', type: 'Perimeter', duration: '55m', area: '7.5km', outcome: 'OK' },
    { missionId: 'VTOL-24-0718-03', type: 'Emergency', duration: '12m', area: '0.3ha', outcome: 'Warning' },
    { missionId: 'VTOL-24-0717-08', type: 'Stockpile', duration: '41m', area: '1.5ha', outcome: 'OK' },
    { missionId: 'VTOL-24-0717-07', type: 'Perimeter', duration: '52m', area: '7.5km', outcome: 'OK' },
];

export function MissionsListCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Recent Missions</CardTitle>
                <CardDescription>List of recently completed drone flights.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Mission ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Area/Dist.</TableHead>
                            <TableHead>Outcome</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {missions.map((mission) => (
                            <TableRow key={mission.missionId}>
                                <TableCell className="font-mono text-xs">{mission.missionId}</TableCell>
                                <TableCell>{mission.type}</TableCell>
                                <TableCell>{mission.duration}</TableCell>
                                <TableCell>{mission.area}</TableCell>
                                <TableCell>
                                    <StatusPill status={mission.outcome as StatusPillStatus} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
