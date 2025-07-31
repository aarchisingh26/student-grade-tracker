// import { useState } from 'react';
// import axios from '../api';

// export default function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const register = async () => {
//     await axios.post('/auth/register', { username, password });
//     alert('Registered! Now login.');
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input placeholder="username" onChange={e => setUsername(e.target.value)} />
//       <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
//       <button onClick={register}>Register</button>
//     </div>
//   );
// }

import { useState } from 'react';
import axios from '../api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const register = async () => {
    setError('');
    setSuccess('');

    try {
      await axios.post('/auth/register', { username, password });
      setSuccess('Registered successfully! Now login.');
      setUsername('');
      setPassword('');
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}
