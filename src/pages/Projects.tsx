import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application that uses natural language processing to create and prioritize tasks. Features include intelligent scheduling, progress tracking, and team collaboration.",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      category: "Full Stack"
    },
    {
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with payment processing, user authentication, inventory management, and admin dashboard. Built with modern web technologies.",
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Full Stack"
    },
    {
      title: "Machine Learning Data Analyzer",
      description: "A Python-based tool for analyzing large datasets using machine learning algorithms. Includes data visualization, predictive modeling, and automated reporting features.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask"],
      github: "https://github.com/yourusername/ml-analyzer",
      live: null,
      category: "Data Science"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities. Built with WebRTC and Socket.io for seamless communication.",
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Express"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app-demo.com",
      category: "Real-time"
    },
    {
      title: "Portfolio Website",
      description: "A unique, minimalistic portfolio website with modern design and smooth interactions. Built with React, TypeScript, and modern CSS.",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions, forecasts, and historical data. Features interactive maps and customizable weather alerts.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Axios"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-dashboard.com",
      category: "Frontend"
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>

      <div className="content-section">
        <h2>Featured Work</h2>
        <p>
          Here are some of the projects I've worked on. Each one represents a different aspect 
          of my technical skills and creative problem-solving approach.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                background: 'var(--primary-color)', 
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