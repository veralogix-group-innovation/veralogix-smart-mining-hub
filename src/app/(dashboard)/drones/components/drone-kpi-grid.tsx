'use client';

import { KPITile } from "@/components/shared/kpi-tile";

const kpis = [
  { title: "Missions Flown (WTD)", value: "28/40", unit: "", trend: "up" as const, trendValue: "+5 vs last week" },
  { title: "Stockpile Surveys Done", value: "18/22", unit: "", trend: "flat" as const, trendValue: "On track" },
  { title: "Perimeter Coverage (24h)", value: "95.2", unit: "%", trend: "up" as const, trendValue: "No gaps detected" },
  { title: "Avg. Survey Time", value: "42", unit: "min", trend: "down" as const, trendValue: "-4m vs baseline" },
];

export function DroneKpiGrid() {
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
