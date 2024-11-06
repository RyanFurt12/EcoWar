import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const result = await sql`SELECT * FROM clientes`;
    return new Response(JSON.stringify(result.rows), 
        { status: 200, headers: { 'Content-Type': 'application/json' },}
    );
  } 
  catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao buscar clientes' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' },}
    );
  }
}

export async function POST(req) {
  const { nome, email, idade } = await req.json();

  if (!nome || !email || !idade) {
    return new Response(
      JSON.stringify({ error: 'Nome, email e idade são obrigatórios' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const result = await sql`
      INSERT INTO clientes (nome, email, idade)
      VALUES (${nome}, ${email}, ${idade})
      RETURNING *`;

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erro ao adicionar cliente:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao adicionar cliente' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
