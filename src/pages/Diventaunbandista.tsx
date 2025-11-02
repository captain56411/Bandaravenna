import React, { useState } from 'react';
import './Diventaunbandista.css';

interface Instrument {
  name: string;
  icon: string;
  urgent?: boolean;
}

const DiventaUnBandista: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      icon: "📝",
      title: "Compila il Modulo",
      description: "Invia la tua domanda di interesse o contattaci direttamente per iniziare il tuo percorso con noi."
    },
    {
      number: 2,
      icon: "🎤",
      title: "Audizione",
      description: "Fissiamo insieme una data per l'audizione. Niente panico, è solo per conoscerci e suonare insieme!"
    },
    {
      number: 3,
      icon: "🎺",
      title: "Entra in Banda",
      description: "Inizia a suonare con noi! Partecipa alle prove, ai concerti e diventa parte della nostra famiglia musicale."
    }
  ];

  const requirements = [
    {
      icon: "🎼",
      title: "Strumento Personale",
      description: "Essere in possesso del proprio strumento",
      note: "(Non obbligatorio per i percussionisti)"
    },
    {
      icon: "📖",
      title: "Lettura a Prima Vista",
      description: "Capacità di leggere uno spartito Grade 2 a prima vista"
    },
    {
      icon: "🎵",
      title: "Teoria Musicale",
      description: "Conoscenza di base della teoria musicale"
    },
    {
      icon: "❤️",
      title: "Passione Musicale",
      description: "Ma soprattutto... suonare con passione!",
      highlight: true
    }
  ];

  {/* Strumenti Ricercati 
    { name: "Clarinetto", icon: "🎵", urgent: true },
    */}

    
  const instruments: Instrument[] = [
    { name: "Clarinetto", icon: "", },
    { name: "Sassofono", icon: "", },
    { name: "Flauto", icon: "" },
    { name: "Percussioni", icon: "", },
    { name: "Tromba", icon: "" },
    { name: "Trombone", icon: "" },
    { name: "Tuba", icon: "", urgent: true },
    { name: "Corno", icon: "" },
    { name: "Eufonio", icon: "" },
    { name: "Oboe", icon: "" },
    { name: "Fagotto", icon: "" }
  ];

  return (
    <div className="bandista-page">
      {/* Hero Section */}
      <section className="bandista-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-particles">
            <div className="particle particle-1">♪</div>
            <div className="particle particle-2">♫</div>
            <div className="particle particle-3">♬</div>
            <div className="particle particle-4">♩</div>
            <div className="particle particle-5">♪</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🎺</span>
              <span>Unisciti a Noi</span>
            </div>
            <h1 className="hero-title">Diventa un Bandista</h1>
            <div className="title-decoration"></div>
            <p className="hero-subtitle">
              Hai sempre sognato di far parte di una vera banda musicale? 
              Suonare in piazza, emozionare il pubblico e vivere la musica insieme ad altri appassionati?
            </p>
            <p className="hero-cta-text">
              <strong>Questo è il momento perfetto per realizzare il tuo sogno!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Perché Unirti a Noi?</h2>
            <div className="title-decoration"></div>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎭</div>
              <h3 className="benefit-title">Concerti ed Eventi</h3>
              <p className="benefit-text">
                Esibisciti in concerti pubblici, eventi cittadini e manifestazioni importanti. 
                Porta la tua musica al pubblico!
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3 className="benefit-title">Comunità Musicale</h3>
              <p className="benefit-text">
                Entra a far parte di una famiglia di musicisti appassionati. 
                Condividi la tua passione e crea legami duraturi.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3 className="benefit-title">Crescita Artistica</h3>
              <p className="benefit-text">
                Migliora le tue capacità musicali suonando repertori vari e sfidanti 
                sotto la guida di maestri esperti.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎉</div>
              <h3 className="benefit-title">Tradizione Viva</h3>
              <p className="benefit-text">
                Mantieni viva la tradizione delle bande musicali italiane 
                e contribuisci alla cultura della tua città.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Come Entrare in Banda</h2>
            <div className="title-decoration"></div>
            <p className="section-subtitle">
              Tre semplici passi per iniziare la tua avventura musicale con noi
            </p>
          </div>

          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`step-card ${hoveredStep === index ? 'step-card-hovered' : ''}`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Requisiti</h2>
            <div className="title-decoration"></div>
            <p className="section-subtitle">
              Cosa ti serve per unirti alla banda? Ecco i requisiti fondamentali
            </p>
          </div>

          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className={`requirement-card ${req.highlight ? 'requirement-highlight' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="requirement-icon">{req.icon}</div>
                <h3 className="requirement-title">{req.title}</h3>
                <p className="requirement-description">{req.description}</p>
                {req.note && (
                  <span className="requirement-note">{req.note}</span>
                )}
                {req.highlight && (
                  <div className="highlight-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    Essenziale!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="instruments-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Strumenti Che Cerchiamo</h2>
            <div className="title-decoration"></div>
            <p className="section-subtitle">
              Suoni uno di questi strumenti? Abbiamo bisogno di te!
            </p>
          </div>

          <div className="instruments-grid">
            {instruments.map((instrument, index) => (
              <div 
                key={index}
                className={`instrument-tag ${instrument.urgent ? 'instrument-urgent' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="instrument-name">{instrument.name}</span>
                {instrument.urgent && (
                  <span className="urgent-badge">Ricerca Attiva</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-icon">🎵</div>
            <h2 className="cta-title">Pronto a Iniziare?</h2>
            <p className="cta-text">
              Non aspettare oltre! Compila il modulo di interesse e inizia il tuo percorso 
              per diventare parte della Banda Cittadina di Ravenna.
            </p>
            <p className="cta-subtext">
              Hai domande? Contattaci direttamente, saremo felici di rispondere a ogni tua curiosità!
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
                Compila il Modulo
              </a>
              <a 
                href="mailto:bandara@comune.ra.it"
                className="btn-secondary btn-large"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiventaUnBandista;