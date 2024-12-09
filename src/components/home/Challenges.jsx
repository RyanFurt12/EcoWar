'use client'

import ChallengeCard from '../Challenge/ChallengeCard';
import './Challenges.css'

export default function Challenges() {
  return (
    <div className="challenge-container">
      <div className="current-challenges">
        <h2>Seus Desafios</h2>
        <div className="challenges-scroll">
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
        </div>
      </div>

      <div className="old-challenges">
        <h2>Desafios Concluidos</h2>
        <div className="challenges-carroussel">
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
        </div>
      </div>

    </div>
  );
}
