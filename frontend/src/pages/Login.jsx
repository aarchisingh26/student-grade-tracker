// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { onLogin } = useAuth();
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       const res = await axios.post('http://localhost:4001/api/auth/login', {
//         username,
//         password,
//       });
//       onLogin(res.data.token); // 👈 Save token and trigger re-render
//       navigate('/');
//     } catch (err) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={login}>Login</button>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent page scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const login = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        username,
        password,
      });
      onLogin(res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        fontFamily: 'system-ui, sans-serif',
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: '#111827',
          }}
        >
          Log In
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
            onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
            onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
          />
          <button
            onClick={login}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
