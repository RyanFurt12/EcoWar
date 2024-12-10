import './ChallengeCard.css'

export default function ChallengeCard({ challenge }) {
  return (
    <>
        <a href={`/desafio/${challenge.id}`} className="card-container">
            <h3>{challenge.name}</h3>
            <p>até {new Date(challenge.endDate).toDateString()}</p>
        </a>
    </>
  );
}
