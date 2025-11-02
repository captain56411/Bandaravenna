// ========================================
// EVENTI DELLA BANDA CITTADINA DI RAVENNA
// ========================================

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  description: string;
  status: 'upcoming' | 'past';
  featured: boolean;
}

export const events: Event[] = [
  // EVENTI FUTURI
  {
    id: 1,
    title: "Concerto di Natale 2025",
    date: "2025-12-22",
    time: "21:00",
    location: "Teatro Alighieri, Ravenna",
    image: "../assets/photo_conerts/natale2025.jpg",
    price: "gratuito",
    description: "Il tradizionale concerto natalizio della Banda Cittadina con un repertorio di brani classici e moderni per celebrare le festività.",
    status: "upcoming",
    featured: true
  },
  {
    id: 2,
    title: "Commemorazione davanti al monumento dei caduti",
    date: "2025-11-04",
    time: "9:00",
    location: "Viale Farini, Ravenna",
    image: "../assets/photo_conerts/natale2025.jpg",
    price: "gratuito",
    description: "Il 4 novembre 1918 segna la fine della Prima Guerra Mondiale per l’Italia, con la firma dell’armistizio di Villa Giusti tra l’Italia e l’Impero Austro-Ungarico",
    status: "upcoming",
    featured: false
  },

  // EVENTI PASSATI
  {
    id: 3,
    title: "Concerto con Sonia Davis",
    date: "2025-10-25",
    time: "20:45",
    location: "Teatro Monti Alfonsine",
    image: "../assets/photo_conerts/natale2025.jpg",
    price: "€ 15",
    description: "Sonia Davis ha cantato con la nostra banda in un evento speciale che ha unito talento vocale e musica strumentale.",
    status: "past",
    featured: false
  },
];

// Funzioni helper per filtrare gli eventi

export const getUpcomingEvents = (): Event[] => {
  return events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = (): Event[] => {
  return events
    .filter(event => event.status === 'past')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getFeaturedEvents = (): Event[] => {
  return events
    .filter(event => event.featured && event.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getAllEvents = (): Event[] => {
  return events.sort((a, b) => {
    // Eventi futuri per primi (dal più vicino al più lontano)
    if (a.status === 'upcoming' && b.status === 'past') return -1;
    if (a.status === 'past' && b.status === 'upcoming') return 1;
    
    // Se entrambi futuri o entrambi passati, ordina per data
    if (a.status === 'upcoming') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });
};

export default events;