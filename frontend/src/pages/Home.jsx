import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My To-Do App</h1>
      <p>Please sign up or log in to continue.</p>
      <Link to="/register"><button style={{ marginRight: '1rem' }}>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>
  );
}
