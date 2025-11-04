import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

import VideoHome from '../assets/video/provetta.mp4'

import ChiSiamoImg from '../assets/photo_home/chi_siamo.jpg';
import gallery01 from '../assets/photo_home/DSC_001.jpg';
import gallery02 from '../assets/photo_home/DSC_002.jpg';
import gallery03 from '../assets/photo_home/DSC_003.jpg';
import gallery04 from '../assets/photo_home/DSC_004.jpg';
import gallery05 from '../assets/photo_home/DSC_005.jpg';

import bandina01 from '../assets/photo_home/Bandina01.jpg'; 
import bandina02 from '../assets/photo_home/Bandina02.jpg'; 

const Home: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  // Refs for intersection observer
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  // Timeline data
  const timelineEvents = [

    { year: '1779', title: 'Prime Esibizioni', desc: 'Testimonianze dei primi servizi della banda' },
    { year: '1947', title: 'Fondazione Ufficiale', desc: 'nasce ufficialmente la Banda di Ravenna' },
    { year: '1984', title: 'Autonomia e Identità', desc: 'La banda diventa autonoma e assume il titolo di Banda Cittadina' },
    { year: '2015', title: 'Nuova Direzione', desc: 'La direzione passa al Maestro Mauro Vergimigli' },
    { year: '2025', title: 'Oggi', desc: 'La banda partecipa a molti eventi tra cui il Ravenna Festival' }
  ];

  // Gallery images (placeholder - QUI ARRAY DI IMMAGINI! dopo import!)
  const galleryImages = [
    gallery01,
    gallery02,
    gallery03,
    gallery04,
    gallery05
  ];

  // Loop infinito avanti
const handleGalleryNextLoop = () => {
  setCurrentGalleryIndex(prev =>
    prev === galleryImages.length - 1 ? 0 : prev + 1
  );
};

// Loop infinito indietro
const handleGalleryPrevLoop = () => {
  setCurrentGalleryIndex(prev =>
    prev === 0 ? galleryImages.length - 1 : prev - 1
  );
};

