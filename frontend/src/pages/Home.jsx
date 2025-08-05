// // import { Link } from 'react-router-dom';

// // export default function Home() {
// //   return (
// //     <div style={{ padding: '2rem' }}>
// //       <h1>Welcome to My To-Do App</h1>
// //       <p>Please sign up or log in to continue.</p>
// //       <Link to="/register"><button style={{ marginRight: '1rem' }}>Sign Up</button></Link>
// //       <Link to="/login"><button>Log In</button></Link>
// //     </div>
// //   );
// // }

// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f9fafb',
//         padding: '2rem',
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           padding: '3rem',
//           borderRadius: '1rem',
//           boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//           maxWidth: '400px',
//           width: '100%',
//         }}
//       >
//         <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
//           Welcome to My To-Do App
//         </h1>
//         <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
//           Please sign up or log in to continue.
//         </p>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
//           <Link to="/register">
//             <button>Sign Up</button>
//           </Link>
//           <Link to="/login">
//             <button>Log In</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    // Prevent scrolling on the body when this component is mounted
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  const signUpStyle = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
    color: 'white',
  };

  const loginStyle = {
    ...buttonStyle,
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    border: '1px solid #d1d5db',
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        fontFamily: 'system-ui, sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem',
          }}
        >
          Welcome to My Course Tracker
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '2rem',
          }}
        >
          Please sign up or log in to continue.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Link to="/register">
            <button
              style={signUpStyle}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#3b82f6')}
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              style={loginStyle}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

