"use server";

import { generateOpenAIPrompt } from "@/lib/openai";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateRoadmap(userQuery: string) {
  const prompt = generateOpenAIPrompt(userQuery);

  const completion = await client.responses.create({
    model: "gpt-4.1",
    input: prompt,
  });

  // Extract model output safely
  const output = completion.output_text;

  try {
    return JSON.parse(output);
  } catch (err) {
    console.error("JSON parsing failed:", output, err);
    throw new Error("Model returned invalid JSON");
  }
}
