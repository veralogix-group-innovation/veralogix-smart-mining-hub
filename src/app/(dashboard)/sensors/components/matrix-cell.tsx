'use client';

import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export type MatrixStatus = "installed" | "missing" | "not_required";

interface MatrixCellProps {
  status: MatrixStatus;
}

export function MatrixCell({ status }: MatrixCellProps) {
  if (status === 'not_required') {
    return (
      <div className="text-center text-muted-foreground/30">-</div>
    );
  }

  const isInstalled = status === 'installed';

  return (
    <div className={cn(
      "flex h-full w-full items-center justify-center rounded-sm text-xs font-bold",
      isInstalled ? "bg-chart-5/50 text-chart-1" : "bg-destructive/20 text-destructive",
    )}>
      {isInstalled ? <Check className="size-4" /> : <X className="size-4" />}
    </div>
  );
}
