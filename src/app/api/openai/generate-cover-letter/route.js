export const runtime = "nodejs";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { jobDescription, applicantInfo } = await request.json();
    if (!jobDescription || !applicantInfo) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an expert career advisor that writes personalized cover letters.",
        },
        {
          role: "user",
          content: `Job Description: ${jobDescription}\nApplicant Info: ${applicantInfo}\nPlease generate a professional cover letter.`,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    // Adjust based on the response structure from your openai call
    const coverLetter = response.choices[0].message.content;

    return new Response(JSON.stringify({ coverLetter }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to generate cover letter" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
