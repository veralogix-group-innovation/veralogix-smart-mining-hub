import { Button } from "@/components/ui/button";
import { EsgHighlightsCard } from "./components/esg-highlights-card";
import { ExecutiveKpiGrid } from "./components/executive-kpi-grid";
import { ProductivityEfficiencyCard } from "./components/productivity-efficiency-card";
import { RehabProgressCard } from "./components/rehab-progress-card";
import { SafetyComplianceCard } from "./components/safety-compliance-card";

export default function ExecutivePage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline font-semibold text-primary">Executive Overview</h1>
          <p className="text-muted-foreground">High-level summary of site performance against strategic goals.</p>
        </div>
        <Button disabled>Download Executive PDF Pack</Button>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Today vs. Plan</h2>
        <ExecutiveKpiGrid />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
           <h2 className="text-xl font-semibold text-primary/80">Safety &amp; Compliance</h2>
           <SafetyComplianceCard />
        </div>
        <div className="space-y-4">
           <h2 className="text-xl font-semibold text-primary/80">Productivity &amp; Efficiency</h2>
           <ProductivityEfficiencyCard />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">ESG & Rehab Highlights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RehabProgressCard />
            <div className="lg:col-span-2">
                <EsgHighlightsCard />
            </div>
        </div>
      </section>
    </div>
  );
}
