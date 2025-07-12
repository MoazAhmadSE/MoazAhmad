'use server';
/**
 * @fileOverview A simple chat flow for the portfolio assistant.
 *
 * - chat - A function that handles the chat interaction.
 */

import { ai } from '@/ai/genkit';
import {
  ChatInput,
  ChatInputSchema,
  ChatOutput,
  ChatOutputSchema,
} from '@/ai/schemas/chat-schema';

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `You are Moaz Ahmad's friendly and helpful portfolio assistant.
  Keep your responses brief and cheerful.
  
  This is the user's message:
  {{{message}}}

  Right now, you are in a test mode. Tell the user that Moaz is still working on connecting you to his brain (a RAG system) and that you'll be much smarter soon.
  `,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