// Stato per pausa autoplay quando passi col mouse
const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  useEffect(() => {
  if (isGalleryPaused) return; // pausa on hover

  const interval = setInterval(() => {
    handleGalleryNextLoop();
  }, 4000); // cambia ogni 4 secondi

  return () => clearInterval(interval);
}, [isGalleryPaused, currentGalleryIndex]);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Timeline auto-advance
    const timelineInterval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timelineEvents.length);
    }, 4000);

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
      clearInterval(timelineInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="home">
      {/* Hero Section */}
      <section id="home1" className="hero-section no-select">
        <div className="hero-background">
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={VideoHome} type="video/mp4" />
          </video>
          {!isVideoLoaded && (
            <div className="hero-image-fallback" style={{backgroundImage: 'url(/img/hero-banda.jpg)'}} />
          )}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="title-line-1">La Banda Cittadina</span>
              <span className="title-line-2">di Ravenna</span>
            </h1>
            <p className="hero-subtitle">
              <span className="subtitle-icon">♪</span>
              Tradizione, passione e musica dal 1797
              <span className="subtitle-icon">♪</span>
            </p>
            <button 
              className="hero-cta"
              onClick={() => scrollToSection('chi-siamo')}
            >
              <span>Scopri di più</span>
              <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M7 13L12 18L17 13M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section 
        id="chi-siamo" 
        className="section chi-siamo-section no-select"
        ref={el => {sectionsRef.current[0] = el}}
      >
        <div className="container">
          <div className="chi-siamo-grid">
            <div className="chi-siamo-content">
              <h2 className="section-title">Chi Siamo</h2>
              <div className="title-decoration"></div>
              <p className="section-text">
                Da oltre due secoli, la Banda Cittadina di Ravenna rappresenta il cuore pulsante 
                della tradizione musicale della nostra città. Con più di 60 musicisti appassionati, 
                portiamo avanti un patrimonio culturale unico, unendo generazioni attraverso 
                il linguaggio universale della musica.
              </p>
              <p className="section-text">
                Dalle piazze storiche ai teatri delle città, la nostra missione è diffondere 
                l'amore per la musica bandistica, appassionando giovani talenti e regalando emozioni 
                indimenticabili al nostro pubblico.
              </p>
            </div>
            <div className="chi-siamo-image">
              <div className="image-frame">
                <img src={ChiSiamoImg} alt="La Banda Cittadina di Ravenna" />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storia Section */}
      <section 
        className="section storia-section no-select"
        ref={el => {sectionsRef.current[1] = el}}
      >
        <div className="container">
          <h2 className="section-title">La Nostra Storia</h2>
          <div className="title-decoration"></div>
          
          <div className="timeline-container">
            <div className="timeline-track">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`timeline-item ${activeTimelineItem === index ? 'active' : ''}`}
                  onClick={() => setActiveTimelineItem(index)}
                >
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{event.title}</h4>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line"></div>
            </div>
          </div>
          
          <div className="section-cta">

            {/* Bottone impegnativo e decisamente lungo */}
            <a
              href="storia"
              className="btn-secondary"
              style={{
                textDecoration: "none",        
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 2.5rem",
                fontSize: "1.125rem",
                fontWeight: 600,
                background: "rgba(255, 255, 255, 0.05)",
                color: "#f1f5f9",
                border: "2px solid rgba(245, 158, 11, 0.5)",
                borderRadius: "50px",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245, 158, 11, 0.1)";
                e.currentTarget.style.borderColor = "#f59e0b";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(245, 158, 11, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.5)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Leggi la storia completa
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 7L18 12L13 17M6 12H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>

          </div>
        </div>
      </section>

      {/* Scuola Section */}
      <section 
        className="section scuola-section no-select"
        ref={el => {sectionsRef.current[2] = el}}
      >
        <div className="container">
          <div className="scuola-grid">
            <div className="scuola-content">
              <h2 className="section-title">La Nostra Scuola</h2>
              <div className="title-decoration"></div>
              <p className="section-text">
                La Scuola di Musica della Banda Cittadina è il cuore formativo della nostra 
                associazione, dove giovani talenti imparano l'arte della musica sotto la guida 
                di maestri esperti e appassionati.
              </p>
              
              <div className="bandina-card">
                <h3 className="bandina-title">🎺 LA BANDINA</h3>
                <p className="bandina-text">
                  Suona insieme agli studenti della scuola di musica in una vera e propria 
                  Banda Junior! Un'esperienza unica per crescere musicalmente in un ambiente 
                  divertente e stimolante.
                </p>
              </div>
              
              <a 
                href="/scuola" 
                className="btn-primary btn-link"
              >
                Scopri la Scuola della Banda
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>

            </div>
            
            <div className="scuola-image">
              <div className="image-collage">
                <img className="collage-img-1" src={bandina02} alt="Banda Junior" />
                <img className="collage-img-2" src={bandina01} alt="Giovani musicisti" />
                <div className="music-note note-1">♪</div>
                <div className="music-note note-2">♫</div>
                <div className="music-note note-3">♬</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repertorio Section */}
      <section 
        id="repertorio"
        className="section repertorio-section no-select"
        ref={el => {sectionsRef.current[3] = el}}
      >
        <div className="container">
          <h2 className="section-title">Il Nostro Repertorio</h2>
          <div className="title-decoration"></div>
          
          <p className="section-text-center">
            Dal sinfonico al pop bandistico, dalle marce alle colonne sonore: 
            il nostro repertorio unisce tradizione e modernità.
          </p>
          
          <div className="repertorio-grid">
            <div className="repertorio-card">
              <div className="card-icon">🎼</div>
              <h3>Musica Classica</h3>
              <p>Sinfonie e ouverture dei grandi maestri</p>
            </div>
            <div className="repertorio-card">
              <div className="card-icon">🎬</div>
              <h3>Colonne Sonore</h3>
              <p>Le melodie più amate del cinema</p>
            </div>
            <div className="repertorio-card">
              <div className="card-icon">🎺</div>
              <h3>Marce Tradizionali</h3>
              <p>Il repertorio storico bandistico</p>
            </div>
            <div className="repertorio-card">
              <div className="card-icon">🎸</div>
              <h3>Pop & Moderno</h3>
              <p>Arrangiamenti contemporanei</p>
            </div>
          </div>
          
          <div className="music-wave">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        </div>
      </section>

      {/* Diventa Bandista Section */}
      <section 
        className="section diventa-bandista-section  no-select"
        ref={el => {sectionsRef.current[4] = el}}
      >
        <div className="container">
          <div className="bandista-content">
            <h2 className="section-title">Diventa un Bandista</h2>
            
            
            <p className="motivational-text">
              Unisciti a noi e diventa parte di una tradizione secolare! 
              Non importa la tua età o esperienza: la passione per la musica 
              è l'unico requisito necessario.
            </p>
            
            <div className="benefits-grid1">
              <div className="benefit-item1">
                <span className="benefit-icon1">🎵</span>
                <span>Lezioni a prezzo ridotto</span>
              </div>
              <div className="benefit-item1">
                <span className="benefit-icon1">💂🏻</span>
                <span>Esibizioni pubbliche</span>
              </div>
              <div className="benefit-item1">
                <span className="benefit-icon1">🌍</span>
                <span>Viaggi e trasferte</span>
              </div>
              <div className="benefit-item1">
                <span className="benefit-icon1">🏆</span>
                <span>Crescita personale</span>
              </div>
            </div>
            
            <a 
              href="/diventa-un-bandista" 
              className="btn-primary btn-link"
            >
              Unisciti a noi
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>

          </div>
        </div>
      </section>

      {/* Eventi Section */}
      <section 
        id="eventi"
        className="section eventi-section no-select"
        ref={el => {sectionsRef.current[5] = el}}
      >
        <div className="container">
          <h2 className="section-title">Vienici a Trovare!</h2>
          <div className="title-decoration"></div>
          
          <p className="section-text-center">
            Ci esibiamo regolarmente in piazze, teatri e sale da concerto. 
            Dalle parate cittadine ai concerti di gala, ogni evento è un'occasione 
            per condividere la nostra passione con il pubblico.
          </p>
          
          <div className="eventi-preview">
            <div className="event-card">
              <div className="event-icon">🏛️</div>
              <h4>Concerti a Teatro</h4>
            </div>
            <div className="event-card">
              <div className="event-icon">🌳</div>
              <h4>Esibizioni all'Aperto</h4>
            </div>
            <div className="event-card">
              <div className="event-icon">🎇</div>
              <h4>Eventi Speciali e Trasferte</h4>
            </div>
          </div>
          
          <div className="section-cta">
            {/* Bottone impegnativo e decisamente lungo */}
            <a
              href="eventi"
              className="btn-secondary"
              style={{
                textDecoration: "none",        
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 2.5rem",
                fontSize: "1.125rem",
                fontWeight: 600,
                background: "rgba(255, 255, 255, 0.05)",
                color: "#f1f5f9",
                border: "2px solid rgba(245, 158, 11, 0.5)",
                borderRadius: "50px",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245, 158, 11, 0.1)";
                e.currentTarget.style.borderColor = "#f59e0b";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(245, 158, 11, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.5)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Scopri tutti gli eventi
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 7L18 12L13 17M6 12H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Prenota Section */}
      <section 
        id="prenota"
        className="section prenota-section no-select"
        ref={el => {sectionsRef.current[6] = el}}
      >
        <div className="container">
          <div className="prenota-card">
            <h2 className="prenota-title">Cerchi una banda per un tuo evento?</h2>
            
            <p className="prenota-text">
              Vuoi prenotare la banda per il tuo evento, cerimonia o manifestazione?
            </p>
            
            <p className="prenota-subtitle">
              Contattaci e porta la nostra musica nel tuo giorno speciale
            </p>
            
            <div className="event-types">
              <span className="event-type">Sagre</span>
              <span className="event-type">Manifestazioni</span>
              <span className="event-type">Parate</span>
              <span className="event-type">Cerimonie</span>
              <span className="event-type">Eventi Privati</span>
            </div>
            
            <div className="cta-buttons">
            <a 
            href="https://forms.gle/IL_TUO_LINK_GOOGLE_FORM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary btn-large"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Modulo di richiesta banda
            </a>
        </div>
          </div>
        </div>
      </section>




