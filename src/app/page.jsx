import './home.css'
import Challenges from '@/components/home/Challenges';

export const metadata = {
  title: "HomePage",
  description: "Página da home, onde mostra os desafios",
};

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1>EcoWar</h1>
        <a href="/perfil">
          <img src="https://picsum.photos/80" alt="" />
        </a>
      </header>

      <div className="challenges">
        <Challenges/>
      </div>
    </div>
  );
}
