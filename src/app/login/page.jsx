'use client';

import ReturnSvg from '@/components/svg/ReturnSvg';
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

        <div className={`front-container ${visibleSection === 'login'? 'animate-in': ''}`}>
          <a className='return' onClick={() => setVisibleSection(null)}><ReturnSvg/></a>
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
          <a className='return' onClick={() => setVisibleSection(null)}><ReturnSvg/></a>
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

      </div>      
    </>
  );
}