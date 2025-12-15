'use client';

import { KPITile } from "@/components/shared/kpi-tile";

const kpis = [
  { title: "Near-Miss Events (7d)", value: "18", unit: "events", trend: "down" as "down", trendValue: "-12% vs last week" },
  { title: "CPS Interventions (L9)", value: "4", unit: "actions", trend: "flat" as "flat", trendValue: "Stable" },
  { title: "Fatigue/Distraction Events", value: "27", unit: "alerts", trend: "down" as "down", trendValue: "Improved operator awareness" },
  { title: "Collision Downtime (hrs)", value: "2.5", unit: "hours", trend: "up" as "up", trendValue: "Incident on Ramp B" },
];

export function SafetyKpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <KPITile
          key={index}
          title={kpi.title}
          value={kpi.value}
          unit={kpi.unit}
          trend={kpi.trend}
          trendValue={kpi.trendValue}
        />
      ))}
    </div>
  );
}
