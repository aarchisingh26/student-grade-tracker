// // // import { useState } from 'react';
// // // import axios from '../api';

// // // export default function Register() {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const register = async () => {
// // //     await axios.post('/auth/register', { username, password });
// // //     alert('Registered! Now login.');
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Register</h2>
// // //       <input placeholder="username" onChange={e => setUsername(e.target.value)} />
// // //       <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
// // //       <button onClick={register}>Register</button>
// // //     </div>
// // //   );
// // // }

// // import { useState } from 'react';
// // import axios from '../api';

// // export default function Register() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const register = async () => {
// //     setError('');
// //     setSuccess('');

// //     try {
// //       await axios.post('/auth/register', { username, password });
// //       setSuccess('Registered successfully! Now login.');
// //       setUsername('');
// //       setPassword('');
// //     } catch (err) {
// //       if (err.response && err.response.data?.message) {
// //         setError(err.response.data.message);
// //       } else {
// //         setError('Registration failed. Please try again.');
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>

// //       <input
// //         placeholder="username"
// //         value={username}
// //         onChange={e => setUsername(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="password"
// //         value={password}
// //         onChange={e => setPassword(e.target.value)}
// //       />
// //       <button onClick={register}>Register</button>

// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       {success && <p style={{ color: 'green' }}>{success}</p>}
// //     </div>
// //   );
// // }



// import { useState, useEffect } from 'react';
// import axios from '../api';

// export default function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   useEffect(() => {
//     // Disable scroll while on register page
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   const register = async () => {
//     setError('');
//     setSuccess('');

//     try {
//       await axios.post('/auth/register', { username, password });
//       setSuccess('Registered successfully! Now log in.');
//       setUsername('');
//       setPassword('');
//     } catch (err) {
//       if (err.response && err.response.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('Registration failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         width: '100vw',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f9fafb',
//         fontFamily: 'system-ui, sans-serif',
//         padding: '1rem',
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           padding: '2.5rem',
//           borderRadius: '1rem',
//           boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
//           width: '100%',
//           maxWidth: '400px',
//         }}
//       >
//         <h2
//           style={{
//             fontSize: '1.75rem',
//             fontWeight: '600',
//             marginBottom: '1.5rem',
//             textAlign: 'center',
//             color: '#111827',
//           }}
//         >
//           Register
//         </h2>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           <input
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{
//               padding: '0.75rem 1rem',
//               borderRadius: '0.5rem',
//               border: '1px solid #d1d5db',
//               fontSize: '1rem',
//               outline: 'none',
//             }}
//             onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
//             onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{
//               padding: '0.75rem 1rem',
//               borderRadius: '0.5rem',
//               border: '1px solid #d1d5db',
//               fontSize: '1rem',
//               outline: 'none',
//             }}
//             onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
//             onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
//           />

//           <button
//             onClick={register}
//             style={{
//               padding: '0.75rem',
//               borderRadius: '0.5rem',
//               fontSize: '1rem',
//               fontWeight: '500',
//               backgroundColor: '#10b981', // teal/green
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#10b981')}
//           >
//             Register
//           </button>

//           {error && (
//             <p
//               style={{
//                 color: '#ef4444',
//                 backgroundColor: '#fee2e2',
//                 padding: '0.5rem',
//                 borderRadius: '0.5rem',
//                 textAlign: 'center',
//                 marginTop: '0.5rem',
//               }}
//             >
//               {error}
//             </p>
//           )}

//           {success && (
//             <p
//               style={{
//                 color: '#059669',
//                 backgroundColor: '#d1fae5',
//                 padding: '0.5rem',
//                 borderRadius: '0.5rem',
//                 textAlign: 'center',
//                 marginTop: '0.5rem',
//               }}
//             >
//               {success}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const register = async () => {
    setError('');

    try {
      await axios.post('/auth/register', { username, password });
      // ✅ Redirect to dashboard after successful registration
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
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
          Register
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={register}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#10b981')}
          >
            Register
          </button>

          {error && (
            <p
              style={{
                color: '#ef4444',
                backgroundColor: '#fee2e2',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                marginTop: '0.5rem',
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
