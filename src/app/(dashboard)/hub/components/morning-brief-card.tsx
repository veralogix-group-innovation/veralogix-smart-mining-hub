'use client';

import { useState, useEffect } from 'react';
import { generateSmartHubMorningBrief } from '@/ai/flows/smart-hub-morning-brief';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Lightbulb } from 'lucide-react';

export function MorningBriefCard() {
  const [insights, setInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrief = async () => {
      setLoading(true);
      try {
        const result = await generateSmartHubMorningBrief({
          userRole: 'Mine Operator',
          siteName: 'Pilbara Mine',
          shiftType: 'Day Shift',
        });
        setInsights(result.topInsights);
      } catch (error) {
        console.error('Failed to generate morning brief:', error);
        setInsights(['Could not load morning brief.']);
      } finally {
        setLoading(false);
      }
    };

    fetchBrief();
  }, []);

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-lg font-semibold text-primary">
          <Lightbulb />
          Your Morning Brief
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        ) : (
          <ul className="space-y-3">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                <p className="text-muted-foreground">{insight}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
