import './desafio.css'
import ReturnSvg from '@/components/svg/ReturnSvg';
import PlusSvg from '@/components/svg/PlusSvg';

export const metadata = {
  title: "Desafios - id",
  description: "Página de visualização dos desafios",
};

export default async function DesafioPage({ params }) {
  const { id } = params; 
  const res = await fetch(`http://localhost:3000/api/challenge/${id}`);
  const challengeData = await res.json();

  if (!challengeData) {
    return (<>
      <div className='challenge-container'>
        <div className="header">
          <a href="/"><ReturnSvg/></a>
          <h1>Desafio não encontrado</h1>
        </div>
      </div>
    </>);
  }

  const { name, posts } = challengeData;

  return (
    <div className='challenge-container'>
      <div className="header">
        <a href="/"><ReturnSvg/></a>
        <h1>{name}</h1>
      </div>
      <div className='challenge-header'>
        <a href="/perfil">
          <img src="https://picsum.photos/80" alt="" />``
        </a>
        <div className="ranking">
          <div className="podio">2 <img src="https://picsum.photos/80" alt="" /></div>
          <div className="podio primeiro">1 <img src="https://picsum.photos/80" alt="" /></div>
          <div className="podio">3 <img src="https://picsum.photos/80/200" alt="" /></div>
        </div>
      </div>

      <div className="posts-container">
        <h3>-- 09/12/2024 --</h3>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} challengeId={id} />
          ))
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </div>

      <a className='create-post' href="/desafio/[id]/post/criar"> <PlusSvg/> </a>
    </div>
  );
}

function PostCard({ post, challengeId }){
  return (
    <a href={`/desafio/${challengeId}/post/${post.id}`} className="postCard">
      <img src={post.imageUrl || 'https://picsum.photos/80/400'} alt={post.title} />
      <div className="postInfo">
        <h4>{post.title}</h4>
        <div className="postUser">
          <img src="https://picsum.photos/80/300" alt="User" />
          <p>{post.user?.name || 'Nome do usuário'}</p>
        </div>
      </div>
    </a>
  );
}
