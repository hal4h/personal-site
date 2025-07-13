import { Camera, Heart, Music, BookOpen, Coffee, Palette } from 'lucide-react';

const Misc = () => {
  const hobbies = [
    {
      title: "Photography",
      description: "I love capturing moments and exploring different perspectives through the lens. From street photography to nature shots, I enjoy experimenting with composition and lighting.",
      icon: <Camera size={24} />,
      color: "var(--primary-color)"
    },
    {
      title: "Music",
      description: "A passionate listener and occasional musician. I enjoy exploring different genres and finding new artists that inspire creativity and innovation.",
      icon: <Music size={24} />,
      color: "var(--secondary-color)"
    },
    {
      title: "Reading",
      description: "Always eager to learn and explore new ideas. I enjoy both technical books and fiction that challenge my perspective and expand my worldview.",
      icon: <BookOpen size={24} />,
      color: "var(--accent-color)"
    },
    {
      title: "Art & Design",
      description: "Exploring digital art and design as a way to express creativity. I enjoy experimenting with different styles and techniques.",
      icon: <Palette size={24} />,
      color: "var(--primary-color)"
    },
    {
      title: "Coffee",
      description: "A coffee enthusiast who appreciates the art of brewing and the ritual of enjoying a good cup. Always on the lookout for new coffee shops and beans.",
      icon: <Coffee size={24} />,
      color: "var(--primary-color)"
    },
    {
      title: "Travel",
      description: "Exploring new places and cultures helps me gain fresh perspectives and inspiration for my work. Every journey brings new ideas and connections.",
      icon: <Heart size={24} />,
      color: "var(--secondary-color)"
    }
  ];

  const photoGallery = [
    {
      title: "Urban Architecture",
      description: "Exploring the geometric patterns and lines of cityscapes",
      category: "Street Photography"
    },
    {
      title: "Nature's Details",
      description: "Close-up shots of natural textures and organic forms",
      category: "Nature"
    },
    {
      title: "Light & Shadow",
      description: "Playing with contrast and dramatic lighting effects",
      category: "Experimental"
    },
    {
      title: "Human Moments",
      description: "Candid shots capturing authentic human experiences",
      category: "Portrait"
    },
    {
      title: "Abstract Forms",
      description: "Finding beauty in unexpected shapes and compositions",
      category: "Abstract"
    },
    {
      title: "Color Stories",
      description: "Exploring the emotional impact of color in photography",
      category: "Color"
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Misc</h1>

      <div className="content-section">
        <h2>Beyond Code</h2>
        <p>
          While technology is my primary passion, I believe in maintaining a well-rounded life. 
          Here are some of the things that inspire me and keep me creative outside of programming.
        </p>
      </div>

      <div className="project-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="project-card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: hobby.color, marginRight: '0.5rem' }}>
                {hobby.icon}
              </div>
              <h3>{hobby.title}</h3>
            </div>
            
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Photography Gallery</h2>
        <p>
          Photography is one of my favorite creative outlets. Here are some of my favorite shots 
          and the stories behind them. Each image represents a moment of inspiration or discovery.
        </p>
      </div>

      <div className="project-grid">
        {photoGallery.map((photo) => (
          <div key={photo.title} className="project-card">
            <div style={{ 
              height: '200px', 
              background: 'var(--card-bg)',
              borderRadius: '8px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <Camera size={48} style={{ color: 'var(--primary-color)', opacity: 0.5 }} />
            </div>
            
            <h3>{photo.title}</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              {photo.description}
            </p>
            
            <span style={{ 
              background: 'rgba(255, 105, 180, 0.1)',
              color: 'var(--primary-color)',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              border: '1px solid rgba(255, 105, 180, 0.3)'
            }}>
              {photo.category}
            </span>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Currently Reading</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div className="project-card" style={{ margin: 0 }}>
            <h3>"Designing Data-Intensive Applications" by Martin Kleppmann</h3>
            <p>
              Exploring the principles behind reliable, scalable, and maintainable applications.
            </p>
          </div>
          
          <div className="project-card" style={{ margin: 0 }}>
            <h3>"The Pragmatic Programmer" by Andrew Hunt and David Thomas</h3>
            <p>
              A classic guide to becoming a more effective and productive programmer.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Get in Touch</h2>
        <p>
          I'm always interested in connecting with like-minded people who share similar passions. 
          Whether it's discussing technology, sharing photography tips, or just having a good conversation, 
          feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default Misc; 