'use client';

import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TreeDeciduous, Users } from "lucide-react";

const highlights = [
    {
        title: "Diesel Efficiency",
        value: "4.2%",
        description: "Reduction in diesel burned per tonne vs last year.",
        icon: TrendingDown,
        color: "text-chart-1"
    },
    {
        title: "Digital Surveys",
        value: "65%",
        description: "Increase in drone-based stockpile surveys vs manual.",
        icon: TreeDeciduous,
        color: "text-chart-2"
    },
    {
        title: "CPS Interventions",
        value: "18%",
        description: "Decrease in collision-related downtime vs baseline.",
        icon: Users,
        color: "text-chart-5"
    }
];

export function EsgHighlightsCard() {
    return (
        <Card className="card-hover h-full">
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {highlights.map((item) => (
                    <div key={item.title} className="flex flex-col justify-center text-center p-4 rounded-lg bg-secondary">
                        <item.icon className={`mx-auto size-8 mb-2 ${item.color}`} />
                        <p className={`text-3xl font-bold font-headline ${item.color}`}>{item.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
