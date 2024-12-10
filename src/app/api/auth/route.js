import UserService from "@/services/UserService";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = UserService.findUser({id:decoded.id})
    res.status(200).json({ message: "Usuário autenticado", user: user });
  } catch (error) {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
}
