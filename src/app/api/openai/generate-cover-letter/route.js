export const runtime = "nodejs";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const formData = await request.json();
    if (
      !formData.jobTitle ||
      !formData.companyName ||
      !formData.jobDescription
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    ///Craft Prompt
    const customPrompt = `
    Job Title: ${formData.jobTitle}
Company: ${formData.companyName}
Work Environment: ${formData.remote ? "Remote" : "In-Person"}
Skills: ${formData.skills.filter(Boolean).join(", ")}
Traits: ${formData.traits.join(", ")}
Years of Experience: ${formData.yearsExperience}
Why this job is right for me: ${formData.rightFit}
How I envision contributing: ${formData.companyContributions}
Tone: ${formData.tone.prompt}
${
  formData.useEducation
    ? `
Education Level: ${formData.education}
School: ${formData.school}
Major: ${formData.major}
College Experience: ${formData.collegeExperience}
`
    : ""
}
Job Description: ${formData.jobDescription}

Please do not mention any geographic location or where I'm based.
You need to understand that job desciption is copy pasted from the job listing.  You need to not conflate the user's information and the job description.
Please do not add or assume any additional details beyond what is provided, years of experience, years using skills.
If a required skill or experience is not explicitly provided in the applicant details, do not include it in the cover letter.
Do not fabricate experience or skills that I do not have.
Do not include a subject line.
    `;

    console.log("Applicant Info Prompt:", customPrompt);

    const temperature = formData.tone.tone === "Oozing Rizz" ? 1.0 : 0.7;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert career advisor that writes personalized cover letters. Write the cover letter under 400 words.  Use a tone that matches ${formData.tone.tone} `,
        },
        {
          role: "user",
          content: `Using the following details, generate a personalized cover letter in a ${formData.tone.tone} tone:${formData.tone.prompt}
  
          ${customPrompt}`,
        },
      ],
      max_tokens: 400,
      temperature: temperature,
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
