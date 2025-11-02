import React, { useState } from 'react';
import './Eventi.css';
import { getAllEvents, getUpcomingEvents, getPastEvents } from '../events/Eventsdata';
import type { Event } from '../events/Eventsdata';

type FilterType = 'all' | 'upcoming' | 'past';

const Eventi: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const getFilteredEvents = (): Event[] => {
    switch(filter) {
      case 'upcoming':
        return getUpcomingEvents();
      case 'past':
        return getPastEvents();
      default:
        return getAllEvents();
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('it-IT', options);
  };

  const events: Event[] = getFilteredEvents();

  return (
    <div className="eventi-page no-select">
      {/* Hero Section */}
      <section className="eventi-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Concerti ed Eventi</h1>
            <div className="title-decoration"></div>
            <p className="hero-subtitle">
              Scopri tutti gli eventi della Banda Cittadina di Ravenna. 
              Concerti, saggi, parate, celebrazioni e molto altro!
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="eventi-filters">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'filter-btn-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span className="filter-icon">🎵</span>
              Tutti gli Eventi
            </button>
            <button 
              className={`filter-btn ${filter === 'upcoming' ? 'filter-btn-active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              <span className="filter-icon">📅</span>
              Prossimi Eventi
            </button>
            <button 
              className={`filter-btn ${filter === 'past' ? 'filter-btn-active' : ''}`}
              onClick={() => setFilter('past')}
            >
              <span className="filter-icon">🕐</span>
              Eventi Passati
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="eventi-grid-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
        <div className="container">
          <div className="events-grid">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className={`event-card ${event.status === 'past' ? 'event-card-past' : ''} ${event.featured ? 'event-card-featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="event-image-wrapper">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="event-image"
                  />
                  {event.status === 'past' && (
                    <div className="event-past-overlay">
                      <span className="past-label">Evento Concluso</span>
                    </div>
                  )}
                  {event.featured && event.status === 'upcoming' && (
                    <div className="event-featured-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      In Evidenza
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="event-content">
                  {/* Title */}
                  <h3 className="event-title">{event.title}</h3>

                  {/* Date & Time */}
                  <div className="event-info-row">
                    <div className="event-info-item">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="event-info-item">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="event-info-row">
                    <div className="event-info-item event-location">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="event-description">{event.description}</p>

                  {/* Price Badge */}
                  <div className="event-footer">
                    <div className={`event-price-badge ${event.price === 'gratuito' ? 'price-free' : 'price-paid'}`}>
                      {event.price === 'gratuito' ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 11L12 14L22 4M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16"/>
                          </svg>
                          Ingresso Gratuito
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {event.price}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {events.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🎵</div>
              <h3>Nessun evento trovato</h3>
              <p>Non ci sono eventi in questa categoria al momento.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Eventi;