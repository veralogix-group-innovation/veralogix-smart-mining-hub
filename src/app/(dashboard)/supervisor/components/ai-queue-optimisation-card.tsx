'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AiQueueOptimisationCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>AI Queue Optimisation</CardTitle>
                        <CardDescription>Real-time fleet balancing suggestion.</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent text-xs">AI Recommendation</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                    AI suggests sending <span className="font-bold text-primary">1 extra truck to Shovel 2</span> and <span className="font-bold text-primary">1 less truck to Shovel 4</span> to cut overall queue time by an estimated <span className="font-bold text-primary">~12%</span>.
                </p>
                <Button asChild>
                    <Link href="/twin">
                        Apply in Scenario View
                    </Link>
                </Button>
                <p className="text-xs text-muted-foreground/50 pt-2">AI-generated – subject to human review.</p>
            </CardContent>
        </Card>
    );
}
