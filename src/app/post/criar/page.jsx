import PencilSvg from '@/components/svg/PencilSvg';
import './criar.css'
import ReturnSvg from "@/components/svg/ReturnSvg";

export const metadata = {
  title: "Desafios - Criar",
  description: "Página para a visualizar um dos desafios",
};

export default async function PostCriar() {
  
  return (
    <div className='create-challenge-container'>
      <div className="header">
        <a href="/"><ReturnSvg/></a>
        <h1>Criar Postagem</h1>
      </div>
      <div className="creation-container">
        <div className="create-img">
          <img src="https://picsum.photos/500/250" alt="" />
          <div className="edit">
            <PencilSvg/>
          </div>
        </div>

        <label>
          Titulo
          <input
            type='text'
            name='name'
          />        
        </label>

        <label>
          Descrição 
          <input
            type='text'
            name='description'
          />        
        </label>

        <button>Criar Postagem</button>
      </div>
    </div>
  );
}
