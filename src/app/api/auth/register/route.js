import UserService from "@/services/UserService";

export async function POST(req) {
  try {
    const body = await req.json();
    const user = await UserService.createUser(body);
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
