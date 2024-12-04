import ChallengeService from "@/services/ChallengeService";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const ranking = await ChallengeService.getRanking(Number(id));
    return new Response(JSON.stringify(ranking), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}