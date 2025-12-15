'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { naturalLanguageQuery } from '@/ai/flows/natural-language-query';
import { useToast } from "@/hooks/use-toast"

export function NaturalLanguageQuery() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;

    if (!query) {
      setLoading(false);
      return;
    }

    try {
      const result = await naturalLanguageQuery({ query });
      if (result.route && result.confidence > 0.5) {
        router.push(result.route);
      } else {
        toast({
          title: "Query Not Understood",
          description: "Could not determine a relevant page for your query. Please try rephrasing.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("NLQ Error:", error);
      toast({
        title: "Error Processing Query",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false);
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
        {loading ? (
          <Loader2 className="size-4 animate-spin text-muted-foreground" />
        ) : (
          <Search className="size-4 text-muted-foreground" />
        )}
      </div>
      <Input
        name="query"
        placeholder="Ask anything or search..."
        className="pl-9 bg-secondary border-0 focus-visible:ring-primary"
        disabled={loading}
      />
    </form>
  );
}
