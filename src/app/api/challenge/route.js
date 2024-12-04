import ChallengeService from "@/services/ChallengeService";

export async function POST(req) {
  try {
    const body = await req.json();
    const challenge = await ChallengeService.createChallenge(body);
    return new Response(JSON.stringify(challenge), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}