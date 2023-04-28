import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// import styles from './App.module.css';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const doesUserExist = user && user.name;
  return (
    <main className={App}>
      {' '}
      {doesUserExist ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            <Route path="*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
