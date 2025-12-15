'use client';

import { KPITile } from "@/components/shared/kpi-tile";

const kpis = [
    { title: "Haul Roads in Spec", value: "92.1", unit: "%", trend: "up", trendValue: "+1.2% vs last week" },
    { title: "Benches in Tolerance", value: "88.7", unit: "%", trend: "down", trendValue: "-0.5% vs last week" },
    { title: "Rework Hours (WTD)", value: "28.5", unit: "hrs", trend: "down", trendValue: "Reduced from 35" },
    { title: "Fuel per m³ Moved", value: "0.82", unit: "L", trend: "flat", trendValue: "Stable" },
];

export function EarthworksKpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <KPITile
          key={index}
          title={kpi.title}
          value={kpi.value}
          unit={kpi.unit}
          trend={kpi.trend as "up" | "down" | "flat"}
          trendValue={kpi.trendValue}
        />
      ))}
    </div>
  );
}
