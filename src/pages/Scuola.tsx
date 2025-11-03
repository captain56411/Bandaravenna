import React, { useEffect, useRef } from 'react';
import './Scuola.css';

import fotoSax from '../assets/photos/I_sax.png';
import fotoClarinet from '../assets/photos/Iclarinet.png'
import fotoFlauto from '../assets/photos/Iflute.png'
import fotoBatteria from '../assets/photos/Idrum.png' 
import fototromba from '../assets/photos/Itrumpet.png'
import fotoTrombone from '../assets/photos/Itrombone.png'
import fotoTuba from '../assets/photos/Ituba.png'
import fotoCorno from '../assets/photos/Ihorn.png'
import fotoEufonio from '../assets/photos/Ieufonio.png'
import fotoOboe from '../assets/photos/Ioboe.png'
import fotoFagotto from '../assets/photos/Ifagotto.png'
import fotoCanto from '../assets/photos/Icanto.png'

import fotoInsieme from '../assets/photos/Iinsieme.png'
import fotoTeoria from '../assets/photos/Itheory.png' 


export const Scuola: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);


  // Intersection Observer per animazioni
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Dati degli strumenti con i docenti
  const instruments = [
  { name: 'Clarinetto', teacher: 'Vincenzo Libra', image: fotoClarinet },
  { name: 'Sassofono', teacher: 'Stefano Fariselli', image: fotoSax },
  { name: 'Flauto', teacher: 'Alessia Amadio', image: fotoFlauto },
  { name: 'Batteria', teacher: 'Guido Casadio', image: fotoBatteria },
  { name: 'Tromba', teacher: 'Matteo Fiumara', image: fototromba },
  { name: 'Trombone', teacher: 'Yuri Spadaro', image: fotoTrombone },
  { name: 'Tuba', teacher: 'Yuri Spadaro', image: fotoTuba },
  { name: 'Corno', teacher: 'Maria Agostini', image: fotoCorno },
  { name: 'Eufonio', teacher: 'Yuri Spadaro', image: fotoEufonio },
  { name: 'Oboe', teacher: 'Luigi Lidonnici', image: fotoOboe },
  { name: 'Fagotto', teacher: '', image: fotoFagotto },
  { name: 'Canto', teacher: 'Maria Belèn', image: fotoCanto },
];

