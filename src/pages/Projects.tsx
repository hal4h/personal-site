import { ExternalLink, Github, Code, Database, Cpu, Smartphone, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    // Full Stack Projects
    {
      title: "Week at A Glance",
      description: "Android application developed with Java and Android Studio. Collaborated with a team using Agile methodologies, implementing 12 features with CI/CD pipelines, feature branches, and peer reviews.",
      technologies: ["Java", "Android Studio", "Zoom API", "GitLab", "Agile", "CI/CD"],
      github: "https://github.com/yourusername/week-at-a-glance",
      live: null,
      category: "Full Stack",
      icon: <Smartphone size={24} />
    },
    {
      title: "Discord'nt",
      description: "Real-time chat application with REST API for seamless client-server communication and distributed system simulation. Implemented efficient HTTP requests and robust backend architecture.",
      technologies: ["JavaScript", "HTML", "REST API", "JSON", "XMLHttpRequest"],
      github: "https://github.com/yourusername/discord-nt",
      live: "https://discord-nt-demo.com",
      category: "Full Stack",
      icon: <Globe size={24} />
    },

    // Low Level Projects
    {
      title: "5-Stage Pipeline Simulator",
      description: "LC3 assembly language pipeline simulator in C. Implements a 5-stage pipeline (Fetch, Decode, Execute, Memory, Writeback) for educational purposes.",
      technologies: ["C", "Assembly", "LC3", "Computer Architecture"],
      github: "https://github.com/yourusername/pipeline-simulator",
      live: null,
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "L2, L1 Cache Simulator & Analyzer",
      description: "Comprehensive cache simulator in C that analyzes L1 and L2 cache performance. Implements different cache policies and provides detailed performance metrics.",
      technologies: ["C", "Cache Architecture", "Performance Analysis", "Memory Management"],
      github: "https://github.com/yourusername/cache-simulator",
      live: null,
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "DMA Device Driver",
      description: "Direct Memory Access device driver in C for hard drive read/write operations. Implements efficient data transfer mechanisms and interrupt handling.",
      technologies: ["C", "Device Drivers", "DMA", "Hardware Interface", "Interrupts"],
      github: "https://github.com/yourusername/dma-driver",
      live: null,
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "Round Robin Scheduler",
      description: "CPU scheduler implementation in C with configurable time quantum. Analyzes performance metrics and optimal time slice determination.",
      technologies: ["C", "Operating Systems", "Scheduling Algorithms", "Performance Analysis"],
      github: "https://github.com/yourusername/round-robin-scheduler",
      live: null,
      category: "Low Level",
      icon: <Cpu size={24} />
    },
    {
      title: "5-Level File Management System (ATFS)",
      description: "Advanced file system implementation in C with 5-level directory structure. Implements file operations, directory management, and data persistence.",
      technologies: ["C", "File Systems", "Data Structures", "Storage Management"],
      github: "https://github.com/yourusername/atfs",
      live: null,
      category: "Low Level",
      icon: <Database size={24} />
    },
    {
      title: "Multi-threaded Prime Factorization",
      description: "Performance analysis of multi-threaded prime factorization in C. Evaluates optimal thread count, ordering effects, and locking mechanisms.",
      technologies: ["C", "Multi-threading", "Performance Analysis", "Algorithms"],
      github: "https://github.com/yourusername/prime-factorization",
      live: null,
      category: "Low Level",
      icon: <Cpu size={24} />
    },

    // Backend Projects
    {
      title: "Blockchain Peer and Miner",
      description: "Multi-threaded blockchain miner implementing Proof of Work algorithm. Optimized hashing operations using SHA-256 with high-throughput performance across CPU cores.",
      technologies: ["Python", "Blockchain", "SHA-256", "Multi-threading", "Cryptography"],
      github: "https://github.com/yourusername/blockchain-miner",
      live: null,
      category: "Backend",
      icon: <Code size={24} />
    },

    // Database Projects
    {
      title: "NBA Data CLI Application",
      description: "Command-line interface application for NBA data analysis with 30+ complex SQL queries. Provides comprehensive basketball statistics and analytics.",
      technologies: ["Java", "SQL", "CLI", "Data Analysis", "Database Design"],
      github: "https://github.com/yourusername/nba-cli",
      live: null,
      category: "Database",
      icon: <Database size={24} />
    },

    // Research Projects
    {
      title: "Arctic Climate Analysis",
      description: "Analysis of minimum temperatures (1950–2020) at 34 Arctic weather stations using Python. Applied Kendall-Theil trend analysis and published findings in Atmosphere-Ocean Journal.",
      technologies: ["Python", "Data Analysis", "Climate Science", "Statistical Analysis"],
      github: "https://github.com/yourusername/arctic-climate",
      live: null,
      category: "Research",
      icon: <Brain size={24} />
    },

    // In Progress Project
    {
      title: "SignalLens",
      description: "AI-driven platform analyzing real-time stock sentiment using FinBERT, GPT-4, and social/news data. Provides correlation to price movements and behavioral trend alerts.",
      technologies: ["Python", "AI/ML", "FinBERT", "GPT-4", "Financial Analysis", "Real-time Data"],
      github: "https://github.com/yourusername/signallens",
      live: null,
      category: "In Progress",
      icon: <Brain size={24} />
    }
  ];

  const categories = ["All", "Full Stack", "Low Level", "Backend", "Database", "Research", "In Progress"];

  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>

      <div className="content-section">
        <h2>Featured Work</h2>
        <p>
          Here are some of the projects I've worked on, spanning from low-level systems programming 
          to full-stack applications. Each project represents different aspects of my technical skills 
          and problem-solving approach.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>
                {project.icon}
              </div>
              <h3>{project.title}</h3>
            </div>
            
            <p>{project.description}</p>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                background: project.category === 'In Progress' ? 'var(--secondary-color)' : 'var(--primary-color)', 
                color: 'var(--bg-color)', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '4px', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                {project.category}
              </span>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'rgba(255, 105, 180, 0.1)',
                    color: 'var(--primary-color)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255, 105, 180, 0.3)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                <Github size={14} style={{ marginRight: '0.25rem' }} />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  <ExternalLink size={14} style={{ marginRight: '0.25rem' }} />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Project Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div className="skill-category">
            <h3>Full Stack</h3>
            <p>Complete applications with frontend and backend components</p>
          </div>
          <div className="skill-category">
            <h3>Low Level</h3>
            <p>Systems programming, drivers, and computer architecture projects</p>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <p>Server-side applications and distributed systems</p>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <p>Data analysis, SQL applications, and database design</p>
          </div>
          <div className="skill-category">
            <h3>Research</h3>
            <p>Academic research and published scientific work</p>
          </div>
          <div className="skill-category">
            <h3>In Progress</h3>
            <p>Currently developing and actively working on</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>More Projects</h2>
        <p>
          I'm constantly working on new projects and learning new technologies. 
          Check out my GitHub profile for more of my work, or feel free to reach out 
          if you'd like to collaborate on something interesting!
        </p>
        <div className="contact-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn">
            <Github size={16} style={{ marginRight: '0.5rem' }} />
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects; 