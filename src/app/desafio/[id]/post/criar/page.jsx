'use client'

import PencilSvg from '@/components/svg/PencilSvg';
import './criar.css'
import ReturnSvg from "@/components/svg/ReturnSvg";
import { useEffect, useState } from 'react';
import getUser from '@/services/lib/getUser';
import { useRouter } from 'next/navigation';


export default function PostCriar({params}) {
  const [creationData, setCreationData] = useState({
    title: '', description: '', challengeId: '', userId: ''
  });

  useEffect(() => {
    document.title = "Create - Post";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute('content', 'Página de criação de Postagem');
    
    getUser().then((res) => setCreationData(prevState => ({
      ...prevState,
      userId: res.id,
    })))

    const getChallengeId = async () => {
      const { id } = await params; 
      setCreationData(prevState => ({
        ...prevState,
        challengeId: id
      }))
    };
    getChallengeId();

  }, []);

  const handleCreationChange = (e) => {
    const { name, value } = e.target;
    setCreationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreationSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creationData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Post criado com sucesso!');
        window.location.href = '/desafio/'+ creationData.challengeId;
        
      } else {
        const error = await response.json();
        alert(`Erro ao criar Desafio: ${error.error}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <div className='create-challenge-container'>
      <div className="header">
        <a href="/"><ReturnSvg/></a>
        <h1>Criar Postagem</h1>
      </div>
      <form onSubmit={handleCreationSubmit} className="creation-container">
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
            name='title'
            value={creationData.title}
            onChange={handleCreationChange}
          />        
        </label>

        <label>
          Descrição 
          <input
            type='text'
            name='description'
            value={creationData.description}
            onChange={handleCreationChange}
          />        
        </label>

        <button type='submit'>Criar Postagem</button>
      </form>
    </div>
  );
}
