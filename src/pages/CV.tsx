import { Download, Calendar, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

const Experience = () => {
  return (
    <div className="page">
      <h1 className="page-title">Experience</h1>

      <div className="content-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Resume</h2>
          <a href="/halah_resume.pdf" download className="btn">
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Download PDF
          </a>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.2rem' }}>Contact Information</h3>
            <div className="project-card" style={{ margin: 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.2rem',
                justifyItems: 'center',
                width: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  <Mail size={16} color="var(--primary-color)" />
                  <span>halahmhanni4@icloud.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  <Linkedin size={16} color="var(--primary-color)" />
                  <span>linkedin.com/halah-mhanni</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  <Github size={16} color="var(--primary-color)" />
                  <span>github.com/hal4h</span>
                </div>
              </div>
            </div>
          </div>

          

          {/* Education */}
          <div>
            <h3>Education</h3>
            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Bachelor of Computer Science (Honors) Statistics Minor</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  Sep. 2022 – Dec. 2026
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University of Manitoba, Winnipeg, MB
              </p>
              <div style={{ marginTop: '1rem' }}>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Awards & Honors:</h4>
                <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem' }}>
                  <li>DevHacks2024 Hackathon Fan's Choice Award</li>
                  <li>President's Scholar</li>
                  <li>Emerging Leader Award</li>
                  <li>Dean's Honour List</li>
                  <li>Queen Elizabeth II Entrance Scholarship</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3>Professional Experience</h3>
            
            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Software Developer</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  May 2025 – Aug. 2025
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Government of Canada, Agriculture and Agri-Food (AAFC) | Winnipeg, MB
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Engineered full-stack agricultural solutions using Spring Boot, Vue.js, and React, reducing data processing time by 30% through optimized API design.</li>
                <li>Architected RESTful microservices using Spring Boot and Hibernate, handling 5,000+ daily requests and improving system scalability for Canada's agricultural data infrastructure.</li>
                <li>Modernized legacy systems by integrating cloud-native technologies, reducing deployment times by 40%.</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>CS106A Section Lead, Python Programming</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  Apr 2025 – Jun. 2025
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Stanford University, Code In Place | Remote
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Lead weekly sections with 15+ students through core Python programming concepts including algorithmic thinking, data structures, and computational problem-solving, with 100% of students achieving course competencies</li>
                <li>Conducted in-depth code reviews for weekly submissions, providing tailored feedback on Python best practices and algorithm efficiency</li>
                <li>Pioneered a peer programming initiative that reduced common syntax errors by 30% while fostering collaborative problem-solving skills</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Game Development Student</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  Oct 2023 – Apr 2024
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Ubisoft | Winnipeg, MB
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Developed a 3D infinite scroller game in C++ using the Ubisoft API, featuring custom pathfinding AI, collision detection, and physics-based interactions.</li>
                <li>Optimized the game loop to maintain consistent 60 FPS performance across multiple platforms.</li>
              </ul>
            </div>
          </div>

          {/* Leadership & Involvement */}
          <div>
            <h3>Leadership & Involvement</h3>
            
            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Member - Women in Computer Science</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2022 – Present
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University of Manitoba
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Volunteer at workshops to teach middle school kids coding fundamentals and programming concepts</li>
                <li>Active participant in mentor mingle events, fostering connections between students and industry professionals</li>
                <li>Contribute to peer mentorship events, supporting fellow students in their academic and career development</li>
                <li>Organize and participate in various community outreach and educational initiatives</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Member - University of Manitoba MSA</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2022 – Present
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University of Manitoba
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Volunteer and help organize community events and activities</li>
                <li>Contribute to fostering an inclusive and supportive campus environment</li>
                <li>Participate in various community service and outreach programs</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Member - Dev Club</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2022 – Present
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University of Manitoba
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Participate in Capture The Flag (CTF) competitions, developing cybersecurity and problem-solving skills</li>
                <li>Engage in game jam events, collaborating with teams to create innovative projects under time constraints</li>
                <li>Active member of development clubs, contributing to various technical projects and learning initiatives</li>
              </ul>
            </div>

            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-color)' }}>Member - University of Manitoba Robotics Team</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.25rem' }} />
                  2022 – Present
                </span>
              </div>
              <p style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                University of Manitoba
              </p>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                <li>Collaborate with team members on robotics projects and competitions</li>
                <li>Apply engineering principles and programming skills to solve complex robotics challenges</li>
                <li>Contribute to the design, development, and testing of robotic systems</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <p>Java, Python, C, C++, SQL (MySQL, SQLite), JavaScript, TypeScript, R, Processing</p>
              </div>
              <div className="skill-category">
                <h3>Frameworks & Tools</h3>
                <p>React, Vue, Spring Boot, Hibernate, Vite, Node.js, Next.js, Figma, JPA, Firebase, AWS</p>
              </div>
              <div className="skill-category">
                <h3>Coursework</h3>
                <p>Operating Systems, Distributed Computing, Computer Architecture, Software Engineering, Object-Oriented Programming, Databases, DSA, Human-Computer Interaction I & II, Theory of Automata and Formal Languages, Computer Security</p>
              </div>
            </div>
          </div>

         {/* Notable Projects */}
         <div>
            <h3>Notable Projects</h3>
            <div className="project-card" style={{ margin: 0, marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Pomoverse: Your Study Companion</span>
                <a href="https://github.com/yourusername/pomoverse" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--primary-color)' }}><Github size={18} /></a>
                <a href="https://pomo-verse.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Live Demo" style={{ color: 'var(--primary-color)' }}><ExternalLink size={18} /></a>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: 0 }}>
                Full-stack productivity app with real-time sync, task management, dynamic theming, and Spotify integration. 650+ users. Won DevHacks Fan's Choice and Best UI Awards for innovative UX and engagement.
              </p>
            </div>
            <div className="project-card" style={{ margin: 0, marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Arctic Climate Analysis (Published Research)</span>
                <a href="https://www.tandfonline.com/doi/full/10.1080/07055900.2021.1915238#references-Section" target="_blank" rel="noopener noreferrer" aria-label="Publication" style={{ color: 'var(--primary-color)' }}><ExternalLink size={18} /></a>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: 0 }}>
                Analysis of minimum temperatures (1950–2020) at 34 Arctic weather stations using Python. Applied Kendall-Theil trend analysis and published findings in Atmosphere-Ocean Journal.
              </p>
            </div>
            <div className="project-card" style={{ margin: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>NBA Data CLI Application</span>
                <a href="https://github.com/yourusername/3380-project" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--primary-color)' }}><Github size={18} /></a>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: 0 }}>
                Command-line interface for NBA data analysis with 30+ complex SQL queries. Provides comprehensive basketball statistics and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 