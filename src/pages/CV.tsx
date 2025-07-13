import { Download, Calendar, ExternalLink } from 'lucide-react';

const CV = () => {
  return (
    <div className="page">
      <h1 className="page-title">CV</h1>

      <div className="content-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Resume</h2>
          <a href="/resume.pdf" download className="btn">
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Download PDF
          </a>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Education */}
          <div>
            <h3>Education</h3>
            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Bachelor of Computer Science</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2020 - 2024
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University Name
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                GPA: 3.8/4.0 | Relevant Coursework: Data Structures, Algorithms, Software Engineering, 
                Database Systems, Web Development, Machine Learning
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3>Experience</h3>
            
            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Software Engineering Intern</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  Summer 2023
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Tech Company Name
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Implemented new features and bug fixes in an agile environment</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Research Assistant</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2022 - 2023
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University Research Lab
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Conducted research on machine learning algorithms and data analysis</li>
                <li>Published findings in academic journals and presented at conferences</li>
                <li>Mentored junior students in research methodologies</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3>Notable Projects</h3>
            
            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>AI-Powered Task Manager</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                  <ExternalLink size={14} />
                </a>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Built a smart task management application using React, Node.js, and OpenAI API. 
                Features include natural language task creation, intelligent prioritization, and 
                automated scheduling.
              </p>
            </div>

            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>E-commerce Platform</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                  <ExternalLink size={14} />
                </a>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Developed a full-stack e-commerce solution with React frontend, Express.js backend, 
                and MongoDB database. Implemented payment processing, user authentication, and 
                inventory management.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Programming</h3>
                <p>JavaScript, TypeScript, Python, Java, C++</p>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <p>React, Vue.js, Node.js, Express, Django</p>
              </div>
              <div className="skill-category">
                <h3>Databases</h3>
                <p>PostgreSQL, MongoDB, Redis, MySQL</p>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <p>Git, Docker, AWS, CI/CD, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV; 