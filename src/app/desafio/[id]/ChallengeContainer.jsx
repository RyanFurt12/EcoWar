'use client'

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import ReturnSvg from '@/components/svg/ReturnSvg';
import PlusSvg from '@/components/svg/PlusSvg';
import ProfileButton from '@/components/general/ProfileButton';

export default function PostsContainer({ id }){
    const [challengeInfo, setChallengeInfo] = useState(null);

    useEffect(() => {
      fetchChallenge(id).then(data => {
        setChallengeInfo(data)
      });
    }, []); 

    return(
      <div className='challenge-container'>
        <div className="header">
          <a href="/"><ReturnSvg/></a>
          <h1>{challengeInfo?.name || 'Carregando'}</h1>
        </div>
        <div className='challenge-header'>
          <ProfileButton/>
          <div className="ranking">
            <div className="podio">2 <img src="https://picsum.photos/80" alt="" /></div>
            <div className="podio primeiro">1 <img src="https://picsum.photos/80" alt="" /></div>
            <div className="podio">3 <img src="https://picsum.photos/80/200" alt="" /></div>
          </div>
        </div>
  
        <div className="posts-container">
          {challengeInfo?.posts ? (
            challengeInfo.posts.map((post, index) => {
              const postDate = new Date(post.createdAt).toLocaleDateString();
              const showDate = index === 0 || postDate !== new Date(challengeInfo.posts[index - 1].createdAt).toLocaleDateString();
              return (
              <>
                { showDate && <h3>2024-12-10</h3> }
                <PostCard key={index} post={post} challengeId={id}/>
              </>
            )})
            ) : (
              <p>Você não tem posts visiveis no momento.</p>
          )}
              
        </div>
  
        <a className='create-post' href="/desafio/[id]/post/criar"> <PlusSvg/> </a>
      </div>
    );
};

async function fetchChallenge(challengeId) {
  try {
    const response = await fetch('/api/challenge/' + challengeId, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    console.log('Desafio:', data);
    return data;

  } catch (error) {
    console.error('Erro ao buscar os desafios:', error);
  }
}