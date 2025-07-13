import { Download, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="page">
      <h1 className="page-title">About</h1>

      <div className="content-section">
        <h2>Hello, I'm Halah</h2>
        <p>
          I'm a fourth-year Computer Science student with a passion for creating innovative solutions 
          and pushing the boundaries of technology. My journey in tech has been driven by curiosity 
          and a desire to build things that make a difference.
        </p>
        <p>
          Currently exploring the intersection of software engineering, artificial intelligence, and 
          user experience design. I believe in writing clean, efficient code and creating intuitive 
          user interfaces that solve real-world problems.
        </p>
      </div>

      <div className="content-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>JavaScript, TypeScript, Python, Java, C++</p>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <p>React, Vue.js, HTML5, CSS3, SASS</p>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <p>Node.js, Express, Django, PostgreSQL, MongoDB</p>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <p>Git, Docker, AWS, Figma, VS Code</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities, interesting projects, or just having 
          a chat about technology and innovation.
        </p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="btn">
            <Mail size={16} style={{ marginRight: '0.5rem' }} />
            Email Me
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn">
            <Github size={16} style={{ marginRight: '0.5rem' }} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn">
            <Linkedin size={16} style={{ marginRight: '0.5rem' }} />
            LinkedIn
          </a>
          <a href="/cv" className="btn">
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 