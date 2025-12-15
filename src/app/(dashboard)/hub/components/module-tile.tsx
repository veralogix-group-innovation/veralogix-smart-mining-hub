import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill, type StatusPillProps } from "@/components/shared/status-pill";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export interface ModuleTileProps {
  title: string;
  description: string;
  status: StatusPillProps['status'];
  kpis: { label: string; value: string; isAI?: boolean }[];
  link: string;
  icon: React.ElementType;
}

export function ModuleTile({ title, description, status, kpis, link, icon: Icon }: ModuleTileProps) {
  return (
    <Card className="card-hover flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-headline font-semibold text-primary/90 flex items-center gap-2">
              <Icon className="size-5" />
              {title}
            </CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <StatusPill status={status} />
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex justify-between items-baseline text-sm">
            <p className="text-muted-foreground flex items-center gap-1.5">
              {kpi.isAI && <BrainCircuit className="size-3.5 text-primary" />}
              {kpi.label}
              </p>
            <p className={cn("font-semibold text-foreground", kpi.isAI && "text-primary")}>{kpi.value}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <Button asChild variant="link" className="p-0 h-auto text-primary">
          <Link href={link}>
            View details
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        {kpis.some(k => k.isAI) && (
            <p className="text-xs text-muted-foreground/50">AI-generated – subject to human review.</p>
        )}
      </CardFooter>
    </Card>
  );
}
