'use client';

import './loginPage.css';
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [visibleSection, setVisibleSection] = useState(null); 

  useEffect(() => {
    document.title = "LoginPage";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute('content', 'Página de login');
  }, []);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div className='initial-container'>
        <h1>Bem vindo ao EcoWar</h1>
        <button className='login-button' onClick={() => setVisibleSection('login')}>
          Login
        </button>
        <button className='signup-button' onClick={() => setVisibleSection('signup')}>
          Criar login
        </button>
      </div>

      <div className={`front-container ${visibleSection === 'login'? 'animate-in': ''}`}>
        <a className='return' onClick={() => setVisibleSection(null)}>{ReturnSvg()}</a>
        <h2>Login</h2>
        <label>
          Usuário
          <input
            type='text'
            name='username'
            value={loginData.username}
            onChange={handleLoginChange}
          />        
        </label>
        <label>
          Senha
          <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </label>
        <button className='submit-button'>Continue</button>
      </div>


      <div className={`front-container ${visibleSection === 'signup'? 'animate-in':''}`}>
        <a className='return' onClick={() => setVisibleSection(null)}>{ReturnSvg()}</a>
        <h2>Criar Conta</h2>
        <label>
          Nome
          <input
            type='text'
            name='name'
            value={signupData.name}
            onChange={handleSignupChange}
          />
        </label>
        <label>
          E-mail
          <input
            type='email'
            name='email'
            value={signupData.email}
            onChange={handleSignupChange}
          />
        </label>
        <label>
          Senha
          <input
            type='password'
            name='password'
            value={signupData.password}
            onChange={handleSignupChange}
          />
        </label>
        <label>
          Confirmar Senha
          <input
            type='password'
            name='confirmPassword'
            value={signupData.confirmPassword}
            onChange={handleSignupChange}
          />
        </label>
        <button className='submit-button'>Continue</button>
      </div>
      
    </>
  );
}

function ReturnSvg(){
  return (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M 19.2811 49.5156 C 20.5233 49.5156 21.3436 48.6719 21.3436 47.4531 C 21.3436 46.8438 21.1561 46.3984 20.7811 46.0234 L 14.0311 39.4375 L 9.5780 35.6406 L 15.0858 35.8750 L 44.9920 35.8750 C 50.4529 35.8750 52.7267 33.3672 52.7267 28.0703 L 52.7267 14.2188 C 52.7267 8.7578 50.4529 6.4844 44.9920 6.4844 L 31.8671 6.4844 C 30.5780 6.4844 29.7342 7.4219 29.7342 8.5703 C 29.7342 9.7188 30.5780 10.6562 31.8671 10.6562 L 44.9920 10.6562 C 47.4764 10.6562 48.5545 11.7344 48.5545 14.2188 L 48.5545 28.0703 C 48.5545 30.6250 47.4764 31.7031 44.9920 31.7031 L 15.0858 31.7031 L 9.5780 31.9375 L 14.0311 28.1406 L 20.7811 21.5547 C 21.1561 21.1797 21.3436 20.7109 21.3436 20.1016 C 21.3436 18.9062 20.5233 18.0391 19.2811 18.0391 C 18.7655 18.0391 18.1561 18.2969 17.7577 18.6953 L 3.9764 32.2188 C 3.5077 32.6640 3.2733 33.2031 3.2733 33.7891 C 3.2733 34.3516 3.5077 34.9140 3.9764 35.3594 L 17.7577 48.8828 C 18.1561 49.2813 18.7655 49.5156 19.2811 49.5156 Z"/></svg>
  </>
  )
}