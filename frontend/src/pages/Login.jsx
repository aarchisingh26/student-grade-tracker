import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4001/api/auth/login', {
        username,
        password,
      });
      onLogin(res.data.token); // 👈 Save token and trigger re-render
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={login}>Login</button>
    </div>
  );
}
