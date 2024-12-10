'use client'

import PencilSvg from '@/components/svg/PencilSvg';
import './criar.css'
import ReturnSvg from "@/components/svg/ReturnSvg";
import { useEffect, useState } from 'react';
import getUser from '@/services/lib/getUser';

export default function DesafioCriar() {
  const [creationData, setCreationData] = useState({
    name: '', description: '', endDate: '', userId: ''
  });

  useEffect(() => {
    document.title = "Create - Challenge";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute('content', 'Página de criação de desafios');

    getUser().then((res) => setCreationData(prevState => ({
      ...prevState,
      userId: res.id
    })))

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
      const response = await fetch('/api/challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creationData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Desafio criado com sucesso!');
        window.location.href = '/'

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
        <h1>Criar Desafio</h1>
      </div>
      <form onSubmit={handleCreationSubmit} className="creation-container">

        <div className="create-img">
          <img src="https://picsum.photos/500/250" alt="" />
          <div className="edit">
            <PencilSvg/>
          </div>
        </div>

        <label>
          Nome do Desafio 
          <input
            type='text'
            name='name'
            value={creationData.name}
            onChange={handleCreationChange}
          />        
        </label>

        <label>
          Descrição do Desafio 
          <input
            type='text'
            name='description'
            value={creationData.description}
            onChange={handleCreationChange}
          />        
        </label>

        <label>
          Data final
          <input
            type='date'
            name='endDate'
            value={creationData.endDate}
            onChange={handleCreationChange}
          />        
        </label>

        <button type='submit'>Criar Desafio</button>
      </form>
    </div>
  );
}
