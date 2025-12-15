'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const priorityMap: Record<string, string> = {
    High: "text-destructive border-destructive",
    Medium: "text-accent border-accent",
    Low: "text-muted-foreground border-muted-foreground",
};

const reworkItems = [
    { id: "R-14", priority: "High", reason: "Repeated near-misses and out-of-spec gradient." },
    { id: "Ramp 3 North", priority: "Medium", reason: "Poor surface combined with high queue time." },
    { id: "Bench B-07", priority: "Low", reason: "Tolerances drifting, but within acceptable limits." },
];


export function AiReworkPriorityCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>AI rework suggestions</CardTitle>
                <CardDescription>Ranked list of road segments requiring attention.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {reworkItems.map((item) => (
                        <li key={item.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                           <div className="flex-1">
                                <p className="font-bold">{item.id}</p>
                                <p className="text-sm text-muted-foreground">{item.reason}</p>
                           </div>
                           <Badge variant="outline" className={`shrink-0 ${priorityMap[item.priority]}`}>{item.priority} Priority</Badge>
                        </li>
                    ))}
                </ul>
                <p className="text-xs text-muted-foreground/50 mt-6">AI-generated ranking – final priority to be confirmed by engineering.</p>
            </CardContent>
        </Card>
    );
}
