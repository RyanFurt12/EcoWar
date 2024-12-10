import UserService from "@/services/UserService";
import jwt from "jsonwebtoken";

export async function POST(req) {
  
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token não fornecido", req }), { status: 401 });
    }
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserService.findUser({id:decoded.id})
    user.password = undefined;
    return new Response(JSON.stringify({ message: "Usuário autenticado", user: user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Token inválido ou expirado", token }), { status: 401 });
  }
}
