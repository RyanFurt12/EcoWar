'use client'

import './Challenges.css'

export default function Challenges() {
  return (
    <div className="challenge-container">
      <div className="current-challenges">
        <h2>Seus Desafios</h2>
        <div className="challenges-scroll">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>

      <div className="old-challenges">
        <h2>Desafios Concluidos</h2>
        <div className="challenges-carroussel">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>

    </div>
  );
}
