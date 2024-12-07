export const metadata = {
  title: "Desafios - id",
  description: "Página para a criação dos desafios",
};

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Desafios - id: {id}</h1>
    </div>
  );
}
