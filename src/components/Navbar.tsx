import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/misc', label: 'Misc' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(35,35,54,0.7)',
      backdropFilter: 'blur(6px)',
      borderBottom: 'none',
      zIndex: 1000,
      padding: '1.1rem 0',
      transition: 'background 0.3s',
      boxShadow: 'none',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'flex-end', // align links to the right
        alignItems: 'center',
        padding: '0 2rem',
      }}>
        <ul style={{
          display: 'flex',
          gap: '1.5rem',
          listStyle: 'none',
          alignItems: 'center',
          margin: 0,
          padding: 0,
        }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  color: location.pathname === item.path ? 'var(--primary-color)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  fontFamily: 'Fira Mono, monospace',
                  letterSpacing: '-0.5px',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  background: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 