{/* Gallery Section */}
<section
  id="galleria"
  className="section gallery-section no-select"
  ref={el => { sectionsRef.current[7] = el }}
  style={{
    position: 'relative',
    height: '70vh',
    minHeight: '500px',
    overflow: 'hidden',
    padding: 0,
    background: '#0f172a'
  }}
  onMouseEnter={() => setIsGalleryPaused(true)}
  onMouseLeave={() => setIsGalleryPaused(false)}
>
  {/* Track immagini */}
  <div
    style={{
      display: 'flex',
      height: '100%',
      transform: `translateX(-${currentGalleryIndex * 100}%)`,
      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    }}
  >
    {galleryImages.map((img, index) => (
      <div
        key={index}
        style={{
          flex: '0 0 100%',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.55))'
        }} />
      </div>
    ))}
  </div>

  {/* Pulsante sinistra */}
  <button
    onClick={handleGalleryPrevLoop}
    style={{
      position: 'absolute',
      left: '2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.3)',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 5
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
    }}
  >
    <svg
  style={{ width: '32px', height: '32px', flexShrink: 0 }}
  viewBox="0 0 24 24"
  fill="none"
>
  <path d="M15 19L8 12L15 5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  </button>

  {/* Pulsante destra */}
  <button
    onClick={handleGalleryNextLoop}
    style={{
      position: 'absolute',
      right: '2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.3)',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 5
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
    }}
  >

      <svg
        style={{ width: '32px', height: '32px', flexShrink: 0 }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M9 5L16 12L9 19" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  </button>

  {/* Pallini */}
  <div
    style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 4
    }}
  >
    {galleryImages.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrentGalleryIndex(i)}
        style={{
          width: currentGalleryIndex === i ? '32px' : '12px',
          height: '12px',
          borderRadius: '12px',
          background: currentGalleryIndex === i ? '#fbbf24' : 'rgba(255,255,255,0.4)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
      />
    ))}
  </div>
</section>

<section id="footer"></section>

    </div>
  );
};

export default Home;