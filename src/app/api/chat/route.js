import { openai } from "@ai-sdk/openai";
import {
  streamText,
  convertToCoreMessages,
} from "ai";
import { google } from "@ai-sdk/google";
import { systemDescription } from "@/app/utils/constants";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: systemDescription,
    // model: google("gemini-1.5-pro-002"),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
