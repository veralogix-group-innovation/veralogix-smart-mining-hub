import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MapShell({ className }: { className?: string }) {
  return (
    <CardContent className={cn("p-2", className)}>
        <div className="aspect-[16/9] w-full rounded-md bg-secondary flex items-center justify-center p-4"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <div className="rounded-lg bg-background/80 p-4 text-center backdrop-blur-sm">
            <h3 className="font-semibold">Map Visualization</h3>
            <p className="text-sm text-muted-foreground">Live map data will be displayed here.</p>
          </div>
        </div>
    </CardContent>
  );
}
