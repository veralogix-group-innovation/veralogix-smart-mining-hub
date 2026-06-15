'use server';
/**
 * @fileOverview Generates a personalized Smart Hub "Morning Brief" with the top
 * operational insights a user should be aware of at the start of their shift.
 *
 * - generateSmartHubMorningBrief - Generates the morning brief insights.
 * - SmartHubMorningBriefInput - The input type for the function.
 * - SmartHubMorningBriefOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartHubMorningBriefInputSchema = z.object({
  userRole: z.string().describe('The role of the user (e.g. Mine Operator, Supervisor).'),
  siteName: z.string().describe('The name of the mining site.'),
  shiftType: z.string().describe('The current shift (e.g. Day Shift, Night Shift).'),
});
export type SmartHubMorningBriefInput = z.infer<typeof SmartHubMorningBriefInputSchema>;

const SmartHubMorningBriefOutputSchema = z.object({
  topInsights: z
    .array(z.string())
    .describe('A short, prioritized list of the most important insights for the shift.'),
});
export type SmartHubMorningBriefOutput = z.infer<typeof SmartHubMorningBriefOutputSchema>;

export async function generateSmartHubMorningBrief(
  input: SmartHubMorningBriefInput
): Promise<SmartHubMorningBriefOutput> {
  return smartHubMorningBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartHubMorningBriefPrompt',
  input: {schema: SmartHubMorningBriefInputSchema},
  output: {schema: SmartHubMorningBriefOutputSchema},
  prompt: `You are an AI assistant for a mining operations command platform.

  Generate a concise "Morning Brief" for the user starting their shift. Provide 3-5
  prioritized, actionable insights covering production, equipment health, safety, and
  transport that this user should be aware of right now. Keep each insight to a single
  short sentence.

  User Role: {{{userRole}}}
  Site: {{{siteName}}}
  Shift: {{{shiftType}}}
`,
});

const smartHubMorningBriefFlow = ai.defineFlow(
  {
    name: 'smartHubMorningBriefFlow',
    inputSchema: SmartHubMorningBriefInputSchema,
    outputSchema: SmartHubMorningBriefOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
