'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReportFilters } from "./components/report-filters";
import { ReportPreviewLayout } from "./components/report-preview-layout";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const reportTypes = [
  "Daily Shift Pack",
  "Weekly Efficiency Review",
  "Monthly Safety & Compliance",
  "Quarterly ROI & ESG",
  "Network & OT SLA",
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Report Packs</h1>
        <p className="text-muted-foreground">Generate and view operational reports.</p>
      </header>

      <Tabs defaultValue={reportTypes[0]} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
          {reportTypes.map((type) => (
            <TabsTrigger key={type} value={type} className="h-12 text-center sm:h-10">{type}</TabsTrigger>
          ))}
        </TabsList>
        
        <ReportFilters />

        {reportTypes.map((type) => (
          <TabsContent key={type} value={type} className="space-y-6">
            <ReportPreviewLayout title={type} />
            <div className="flex justify-end gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button disabled>Export PDF</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Export functionality is not yet available.</p>
                        </TooltipContent>
                    </Tooltip>
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <Button disabled>Export CSV</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Export functionality is not yet available.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
