import './desafio.css'
import ReturnSvg from '@/components/svg/ReturnSvg';
import PlusSvg from '@/components/svg/PlusSvg';

export const metadata = {
  title: "Desafios - id",
  description: "Página de visualização dos desafios",
};

export default async function DesafioPage({ params }) {
  const { id } = await params;

  return (
    <div className='challenge-container'>
      <div className="header">
        <a href="/"><ReturnSvg/></a>
        <h1>Challenge Name</h1>
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

        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}
        {PostCard()}

      </div>

      <a className='create-post' href="/desafio/[id]/post/criar"> <PlusSvg/> </a>
    </div>
  );
}

function PostCard(){
  return(
    <a href='/desafio/[id]/post/[postId]' className="postCard">
      <img src="https://picsum.photos/80/400" alt="" />
      <div className="postInfo">
        <h4>Titulo do card</h4>
        <div className="postUser">
          <img src="https://picsum.photos/80/300" alt="" />
          <p>Nome aaaaa</p>
        </div>
      </div>
    </a>
  )
}