const courses = [
  { name: 'Musica d\'Insieme', teacher: 'Maria Agostini', image: fotoInsieme },
  { name: 'Teoria e Solfeggio', teacher: 'Maria Agostini', image: fotoTeoria },
];


  return (
    <div className="scuola-page no-select">
      {/* Hero Section */}
      <section 
        className="scuola-hero section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="hero-title">
              <span className="title-line">Impara a Suonare</span>
              <span className="title-line gradient-text">Con i Migliori Docenti</span>
            </h1>
            <p className="hero-subtitle">
              La scuola di musica della Banda Cittadina di Ravenna offre una vasta gamma 
              di insegnanti per imparare a suonare uno strumento musicale
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">11</div>
                <div className="stat-label">Strumenti</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">10</div>
                <div className="stat-label">Docenti</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Studenti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Notes */}
        <div className="floating-notes">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♪</span>
          <span className="note note-4">♫</span>
          <span className="note note-5">♪</span>
          <span className="note note-6">♫</span>
        </div>
      </section>

      {/* Intro Section */}
      <section 
        className="scuola-intro section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >


        <div className="container">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>

          <div className="intro-content">
            <div className="intro-icon">🎼</div>
            <h2 className="section-title">La Nostra Scuola</h2>
            <div className="title-decoration"></div>
            <p className="intro-text">
              La nostra scuola accoglie allievi <strong>di tutte le età</strong>, dai primi passi nel mondo della musica fino a chi desidera consolidare le proprie competenze.<br/>
              I nostri insegnanti, diplomati e laureati al conservatorio, uniscono esperienza e passione per offrire un <strong>insegnamento personalizzato e coinvolgente</strong>. <br/>
              Oltre alle lezioni individuali, ogni studente può partecipare ai corsi collettivi di Musica d’Insieme e di Teoria e Solfeggio, già inclusi nella quota del corso base: un modo per crescere musicalmente divertendosi e facendo gruppo.
            </p>
            <div className="intro-info-box">
              <div className="info-box-icon">📅</div>
              <div className="info-box-content">
                <h3>Informazioni e Orari</h3>
                <p>Per conoscere gli orari delle lezioni e iscriverti, invia una richiesta tramite il modulo al link qui sotto, oppure chiama il numero della banda. <br/>
                    Gli orari e i giorni delle lezioni verranno concordati direttamente con i docenti in base alle disponibilità.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Grid Section */}
      <section 
        className="instruments-section section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">I Nostri Strumenti</h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">
            Ogni corso è pensato per offrirti una formazione completa, dalla tecnica di base all’espressione musicale, con esibizioni e prove collettive, come il saggio di fine anno, per mettere subito in pratica ciò che impari.
          </p>

          {/* Instruments Grid */}
          <div className="instruments-grid1">
            {instruments.map((instrument, index) => {
              const hasTeacher =
                instrument.teacher && instrument.teacher.trim() !== '';

              return (
                <div
                  key={index}
                  className="instrument-card1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="instrument-icon">
                    <img src={instrument.image} alt={instrument.name} />
                  </div>
                  <h3 className="instrument-name">{instrument.name}</h3>
                  <p className="instrument-teacher">{instrument.teacher}</p>

                  <div
                    className={hasTeacher ? 'instrument-badge' : 'instrument-badge-neg'}
                  >
                    {hasTeacher ? 'Disponibile' : 'Su richiesta'}
                  </div>
                </div>
              );
            })}

            {/* Courses */}
            {courses.map((course, index) => (
              <div 
                key={`course-${index}`} 
                className="instrument-card1 course-card"
                style={{ animationDelay: `${(instruments.length + index) * 0.1}s` }}
              >
                <div className="instrument-icon course-icon">
                    <img src={course.image} alt={course.name} />
                </div>
                <h3 className="instrument-name">{course.name}</h3>
                <p className="instrument-teacher">{course.teacher}</p>
                <div className="instrument-badge course-badge">Corso Collettivo</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandina Section */}
      <section 
        className="bandina-section section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <div className="bandina-content">
            <div className="bandina-text">
              <div className="bandina-badge">
                <span>🎺</span>
                <span>Ensemble Junior</span>
              </div>
              <h2 className="section-title">La Bandina</h2>
              <div className="title-decoration"></div>
              <p className="bandina-description">
                La <strong>Bandina</strong> è l'ensemble junior della Banda Cittadina di Ravenna, 
                dove i giovani studenti possono mettere in pratica quanto appreso durante le lezioni 
                individuali e suonare insieme in una vera e propria banda junior.
              </p>
              <p className="bandina-description">
                È un'esperienza formativa fondamentale che insegna ai ragazzi il valore della 
                <strong> musica d'insieme</strong>, della disciplina e del lavoro di squadra, 
                preparandoli ad entrare un giorno nella banda principale.
              </p>
              <div className="bandina-features">
                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <span>Prove settimanali</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎭</div>
                  <span>Concerti pubblici</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <span>Partecipazione a eventi con la Banda</span>
                </div>
              </div>
            </div>

            {/* Video YouTube */}
            <div className="bandina-video">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/AkGg4WhNpoA"
                  title="Bandina - Video di Presentazione"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
    <section 
    id="unisciti"
    className="scuola-cta section"
    ref={(el) => { sectionsRef.current[4] = el; }}
    >
    <div className="container">
        <div className="cta-card">
        <div className="cta-icon">🎵</div>
        <h2 className="cta-title">Pronto a Iniziare il Tuo Viaggio Musicale?</h2>
        <p className="cta-text">
            Unisciti alla nostra scuola di musica e scopri il musicista che è in te!
        </p>
        <p className="cta-form-text">
            Compila la domanda di interesse al link qui sotto
        </p>
        <div className="cta-buttons">
            <a 
            href="https://forms.gle/LINK_GOOGLE_FORM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary btn-large"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Compila il Modulo di Interesse
            </a>
        </div>
        </div>
    </div>
    </section>
    </div>
  );
};

export default Scuola;