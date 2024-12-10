import './desafio.css'
import PostsContainer from './ChallengeContainer';

export const metadata = {
  title: "Desafios - id",
  description: "Página de visualização dos desafios",
};

export default async function DesafioPage({ params }) {
  const { id } = await params

  return (
    <PostsContainer id={ id }/>
  );
}

