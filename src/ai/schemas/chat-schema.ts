/**
 * @fileOverview Zod schemas and TypeScript types for the chatbot functionality.
 *
 * - ChatInputSchema - The Zod schema for the chat input.
 * - ChatInput - The TypeScript type for the chat input.
 * - ChatOutputSchema - The Zod schema for the chat output.
 * - ChatOutput - The TypeScript type for the chat output.
 */

import { z } from 'zod';

export const ChatInputSchema = z.object({
  message: z.string().describe('The user message to the assistant.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  message: z.string().describe("The assistant's response."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;
