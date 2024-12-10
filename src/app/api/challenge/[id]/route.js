import ChallengeService from "@/services/ChallengeService";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const challenge = await ChallengeService.getChallenge(Number(id));
    const posts = await ChallengeService.getChallengePosts(Number(id));
    challenge.posts = posts;

    const userId = new URL(req.url).searchParams.get('userId');

    if(challenge.participants.findIndex((p)=> p.id == userId) === -1){
      await ChallengeService.joinChallenge(challenge.id, userId)
    }

    return new Response(JSON.stringify(challenge), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}