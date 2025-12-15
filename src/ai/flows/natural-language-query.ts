'use server';

/**
 * @fileOverview This file defines a Genkit flow for handling natural language queries and returning the relevant data or navigation path.
 *
 * - naturalLanguageQuery - A function that processes the natural language query and returns the relevant data or navigation path.
 * - NaturalLanguageQueryInput - The input type for the naturalLanguageQuery function.
 * - NaturalLanguageQueryOutput - The return type for the naturalLanguageQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NaturalLanguageQueryInputSchema = z.object({
  query: z.string().describe('The natural language query from the user.'),
});
export type NaturalLanguageQueryInput = z.infer<typeof NaturalLanguageQueryInputSchema>;

const NaturalLanguageQueryOutputSchema = z.object({
  route: z.string().describe('The route to navigate to based on the query.'),
  confidence: z.number().describe('The confidence level of the route suggestion (0-1).'),
});
export type NaturalLanguageQueryOutput = z.infer<typeof NaturalLanguageQueryOutputSchema>;

export async function naturalLanguageQuery(input: NaturalLanguageQueryInput): Promise<NaturalLanguageQueryOutput> {
  return naturalLanguageQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'naturalLanguageQueryPrompt',
  input: {schema: NaturalLanguageQueryInputSchema},
  output: {schema: NaturalLanguageQueryOutputSchema},
  prompt: `You are an AI assistant that helps users navigate a mine operations dashboard.
  Given a user's natural language query, determine the most relevant route in the dashboard to navigate to.
  Also provide a confidence level (0-1) for the suggested route.

  Available routes:
  - /smart-hub
  - /asset-health
  - /dynamic-route-optimization
  - /geofence-breach-prediction
  - /heatmaps
  - /shift-handover
  - /fatigue-management

  User Query: {{{query}}}

  Output the route and confidence level in JSON format.`,
});

const naturalLanguageQueryFlow = ai.defineFlow(
  {
    name: 'naturalLanguageQueryFlow',
    inputSchema: NaturalLanguageQueryInputSchema,
    outputSchema: NaturalLanguageQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
