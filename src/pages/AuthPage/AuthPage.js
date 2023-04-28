import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LogInForm/LogInForm';
import styles from './AuthPage.module.css';
// import LoginForm from '../components/LogInForm';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <h1>SPIRITED - mix it up</h1>
      <h2>Welcome!</h2>

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
