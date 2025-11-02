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
    title: "Concerto di Natale 2024",
    date: "2024-12-20",
    time: "20:30",
    location: "Teatro Alighieri, Ravenna",
    image: "/img/events/concerto-natale.jpg",
    price: "gratuito",
    description: "Il tradizionale concerto natalizio della Banda Cittadina con un repertorio di brani classici e moderni per celebrare le festività.",
    status: "upcoming",
    featured: false
  },
  {
    id: 2,
    title: "Festa della Primavera",
    date: "2025-03-21",
    time: "15:00",
    location: "Piazza del Popolo, Ravenna",
    image: "/img/events/festa-primavera.jpg",
    price: "gratuito",
    description: "Celebriamo l'arrivo della primavera con un concerto all'aperto in piazza. Musica, allegria e tradizione!",
    status: "upcoming",
    featured: false
  },
  {
    id: 3,
    title: "Saggio della Scuola di Musica",
    date: "2025-05-15",
    time: "18:00",
    location: "Auditorium Comunale",
    image: "/img/events/saggio-scuola.jpg",
    price: "5€",
    description: "Gli studenti della nostra scuola di musica si esibiscono in un emozionante saggio finale. Venite a sostenerli!",
    status: "upcoming",
    featured: false
  },
  {
    id: 4,
    title: "Festival delle Bande Romagnole",
    date: "2025-06-10",
    time: "17:00",
    location: "Giardini Pubblici, Ravenna",
    image: "/img/events/festival-bande.jpg",
    price: "gratuito",
    description: "Un grande raduno di bande musicali della Romagna per una giornata di musica e condivisione culturale.",
    status: "upcoming",
    featured: false
  },
  {
    id: 5,
    title: "Concerto d'Estate",
    date: "2025-07-20",
    time: "21:00",
    location: "Rocca Brancaleone",
    image: "/img/events/concerto-estate.jpg",
    price: "5€",
    description: "Una magica serata estiva con un repertorio coinvolgente che spazia dalla musica classica al pop.",
    status: "upcoming",
    featured: false
  },

  // EVENTI PASSATI
  {
    id: 6,
    title: "Concerto di Santa Cecilia 2024",
    date: "2024-11-22",
    time: "20:30",
    location: "Basilica di San Vitale",
    image: "/img/events/santa-cecilia.jpg",
    price: "gratuito",
    description: "Celebrazione della patrona dei musicisti con un concerto sacro nella splendida cornice della Basilica di San Vitale.",
    status: "past",
    featured: false
  },
  {
    id: 7,
    title: "Festa della Repubblica",
    date: "2024-06-02",
    time: "10:00",
    location: "Piazza del Popolo, Ravenna",
    image: "/img/events/festa-repubblica.jpg",
    price: "gratuito",
    description: "Esibizione della banda in occasione della Festa della Repubblica Italiana con brani patriottici e tradizionali.",
    status: "past",
    featured: false
  },
  {
    id: 8,
    title: "Concerto di Pasqua 2024",
    date: "2024-03-31",
    time: "18:00",
    location: "Duomo di Ravenna",
    image: "/img/events/concerto-pasqua.jpg",
    price: "gratuito",
    description: "Un intenso concerto di musica sacra per celebrare la Pasqua nella suggestiva atmosfera del Duomo.",
    status: "past",
    featured: false
  },
  {
    id: 9,
    title: "Carnevale in Musica 2024",
    date: "2024-02-11",
    time: "15:30",
    location: "Centro Storico, Ravenna",
    image: "/img/events/carnevale.jpg",
    price: "gratuito",
    description: "La banda ha animato il corteo di Carnevale con brani allegri e coinvolgenti. Grande partecipazione di pubblico!",
    status: "past",
    featured: false
  },
  {
    id: 10,
    title: "Concerto di Capodanno 2024",
    date: "2024-01-01",
    time: "17:00",
    location: "Teatro Rasi",
    image: "/img/events/capodanno.jpg",
    price: "15€",
    description: "Iniziato il nuovo anno con un emozionante concerto ricco di energia e brani celebri della tradizione musicale.",
    status: "past",
    featured: false
  }
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