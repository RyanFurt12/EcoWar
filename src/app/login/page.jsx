'use client'

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
    email: '',
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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginData.email, password: loginData.password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      localStorage.setItem("token", JSON.stringify(data.token));
      sessionStorage.setItem("user", JSON.stringify(data.user))

      alert("Login bem-sucedido!");
      window.location.href = '/';
    } catch (error) {
      alert(error.message || "Erro ao fazer login");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault(); 
    
    if (signupData.password !== signupData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        })
      });

      if (response.ok) {
        const result = await response.json();
        alert('Usuário criado com sucesso!');
        setVisibleSection(null);
        setSignupData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
      } else {
        const error = await response.json();
        alert(`Erro ao criar usuário: ${error.error}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar os dados.");
    }
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

        {/* Tela de login */}
        <form onSubmit={handleLoginSubmit} className={`front-container ${visibleSection === 'login'? 'animate-in': ''}`}>
          <a className='return' onClick={() => setVisibleSection(null)}><ReturnSvg/></a>
          <h2>Login</h2>
          <label>
            Usuário
            <input
              type='email'
              name='email'
              value={loginData.email}
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
          <button className='submit-button' type='submit'>Continue</button>
        </form>

        {/* Tela de cadastro */}
        <form onSubmit={handleSignupSubmit} className={`front-container ${visibleSection === 'signup'? 'animate-in':''}`}>
          <a className='return' onClick={() => setVisibleSection(null)}><ReturnSvg/></a>
          <h2>Criar Conta</h2>
          <label>
            Nome
            <input
              type='text'
              name='name'
              value={signupData.name}
              onChange={handleSignupChange}
              required
            />
          </label>
          <label>
            E-mail
            <input
              type='email'
              name='email'
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
          </label>
          <label>
            Senha
            <input
              type='password'
              name='password'
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
          </label>
          <label>
            Confirmar Senha
            <input
              type='password'
              name='confirmPassword'
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
            />
          </label>
          <button className='submit-button' type='submit'>Criar Conta</button>
        </form>
      </div>      
    </>
  );
}
