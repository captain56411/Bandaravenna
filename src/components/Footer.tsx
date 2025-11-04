import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shape footer-shape-1"></div>
        <div className="footer-shape footer-shape-2"></div>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          {/* Logo e Descrizione */}
          <div className="footer-section footer-about no-select">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19V6L21 3V16M9 19C9 20.105 7.105 21 5 21C2.895 21 1 20.105 1 19C1 17.895 2.895 17 5 17C7.105 17 9 17.895 9 19ZM21 16C21 17.105 19.105 18 17 18C14.895 18 13 17.105 13 16C13 14.895 14.895 14 17 14C19.105 14 21 14.895 21 16ZM9 10L21 7" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="footer-logo-text">
                <h3>Banda Ravenna</h3>
                <p>Banda Cittadina di Ravenna</p>
              </div>
            </div>
            <p className="footer-description">
              Dal 1797 portiamo avanti la tradizione musicale bandistica, 
              unendo generazioni attraverso la passione per la musica.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/p/Banda-musicale-cittadina-di-Ravenna-100063171042805/" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/banda_ravenna/" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@yurispadaro9522" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="mailto:bandara@comune.ra.it" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Rapidi */}
          <div className="footer-section">
            <h4 className="footer-title">Link Rapidi</h4>
            <ul className="footer-links">
              <li><a href="/#chi-siamo">Chi Siamo</a></li>
              <li><a href="/storia">La Nostra Storia</a></li>
              <li><a href="/scuola">Scuola di Musica</a></li>
              <li><a href="/#repertorio">Repertorio</a></li>
              <li><a href="/eventi">Eventi</a></li>
              <li><a href="/#galleria">Galleria</a></li>
            </ul>
          </div>

          {/* Servizi */}
          <div className="footer-section">
            <h4 className="footer-title">Servizi</h4>
            <ul className="footer-links">
              <li><a href="/scuola#unisciti">Lezioni Private</a></li>
              <li><a href="/diventa-un-bandista">Diventa Bandista</a></li>
              <li><a href="/#prenota">Prenota la Banda</a></li>
              <li><a href="/#eventi">Concerti</a></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="footer-section">
            <h4 className="footer-title">Contatti</h4>
            <ul className="footer-contacts">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a
                  href="https://maps.app.goo.gl/H5vhnB2qnGT5TyB87"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none' }}
                >
                  <span> Largo Firenze presso Palazzo dei Congressi,<br/>48122 Ravenna (RA)</span>
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+39 347 516 8017</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>bandara@comune.ra.it</span>
              </li>
              {/* Orari di Apertura 
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Lun-Ven: 15:00 - 20:00<br/>Sab: 9:00 - 13:00</span>
              </li>
              */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-container">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © {currentYear} Banda Cittadina di Ravenna. Tutti i diritti riservati.
              </p>
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="#cookie">Cookie Policy</a>
                <span className="separator">•</span>
                <a href="#termini">Termini e Condizioni</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  );
}