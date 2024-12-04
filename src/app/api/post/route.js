import PostService from "@/services/PostService";

export async function POST(req) {
  try {
    const body = await req.json();
    const post = await PostService.createPost(body);
    return new Response(JSON.stringify(post), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await PostService.deletePost(id);
    return new Response(JSON.stringify({ message: "Post deletado com sucesso", data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
};