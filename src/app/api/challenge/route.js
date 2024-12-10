import ChallengeService from "@/services/ChallengeService";
import UserService from "@/services/UserService";

export async function POST(req) {
  try {
    const body = await req.json();
    const challenge = await ChallengeService.createChallenge(body);
    return new Response(JSON.stringify(challenge), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function GET(req) {
  try {
    const userId = new URL(req.url).searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({ error: 'userId é obrigatório' }), { status: 400 });
    }

    const challenges = await UserService.getChallenges(userId*1);
    return new Response(JSON.stringify(challenges), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}