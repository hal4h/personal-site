import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HERO_TEXT = "Hi, my name is Halah Mhanni.";

const About = () => {
  // Typing animation state
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
    // Blinking cursor
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="page hero-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '0' }}>
      <section style={{ width: '100%', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'Fira Mono, monospace', fontSize: '2.8rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '1.5rem', letterSpacing: '-1px', whiteSpace: 'pre' }}>
          {displayed}
          <span style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.2s', color: 'var(--accent-color)' }}>|</span>
        </h1>
        <p style={{ fontFamily: 'Fira Mono, monospace', fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 600 }}>
          I’m a computer science student at the University of Manitoba passionate about building beautiful, scalable, and impactful software. Welcome to my portfolio.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
          <a href="https://github.com/hal4h" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Github /></a>
          <a href="https://linkedin.com/halah-mhanni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Linkedin /></a>
          <a href="mailto:halahmhanni4@icloud.com" aria-label="Email" style={{ color: 'var(--primary-color)', fontSize: 28 }}><Mail /></a>
        </div>
      </section>

      {/* Rest of about/education/skills/experience as sections below, styled minimally */}
      <section className="about-details" style={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '1.2rem', marginTop: '0.5rem' }}>
        <h2 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 600, fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>About Me</h2>
        <p style={{ marginBottom: '1.2rem' }}>
          I fell in love with problem solving and creativity early in high school, and never looked back since. My favorite class of all time was <b>Operating Systems</b>—it helps me every day when I program, since I truly understand how the computer works under the hood. I also loved <b>Automata Theory and Turing Machines</b>; learning about Turing completeness and formal languages has shaped the way I break down problems and approach algorithmic thinking.
        </p>
        <p style={{ marginBottom: '1.2rem' }}>
          Currently exploring the intersection of software engineering, artificial intelligence, and user experience design. I believe in writing clean, efficient code and creating intuitive user interfaces that solve real-world problems. Every project is an opportunity to learn something new and push my boundaries further.
        </p>
        <p style={{ marginBottom: '1.2rem' }}>
          I’ve also been increasingly interested in the intersection of technology and finance—how software, data, and AI are transforming the financial world, from fintech startups to algorithmic trading and beyond.
        </p>
      </section>

      <div className="content-section">
        <h2>Contact Information</h2>
        <div className="contact-info" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={16} color="var(--primary-color)" />
            <a href="mailto:halahmhanni4@icloud.com" style={{ color: 'inherit', textDecoration: 'underline' }}>halahmhanni4@icloud.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Linkedin size={16} color="var(--primary-color)" />
            <a href="https://linkedin.com/halah-mhanni" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>linkedin.com/halah-mhanni</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Github size={16} color="var(--primary-color)" />
            <a href="https://github.com/hal4h" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>github.com/hal4h</a>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Computer Science (Honors) Statistics Minor</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>University of Manitoba, Winnipeg, MB</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sep. 2022 – Dec. 2026</p>
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Awards & Honors:</h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem' }}>
              <li><b>DevHacks2024 Hackathon Fan's Choice Award:</b> Voted favorite project by attendees at DevHacks2024 for innovation and user experience.</li>
              <li><b>President's Scholar:</b> Awarded for maintaining a high academic standing throughout undergraduate studies.</li>
              <li><b>Emerging Leader Award (2023):</b> Recognized for outstanding leadership and community involvement at the University of Manitoba.</li>
              <li><b>Dean's Honour List:</b> Achieved for academic excellence each year.</li>
              <li><b>Queen Elizabeth II Entrance Scholarship:</b> Awarded for achieving a 95%+ average in high school.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Technical Skills</h2>
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

      <div className="content-section">
        <h2>Experience</h2>
        
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Government of Canada, Agriculture and Agri-Food (AAFC)</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Winnipeg, MB | May 2025 – Aug. 2025</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Engineered full-stack agricultural solutions using Spring Boot, Vue.js, and React, reducing data processing time by 30% through optimized API design.</li>
            <li>Architected RESTful microservices using Spring Boot and Hibernate, handling 5,000+ daily requests and improving system scalability for Canada's agricultural data infrastructure.</li>
            <li>Modernized legacy systems by integrating cloud-native technologies, reducing deployment times by 40%.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>CS106A Section Lead, Python Programming</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Stanford University, Code In Place</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Remote | Apr 2025 – Jun. 2025</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Lead weekly sections with 15+ students through core Python programming concepts including algorithmic thinking, data structures, and computational problem-solving, with 100% of students achieving course competencies</li>
            <li>Conducted in-depth code reviews for weekly submissions, providing tailored feedback on Python best practices and algorithm efficiency</li>
            <li>Pioneered a peer programming initiative that reduced common syntax errors by 30% while fostering collaborative problem-solving skills</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Game Development Student</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Ubisoft</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Winnipeg, MB | Oct 2023 – Apr 2024</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Developed a 3D infinite scroller game in C++ using the Ubisoft API, featuring custom pathfinding AI, collision detection, and physics-based interactions.</li>
            <li>Optimized the game loop to maintain consistent 60 FPS performance across multiple platforms.</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Leadership & Involvement</h2>
        
        <div className="experience-item">
          <h3>Member - Women in Computer Science</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>University of Manitoba</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2022 – Present</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Volunteer at workshops to teach middle school kids coding fundamentals and programming concepts</li>
            <li>Active participant in mentor mingle events, fostering connections between students and industry professionals</li>
            <li>Contribute to peer mentorship events, supporting fellow students in their academic and career development</li>
            <li>Organize and participate in various community outreach and educational initiatives</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Member - University of Manitoba MSA</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>University of Manitoba</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2022 – Present</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Volunteer and help organize community events and activities</li>
            <li>Contribute to fostering an inclusive and supportive campus environment</li>
            <li>Participate in various community service and outreach programs</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Member - Dev Club</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>University of Manitoba</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2022 – Present</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Participate in Capture The Flag (CTF) competitions, developing cybersecurity and problem-solving skills</li>
            <li>Engage in game jam events, collaborating with teams to create innovative projects under time constraints</li>
            <li>Active member of development clubs, contributing to various technical projects and learning initiatives</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Member - University of Manitoba Robotics Team</h3>
          <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>University of Manitoba</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2022 – Present</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Collaborate with team members on robotics projects and competitions</li>
            <li>Apply engineering principles and programming skills to solve complex robotics challenges</li>
            <li>Contribute to the design, development, and testing of robotic systems</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities, interesting projects, or just having 
          a chat about technology and innovation. Let's connect!
        </p>
        <div className="contact-links" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <a href="mailto:halahmhanni4@icloud.com" className="btn contact-btn">
            <Mail size={20} style={{ marginRight: '0.75rem' }} />
            Email Me
          </a>
          <a href="https://github.com/hal4h" target="_blank" rel="noopener noreferrer" className="btn contact-btn">
            <Github size={20} style={{ marginRight: '0.75rem' }} />
            GitHub
          </a>
          <a href="https://linkedin.com/halah-mhanni" target="_blank" rel="noopener noreferrer" className="btn contact-btn">
            <Linkedin size={20} style={{ marginRight: '0.75rem' }} />
            LinkedIn
          </a>
          <a href="/cv" className="btn contact-btn">
            <Download size={20} style={{ marginRight: '0.75rem' }} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 