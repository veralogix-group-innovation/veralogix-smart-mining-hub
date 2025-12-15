'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const recommendedActions = [
  "Lower speed limit on Ramp 3 by 10 km/h for the next shift.",
  "Schedule toolbox talk at East Dump intersection about right-of-way.",
  "Review Cabin-Eye fatigue events on Night Shift in Pit 2.",
];

export function RecommendedActionsCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>AI suggests...</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {recommendedActions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Lightbulb className="size-4 mt-1 text-accent shrink-0" />
              <p className="text-muted-foreground">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground/50 pt-2">AI-generated – subject to supervisor review.</p>
      </CardContent>
    </Card>
  );
}
