import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LogInForm/LogInForm';
import Logo from '../../assets/spirited-logo.png';
import styles from './AuthPage.module.css';
// import LoginForm from '../components/LogInForm';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      {/* <h1>SPIRITED - Thirsty?</h1> */}
      <h2>Welcome to Spirited!</h2>
      <img
        className={styles.navBarLogo}
        src={Logo}
        alt="Spirited logo, white bottle silhouette on red background"
      />

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign up' : 'Sign in'}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
