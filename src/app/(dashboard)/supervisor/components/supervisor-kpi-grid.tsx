import { KPITile } from "@/components/shared/kpi-tile";

const kpis = [
  { title: "Production Rate", value: "1,250", unit: "t/h", trend: "up", trendValue: "+3% vs target" },
  { title: "Average Cycle Time", value: "34.2", unit: "min", trend: "down", trendValue: "-2.1% (good)" },
  { title: "Average Queue Time", value: "4.8", unit: "min", trend: "flat", trendValue: "+0.5% vs avg" },
  { title: "Active Trucks", value: "28/32", unit: "", trend: "flat", trendValue: "4 Loading, 18 Hauling, 6 Queue" },
  { title: "Open Safety Incidents", value: "1", unit: "High", trend: "up", trendValue: "New alert: Geofence breach" },
];


export function SupervisorKpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
