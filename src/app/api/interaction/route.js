import InteractionService from "@/services/InteractionService";

export async function POST(req) {
  try {
    const {postId, userId, content, isReaction } = await req.json();

    const interaction = await InteractionService.createInteraction(Number(postId), userId, content, isReaction);
    return new Response(JSON.stringify(interaction), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await InteractionService.deleteInteraction(id);
    return new Response(JSON.stringify({ message: "Interação deletada com sucesso", data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
};