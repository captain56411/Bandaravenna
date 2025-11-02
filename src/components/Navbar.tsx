import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Eventi', href: '/eventi' },
    { label: 'Storia della Banda', href: '/storia' },
    { label: 'La Nostra Scuola', href: '/scuola' },
    { label: 'Consiglio Direttivo', href: '/consiglio-direttivo' },
    { label: 'Diventa un Bandista', href: '/diventa-un-bandista' },
    { label: 'Accedi', href: 'https://auth.glissandoo.com/it/signin?return_to=https://app.glissandoo.com/?lang=en&error=error.auth.unauthenticated', isSpecial: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Gestione stato scroll per effetto glassmorphism
      setIsScrolled(window.scrollY > 20);
      
      // Calcolo progress bar
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo e Brand */}
          <a className="navbar-brand" href="/home">
  <div className="logo-container">
    <div className="logo-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19V6L21 3V16M9 19C9 20.105 7.105 21 5 21C2.895 21 1 20.105 1 19C1 17.895 2.895 17 5 17C7.105 17 9 17.895 9 19ZM21 16C21 17.105 19.105 18 17 18C14.895 18 13 17.105 13 16C13 14.895 14.895 14 17 14C19.105 14 21 14.895 21 16ZM9 10L21 7" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
    </div>
    <div className="brand-text">
      <span className="brand-title">Banda Cittadina</span>
      <span className="brand-subtitle">Ravenna</span>
    </div>
  </div>
</a>


          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  nav-link 
                  ${item.isSpecial ? 'nav-link-special' : ''}
                `}
                onClick={() => handleNavClick()}
              >
                <span className="nav-link-text">{item.label}</span>
                {item.isSpecial && (
                  <svg className="nav-link-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'mobile-menu-btn-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line hamburger-line-1"></span>
            <span className="hamburger-line hamburger-line-2"></span>
            <span className="hamburger-line hamburger-line-3"></span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="scroll-progress-bar">
          <div 
            className="scroll-progress-fill" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                mobile-nav-link 
                ${item.isSpecial ? 'mobile-nav-link-special' : ''}
              `}
              onClick={() => handleNavClick()}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
              {item.isSpecial && (
                <svg className="mobile-nav-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;