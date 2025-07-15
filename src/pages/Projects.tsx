import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Cpu, Smartphone, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    // In Progress Project
    {
      title: "Sentivest- NewsTrader AI engine",
      description: "AI-driven platform analyzing real-time stock sentiment using FinBERT, GPT-4, and social/news data. Provides correlation to price movements and behavioral trend alerts.",
      technologies: ["Python", "AI/ML", "FinBERT", "GPT-4", "Financial Analysis", "Real-time Data"],
      github: "https://github.com/hal4h/Sentivest",
      live: null,
      category: "In Progress",
      icon: <Brain size={24} />
    },
    // Full Stack Projects
    {
      title: "Pomoverse: Your Study Companion",
      description: "Developed a full-stack productivity app with real-time database sync, task management, dynamic theming, and Spotify integration, reaching over 650+ unique users. Won DevHacks Fan's Choice Award and Best UI Award among 100+ projects for innovative UX, responsive design, and user engagement features.",
      technologies: ["React", "Supabase", "PostgreSQL", "Vite", "Real-time Sync", "Spotify API"],
      github: "https://github.com/hal4h/pomodoro-site",
      live: "https://pomoverse.com",
      category: "Full Stack",
      icon: <Globe size={24} />
    },
    {
      title: "Week at A Glance",
      description: "Android application developed with Java and Android Studio. Collaborated with a team using Agile methodologies, implementing 12 features with CI/CD pipelines, feature branches, and peer reviews.",
      technologies: ["Java", "Android Studio", "Zoom API", "GitLab", "Agile", "CI/CD"],

      category: "Full Stack",
      icon: <Smartphone size={24} />
    },
    {
      title: "Discord'nt",
      description: "Real-time chat application with REST API for seamless client-server communication and distributed system simulation. Implemented efficient HTTP requests and robust backend architecture.",
      technologies: ["JavaScript", "HTML", "REST API", "JSON", "XMLHttpRequest"],

      category: "Full Stack",
      icon: <Globe size={24} />
    },

    // Low Level Projects
    {
      title: "5-Stage Pipeline Simulator",
      description: "LC3 assembly language pipeline simulator in C. Implements a 5-stage pipeline (Fetch, Decode, Execute, Memory, Writeback) for educational purposes.",
      technologies: ["C", "Assembly", "LC3", "Computer Architecture"],

      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "L2, L1 Cache Simulator & Analyzer",
      description: "Comprehensive cache simulator in C that analyzes L1 and L2 cache performance. Implements different cache policies and provides detailed performance metrics.",
      technologies: ["C", "Cache Architecture", "Performance Analysis", "Memory Management"],
  
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "DMA Device Driver",
      description: "Direct Memory Access device driver in C for hard drive read/write operations. Implements efficient data transfer mechanisms and interrupt handling.",
      technologies: ["C", "Device Drivers", "DMA", "Hardware Interface", "Interrupts"],
   
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "Round Robin Scheduler",
      description: "CPU scheduler implementation in C with configurable time quantum. Analyzes performance metrics and optimal time slice determination.",
      technologies: ["C", "Operating Systems", "Scheduling Algorithms", "Performance Analysis"],

      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "5-Level File Management System (ATFS)",
      description: "Advanced file system implementation in C with 5-level directory structure. Implements file operations, directory management, and data persistence.",
      technologies: ["C", "File Systems", "Data Structures", "Storage Management"],

      category: "Low Level",
      icon: <Database size={24} />
    },
    {
      title: "Multi-threaded Prime Factorization",
      description: "Performance analysis of multi-threaded prime factorization in C. Evaluates optimal thread count, ordering effects, and locking mechanisms.",
      technologies: ["C", "Multi-threading", "Performance Analysis", "Algorithms"],

      category: "Low Level",
      icon: <Cpu size={24} />
    },

    // Backend Projects
    {
      title: "Blockchain Peer and Miner",
      description: "Multi-threaded blockchain miner implementing Proof of Work algorithm. Optimized hashing operations using SHA-256 with high-throughput performance across CPU cores.",
      technologies: ["Python", "Blockchain", "SHA-256", "Multi-threading", "Cryptography"],

      category: "Backend",
      icon: <Code size={24} />
    },

    // Database Projects
    {
      title: "NBA Data CLI Application",
      description: "Command-line interface application for NBA data analysis with 30+ complex SQL queries. Provides comprehensive basketball statistics and analytics.",
      technologies: ["Java", "SQL", "CLI", "Data Analysis", "Database Design"],
      github: "https://github.com/hal4h/3380-project",
      live: null,
      category: "Database",
      icon: <Database size={24} />
    },

    // Research Projects
    {
      title: "Arctic Climate Analysis",
      description: "Analysis of minimum temperatures (1950–2020) at 34 Arctic weather stations using Python. Applied Kendall-Theil trend analysis and published findings in Atmosphere-Ocean Journal.",
      technologies: ["Python", "Data Analysis", "Climate Science", "Statistical Analysis"],
      live: "https://www.tandfonline.com/doi/full/10.1080/07055900.2021.1915238#references-Section",
      category: "Research",
      icon: <Brain size={24} />
    },

    // Game Development Projects
    {
      title: "Ocean Odyssey (Ubisoft)",
      description: "Developed a 3D infinite scroller game in C++ as part of Ubisoft's Game Lab program. Leveraged the Ubisoft API to implement custom pathfinding AI, advanced collision detection, and physics-based interactions. Designed and optimized the game loop to maintain a consistent 60 FPS across multiple platforms. The project features dynamic level generation, visually engaging environments, and a robust architecture for scalable gameplay mechanics. Demonstrated strong C++ skills, game engine architecture, and a passion for creative problem-solving in game development.",
      technologies: ["C++", "C", "Ubisoft API", "Game Physics", "AI", "Game Design"],
      github: "https://github.com/hal4h/Ocean-Odessy--Ubisoft",
      live: null,
      category: "Game Development",
      icon: <Cpu size={24} />
    },
  ];

  const categories = ["All", "Full Stack", "Low Level", "Backend", "Database", "Game Development", "Research", "In Progress"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="page" style={{ minHeight: '100vh', padding: 0, background: 'var(--bg-color)' }}>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem 2rem 2rem' }}>
        <h1 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 700, fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '2.5rem', letterSpacing: '-1px' }}>
          Projects
        </h1>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: selectedCategory === category ? 'var(--primary-color)' : 'transparent',
                  color: selectedCategory === category ? 'var(--bg-color)' : 'var(--primary-color)',
                  border: `1.5px solid var(--primary-color)`,
                  padding: '0.5rem 1.2rem',
                  borderRadius: '999px',
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxShadow: selectedCategory === category ? '0 2px 12px 0 var(--primary-color)' : 'none',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}>
          {filteredProjects.map((project) => (
            <div key={project.title} style={{
              background: 'none',
              border: 'none',
              borderRadius: 0,
              boxShadow: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--primary-color)', marginRight: '0.75rem', fontSize: 24 }}>
                  {project.icon}
                </span>
                <h2 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 600, fontSize: '1.3rem', color: 'var(--text-color)', margin: 0 }}>{project.title}</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'Fira Mono, monospace', fontSize: '1rem', marginBottom: '1rem', marginTop: 0 }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: 'var(--secondary-color)',
                      color: 'var(--bg-color)',
                      padding: '0.2rem 0.7rem',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontFamily: 'Fira Mono, monospace',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: '0.5rem' }}>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--primary-color)', fontSize: 22 }}>
                    <Github />
                  </a>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" style={{ color: 'var(--primary-color)', fontSize: 22 }}>
                    <ExternalLink />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects; 