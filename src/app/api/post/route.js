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