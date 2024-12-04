import UserService from "@/services/UserService";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const data = await UserService.loginUser(email, password);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}