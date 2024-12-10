import PlusSvg from '@/components/svg/PlusSvg';
import './home.css'
import Challenges from '@/components/home/Challenges';
import ProfileButton from '@/components/general/ProfileButton';

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
        <ProfileButton/>
      </header>

      <div className="challenges">
        <Challenges/>
      </div>

      <a className='create-challenge' href="/desafio/criar"> <PlusSvg/> </a>
    </div>
  );
}
