import React from 'react';
import './Consigliodirettivo.css';

interface Member {
  name: string;
  role: string;
  highlight?: boolean;
}

const ConsiglioDirettivo: React.FC = () => {
  const presidente: Member = {
    name: "Amedeo Zacchi",
    role: "Presidente",
    highlight: true
  };

  const consiglio: Member[] = [
    { name: "Andrea Pescosolido", role: "Vice Presidente" },
    { name: "Tonino Tomasi", role: "Tesoriere" },
    { name: "Gaetana Domanti", role: "Segretaria" },
    { name: "Stilyana Nikolova", role: "Consigliere / Scuola di Musica" }
  ];

  const revisori: Member[] = [
    { name: "Guido Casadio", role: "Sindaco Revisore / Divise" },
    { name: "Giovanni Casadei", role: "Sindaco Revisore" },
    { name: "Antonio Aldi", role: "Sindaco Revisore" }
  ];

  return (
    <div className="consiglio-page">
      {/* Hero Section */}
      <section className="consiglio-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="floating-note note-1">♪</div>
          <div className="floating-note note-2">♫</div>
          <div className="floating-note note-3">♬</div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🎩</span>
              <span>2024 - 2026</span>
            </div>
            <h1 className="hero-title">Consiglio Direttivo</h1>
            <div className="title-decoration"></div>
            <p className="hero-subtitle">
              In data <strong>25 Ottobre 2024</strong>, è stato eletto il nuovo consiglio direttivo.
            </p>
          </div>
        </div>
      </section>

      {/* Presidente Section */}
      <section className="presidente-section">
        <div className="container">
          <div className="presidente-card">
            <div className="presidente-crown">👑</div>
            <div className="presidente-content">
              <div className="presidente-badge">Nuovo Presidente Eletto</div>
              <h2 className="presidente-name">{presidente.name}</h2>
              <div className="presidente-divider"></div>
              <p className="presidente-role">{presidente.role}</p>
              <p className="presidente-bio">
                Un giovane trombonista che sta studiando al Conservatorio di Ravenna, 
                pronto a guidare la Banda Cittadina verso nuovi traguardi musicali.
              </p>
            </div>
            <div className="presidente-decoration">🎺</div>
          </div>
        </div>
      </section>

      {/* Consiglio Section */}
      <section className="members-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Membri del Consiglio</h2>
            <div className="title-decoration"></div>
          </div>

          <div className="members-grid">
            {consiglio.map((member, index) => (
              <div 
                key={index} 
                className="member-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="member-icon">
                  {index === 0 && "🤝"}
                  {index === 1 && "💰"}
                  {index === 2 && "📝"}
                  {index === 3 && "🎼"}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revisori Section */}
      <section className="revisori-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sindaci Revisori</h2>
            <div className="title-decoration"></div>
          </div>

          <div className="revisori-grid">
            {revisori.map((member, index) => (
              <div 
                key={index} 
                className="revisore-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="revisore-icon">⚖️</div>
                <h3 className="revisore-name">{member.name}</h3>
                <p className="revisore-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandate Info */}
      <section className="mandate-section">
        <div className="container">
          <div className="mandate-card">
            <div className="mandate-icon">📅</div>
            <h3 className="mandate-title">Mandato</h3>
            <p className="mandate-text">
              Il nuovo consiglio sarà in carica per il biennio
            </p>
            <div className="mandate-years">2024 / 2026</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsiglioDirettivo;