import UserService from "@/services/UserService";

export async function PUT(req) {
  try {
    const body = await req.json();
    const user = await UserService.updateUser(body);
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
};

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await UserService.deleteUser(id);
    return new Response(JSON.stringify({ message: "Usuário deletado com sucesso", data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
};