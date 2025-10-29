import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Experience from './pages/CV';
import Projects from './pages/Projects';
import Misc from './pages/Misc';
import './App.css';

// Minimal HomeHero component
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HERO_TEXT = "Hi, my name is Halah Mhanni.";

function HomeHero() {
  const navigate = useNavigate();
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= HERO_TEXT.length) {
        setDisplayed(HERO_TEXT.slice(0, i));
        i++;
        setTimeout(type, 60);
      }
    };
    type();
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="page hero-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: 0 }}>
      <section style={{ width: '100%', minHeight: '60vh', position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: 'Fira Mono, monospace', fontSize: '2.8rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '1.5rem', letterSpacing: '-1px', whiteSpace: 'pre', textAlign: 'left' }}>
            {displayed}
            <span style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.2s', color: 'var(--accent-color)' }}>|</span>
          </h1>
          <p style={{ fontFamily: 'Fira Mono, monospace', fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 600, textAlign: 'left' }}>
            I’m a computer science student at the University of Manitoba passionate about building beautiful, scalable, and impactful software. Welcome to my portfolio.
          </p>
          <div style={{ marginBottom: '2.2rem', maxWidth: 600 }}>
            <div style={{
              background: 'rgba(200, 200, 255, 0.13)',
              borderRadius: '10px',
              padding: '1.1rem 1.5rem',
              boxShadow: 'none',
              color: 'var(--text-muted)',
              fontFamily: 'Fira Mono, monospace',
              fontSize: '1.05rem',
              marginBottom: '0.7rem',
              fontWeight: 400,
              letterSpacing: '-0.5px',
              border: '1px solid rgba(180,180,220,0.18)',
              transition: 'background 0.2s',
            }}>
              {/* <b>What I'm up to:</b> This summer, I'm interning as a Software Developer at Agriculture and Agri-Food Canada. I'm also building <button
                onClick={() => { navigate('/projects#signallens'); }}
                style={{
                  background: 'rgba(200, 200, 255, 0.18)',
                  color: 'var(--primary-color)',
                  border: '1px solid rgba(180,180,220,0.22)',
                  borderRadius: '999px',
                  padding: '0.25rem 1rem',
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  margin: '0 0.3rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >Sentivest</button>, an AI-driven platform for real-time stock sentiment analysis. Check it out!
            </div> */}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
            <a href="https://github.com/hal4h" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Github /></a>
            <a href="https://linkedin.com/halah-mhanni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Linkedin /></a>
            <a href="mailto:halahmhanni4@icloud.com" aria-label="Email" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Mail /></a>
          </div>
        </div>
        {/* Absolutely positioned gif at the far right, hidden on small screens */}
        <div style={{ position: 'absolute', top: '2rem', right: '-22rem', height: 'auto', display: 'flex', alignItems: 'flex-start' }}>
          <img src="https://fauux.neocities.org/TranLAIN_WD.gif" alt="whoo gif" style={{ width: 270, maxWidth: '28vw', minWidth: 100, display: 'block' }} className="hero-gif" />
        </div>
      </section>
      <section className="about-details" style={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '1.2rem', marginTop: '0.5rem', textAlign: 'left' }}>
        <h2 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 600, fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>About Me</h2>
        <p style={{ marginBottom: '1.2rem' }}>
          My journey in computer science began in high school, where I took CS every single year. I was lucky to have an amazing teacher who encouraged me, challenged me, and made every class feel like an adventure in problem solving and creativity. Thanks to his support, I realized early on that CS was my life path—and I’ve never looked back.
        </p>
        <p style={{ marginBottom: '1.2rem' }}>
          At university, I’ve loved diving deeper into the field. My favorite classes so far have been <b>Operating Systems</b>—which gave me a true understanding of how computers work under the hood—and <b>Automata Theory and Formal Languages</b>, which shaped the way I break down problems and approach algorithmic thinking. Every new course is a chance to learn something new and push my boundaries further.
        </p>
        <p style={{ marginBottom: '1.2rem' }}>
          I’m passionate about building beautiful, scalable, and impactful software, and I’m always excited to explore the intersection of technology, creativity, and real-world problem solving.
        </p>
    
      </section>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomeHero />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/misc" element={<Misc />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
