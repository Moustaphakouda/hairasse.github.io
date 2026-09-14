export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  category: 'Coiffure' | 'Couleur' | 'Soins' | 'Mariage';
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: boolean;
}

export const services: Service[] = [
  {
    id: 'coupe-femme',
    name: 'Coupe Femme',
    description:
      'Une coupe sur-mesure adaptée à votre visage, votre style et votre personnalité. Shampoing, coupe et brushing inclus.',
    price: 'À partir de 45€',
    duration: '1h',
    icon: 'Scissors',
    image: 'https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coiffure',
  },
  {
    id: 'couleur-balayage',
    name: 'Balayage & Ombré',
    description:
      'Un effet soleil naturel et subtil. Le balayage apporte luminosité et profondeur pour un rendu ensoleillé toute l\'année.',
    price: 'À partir de 85€',
    duration: '2h30',
    icon: 'Palette',
    image: 'https://images.pexels.com/photos/4981476/pexels-photo-4981476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Couleur',
  },
  {
    id: 'coloration',
    name: 'Coloration & Mèches',
    description:
      'Couleur uniforme ou jeux de mèches pour illuminer votre chevelure. Nous utilisons des produits doux et respectueux du cheveu.',
    price: 'À partir de 65€',
    duration: '2h',
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Couleur',
  },
  {
    id: 'soin-profond',
    name: 'Soin Profond Japonais',
    description:
      'Traitement intensif qui répare, nourrit et fait briller vos cheveux de l\'intérieur. Idéal pour cheveux secs ou abîmés.',
    price: 'À partir de 55€',
    duration: '1h',
    icon: 'Droplet',
    image: 'https://images.pexels.com/photos/8834043/pexels-photo-8834043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Soins',
  },
  {
    id: 'lissage',
    name: 'Lissage Brésilien',
    description:
      'Un lissage durable qui discipline les frisottis et apporte brillance extrême. Cheveux lisses, soyeux et faciles à coiffer.',
    price: 'À partir de 120€',
    duration: '3h',
    icon: 'Wind',
    image: 'https://images.pexels.com/photos/5368632/pexels-photo-5368632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Soins',
  },
  {
    id: 'coiffure-mariage',
    name: 'Coiffure de Mariage',
    description:
      'Le jour de votre mariage mérite une coiffure d\'exception. Essai préalable et réalisation le jour J pour une journée inoubliable.',
    price: 'À partir de 150€',
    duration: '2h',
    icon: 'Crown',
    image: 'https://images.pexels.com/photos/16976882/pexels-photo-16976882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Mariage',
  },
  {
    id: 'chignon',
    name: 'Chignons & Updo',
    description:
      'Pour vos événements, soirées et cérémonies. Des chignons élégants et créatifs qui subliment votre tenue.',
    price: 'À partir de 60€',
    duration: '1h15',
    icon: 'Flower2',
    image: 'https://images.pexels.com/photos/19163430/pexels-photo-19163430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coiffure',
  },
  {
    id: 'brushing',
    name: 'Brushing & Mise en beauté',
    description:
      'Un brushing parfait pour une finition impeccable. Volume, lisseur ou ondulations selon vos envies.',
    price: 'À partir de 35€',
    duration: '45min',
    icon: 'Wind',
    image: 'https://images.pexels.com/photos/8834111/pexels-photo-8834111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coiffure',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Sophie Marchand',
    date: 'Septembre 2026',
    rating: 5,
    comment:
      'Un salon absolument magnifique. J\'ai fait un balayage et le résultat dépasse mes attentes. L\'accueil est chaleureux et le cadre élégant. Je recommande à 100% !',
    service: 'Balayage & Ombré',
    avatar: 'https://images.pexels.com/photos/819105/pexels-photo-819105.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r2',
    name: 'Claire Dubois',
    date: 'Août 2026',
    rating: 5,
    comment:
      'J\'y suis allée pour ma coiffure de mariage et tout était parfait. L\'essai, les conseils, et le jour J un vrai rêve. Merci pour cette journée inoubliable !',
    service: 'Coiffure de Mariage',
    avatar: 'https://images.pexels.com/photos/4450100/pexels-photo-4450100.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r3',
    name: 'Nadia Benali',
    date: 'Août 2026',
    rating: 5,
    comment:
      'Le soin profond japonais a transformé mes cheveux. Ils sont doux, brillants et revitalisés. Le cadre est apaisant, on se sent comme en spa.',
    service: 'Soin Profond Japonais',
    avatar: 'https://images.pexels.com/photos/10786858/pexels-photo-10786858.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r4',
    name: 'Émilie Rousseau',
    date: 'Juillet 2026',
    rating: 5,
    comment:
      'Le lissage brésilien a changé ma vie ! Mes cheveux sont enfin disciplinés et brillants. L\'équipe est professionnelle et à l\'écoute. Un sans-faute.',
    service: 'Lissage Brésilien',
    avatar: 'https://images.pexels.com/photos/23092165/pexels-photo-23092165.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r5',
    name: 'Fatima Zahra',
    date: 'Juillet 2026',
    rating: 5,
    comment:
      'Le meilleur salon de la ville ! Toujours un accueil chaleureux et des conseils personnalisés. Mes couleurs sont toujours impeccables. Fidèle depuis 2 ans.',
    service: 'Coloration & Mèches',
    avatar: 'https://images.pexels.com/photos/8727573/pexels-photo-8727573.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r6',
    name: 'Laura Petit',
    date: 'Juin 2026',
    rating: 5,
    comment:
      'Un chignon magnifique pour la soirée de gala. Tout le monde m\'a complimentée ! L\'artiste a su comprendre exactement ce que je voulais. Bravo !',
    service: 'Chignons & Updo',
    avatar: 'https://images.pexels.com/photos/11106825/pexels-photo-11106825.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Balayage Soleil',
    category: 'Couleur',
    image: 'https://images.pexels.com/photos/28833615/pexels-photo-28833615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: true,
  },
  {
    id: 'g2',
    title: 'Chignon Élégant',
    category: 'Coiffure',
    image: 'https://images.pexels.com/photos/19163430/pexels-photo-19163430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'g3',
    title: 'Tresses Sophistiquées',
    category: 'Coiffure',
    image: 'https://images.pexels.com/photos/2399536/pexels-photo-2399536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'g4',
    title: 'Coiffure Mariage',
    category: 'Mariage',
    image: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: true,
  },
  {
    id: 'g5',
    title: 'Coloration Éclat',
    category: 'Couleur',
    image: 'https://images.pexels.com/photos/3993323/pexels-photo-3993323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'g6',
    title: 'Updo Cérémonie',
    category: 'Mariage',
    image: 'https://images.pexels.com/photos/39142946/pexels-photo-39142946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'g7',
    title: 'Tresses Florales',
    category: 'Mariage',
    image: 'https://images.pexels.com/photos/11652342/pexels-photo-11652342.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'g8',
    title: 'Élégance Naturelle',
    category: 'Coiffure',
    image: 'https://images.pexels.com/photos/15957842/pexels-photo-15957842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const salonInfo = {
  name: 'Élégance Or',
  tagline: 'Coiffure Féminine de Prestige',
  address: '12 Avenue des Champs-Élysées, 75008 Paris',
  phone: '+33 1 42 65 89 90',
  email: 'contact@elegance-or.fr',
  hours: [
    { day: 'Lundi — Vendredi', time: '09:00 — 19:00' },
    { day: 'Samedi', time: '09:00 — 18:00' },
    { day: 'Dimanche', time: 'Fermé' },
  ],
  social: {
    instagram: '@elegance.or',
    facebook: 'Salon Élégance Or',
    tiktok: '@elegance.or',
  },
};

export const heroImages = {
  primary: 'https://images.pexels.com/photos/7823407/pexels-photo-7823407.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  secondary: 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  tertiary: 'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
};

export const aboutImage = 'https://images.pexels.com/photos/35844833/pexels-photo-35844833.png?auto=compress&cs=tinysrgb&h=1000&w=800';
