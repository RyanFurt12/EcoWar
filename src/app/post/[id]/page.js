export const metadata = {
  title: "Post - id",
  description: "Página para a visualizar um Post",
};

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Post - id: {id}</h1>
    </div>
  );
}
