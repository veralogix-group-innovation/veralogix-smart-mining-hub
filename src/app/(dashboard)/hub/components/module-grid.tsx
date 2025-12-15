import { ModuleTile, ModuleTileProps } from "./module-tile";
import { GitCommit, ScanLine, Car, ShieldCheck, Cog, Wind } from "lucide-react";

const modules: ModuleTileProps[] = [
  {
    title: "SentryMine™ & SentryTrack™",
    description: "Access control and compliance management.",
    status: "OK",
    kpis: [
      { label: "% entries compliant", value: "98.7%" },
      { label: "Blocked entries (month)", value: "42" },
      { label: "DMRE audit readiness", value: "95%", isAI: true },
    ],
    link: "/compliance",
    icon: ShieldCheck,
  },
  {
    title: "Trimble® Earthworks",
    description: "High-precision grade control and site management.",
    status: "OK",
    kpis: [
      { label: "Haul roads in spec", value: "92%" },
      { label: "Rework hours (week)", value: "14" },
      { label: "Fuel per m³ moved", value: "0.8L" },
    ],
    link: "/earthworks",
    icon: GitCommit,
  },
  {
    title: "Loadscan® LVS",
    description: "Accurate load volume scanning for haul trucks.",
    status: "Warning",
    kpis: [
      { label: "Overloads this shift", value: "8" },
      { label: "Uplift vs Plan (ZAR)", value: "R85k", isAI: true },
      { label: "Carryback tonnes", value: "1.2t" },
    ],
    link: "/fleet",
    icon: ScanLine,
  },
  {
    title: "Prox-Eye™ & Cabin-Eye™",
    description: "Collision prevention and operator fatigue monitoring.",
    status: "OK",
    kpis: [
      { label: "Near-misses / 1k hrs", value: "0.2" },
      { label: "Fatigue Risk Score", value: "Low", isAI: true },
      { label: "Fatigue events resolved", value: "11" },
    ],
    link: "/safety",
    icon: Car,
  },
  {
    title: "Tracker Fleet Intelligence",
    description: "Vehicle tracking, fuel monitoring, and driver behaviour.",
    status: "OK",
    kpis: [
      { label: "Total idle hours", value: "45.2" },
      { label: "Route Adherence", value: "99.1%" },
      { label: "Fuel Anomaly Alerts", value: "2", isAI: true },
    ],
    link: "/fleet",
    icon: Cog,
  },
  {
    title: "VTOL Drone Intelligence",
    description: "Aerial surveys, stockpile measurement, and security.",
    status: "Critical",
    kpis: [
      { label: "Missions flown (week)", value: "12/20" },
      { label: "Stockpile Variance", value: "-1.5%", isAI: true },
      { label: "Perimeter coverage (24h)", value: "78%" },
    ],
    link: "/drones",
    icon: Wind,
  },
];

export function ModuleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleTile key={module.title} {...module} />
      ))}
    </div>
  );
}
