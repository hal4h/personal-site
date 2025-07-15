

const Misc = () => {
  const favoriteFilms = [
    {
      title: "Harakiri",
      year: 1962,
      director: "Masaki Kobayashi",
      description: "A devastating critique of samurai honor and tradition, told with haunting beauty.",
      letterboxd: "https://letterboxd.com/film/harakiri/"
    },
    {
      title: "La Haine",
      year: 1995,
      director: "Mathieu Kassovitz",
      description: "A raw, urgent look at youth and unrest in the Parisian suburbs.",
      letterboxd: "https://letterboxd.com/film/la-haine/"
    },
    {
      title: "In the Mood for Love",
      year: 2000,
      director: "Wong Kar-wai",
      description: "A visually stunning, poetic meditation on longing and missed connections.",
      letterboxd: "https://letterboxd.com/film/in-the-mood-for-love/"
    },
    {
      title: "Lion of the Desert",
      year: 1981,
      director: "Moustapha Akkad",
      description: "An epic story of resistance and dignity in the face of colonial oppression.",
      letterboxd: "https://letterboxd.com/film/lion-of-the-desert/"
    }
  ];

  return (
    <div className="page" style={{ minHeight: '100vh', padding: 0, background: 'var(--bg-color)' }}>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem 2rem 2rem' }}>
        <h1 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 700, fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '2.5rem', letterSpacing: '-1px' }}>
          Miscellaneous
        </h1>
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 600, fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Favorite Films</h2>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'Fira Mono, monospace', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
            I love cinema and am always inspired by powerful storytelling and beautiful visuals. Some of my all-time favorite films are:
          </p>
          <ul style={{ color: 'var(--primary-color)', fontSize: '1.1rem', fontFamily: 'Fira Mono, monospace', paddingLeft: '1.5rem', marginBottom: '2rem', listStyle: 'disc' }}>
            {favoriteFilms.map((film) => (
              <li key={film.title} style={{ marginBottom: '1.1rem' }}>
                <b>
                  <a
                    href={film.letterboxd}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary-color)', textDecoration: 'underline dotted', transition: 'color 0.2s' }}
                  >
                    {film.title}
                  </a>
                </b>{' '}
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>
                  ({film.year}, {film.director})
                </span>
                <br />
                <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{film.description}</span>
              </li>
            ))}
          </ul>
        </div>
       
    
        
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Fira Mono, monospace', fontWeight: 600, fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'Fira Mono, monospace', fontSize: '1.1rem', marginBottom: 0 }}>
            I'm always interested in connecting with like-minded people who share similar passions. Whether it's discussing technology, sharing photography tips, or just having a good conversation, feel free to reach out!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Misc; 