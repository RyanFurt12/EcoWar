'use client'

import { useEffect, useState } from 'react';
import ChallengeCard from '../Challenge/ChallengeCard';
import './Challenges.css'



export default function Challenges() {
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const userId = '1'; 

  useEffect(() => {
    fetchChallenges(userId).then(data => {
      const currentDate = new Date(), current = [], completed = [];

      data.challenges.forEach(challenge => {
        const endDate = new Date(challenge.endDate);

        if (endDate > currentDate) {
          current.push(challenge);
        } else {
          completed.push(challenge);
        }
      });

      setCurrentChallenges(current);
      setCompletedChallenges(completed);
    });
  }, [userId]); 


  return (
    <div className="challenge-container">
      <div className="current-challenges">
        <h2>Seus Desafios</h2>
        <div className="challenges-scroll">
          {currentChallenges.length > 0 ? (
            currentChallenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))
            ) : (
              <p>Você não tem desafios ativos no momento.</p>
          )}
        </div>
      </div>

      <div className="old-challenges">
        <h2>Desafios Concluidos</h2>
        <div className="challenges-carroussel">
          {completedChallenges.length > 0 ? (
            completedChallenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))
            ) : (
              <p>Você não tem desafios ativos no momento.</p>
          )}
        </div>
      </div>

    </div>
  );
}



async function fetchChallenges(userId) {
  try {
    const response = await fetch('/api/challenge?userId=' + userId, {
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

    console.log('Desafios do usuário:', JSON.stringify(data));
    return data;

  } catch (error) {
    console.error('Erro ao buscar os desafios:', error);
  }
}