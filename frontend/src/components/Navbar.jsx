import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Navbar() {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#222',
      color: 'white',
    }}>
      <div>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
          CourseTracker
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          Dashboard
        </Link>
        {/* Add other nav links here if needed */}
        <button onClick={handleLogout} style={{
          backgroundColor: 'transparent',
          border: '1px solid white',
          borderRadius: '4px',
          padding: '0.3rem 0.8rem',
          color: 'white',
          cursor: 'pointer',
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
}
