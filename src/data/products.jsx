// src/data/products.js

import FreshChickenBreast from '../assets/c-brest.jpg';
import ChickenThigh from '../assets/Chicken Thigh - Boneless.jpg';
import WholeChicken from '../assets/Whole Chicken.jpg';
import ChickenCurryCut from '../assets/Chicken Curry Cut.jpg';
import ChickenTikkaCut from '../assets/Chicken Tikka Cut.jpg';
import TandooriChickenWings from '../assets/Tandoori Chicken Wings.jpg';
import ChickenMince from '../assets/Chicken Mince.jpg';
import ChickenDrumsticks from '../assets/Chicken Drumsticks.jpg';
import ChickenLollipop from '../assets/Chicken Lollipop.jpg';
import OrganicWholeChicken from '../assets/Organic Whole Chicken.jpg';

export const products = [
  {
    id: 1,
    name: 'Fresh Chicken Breast',
    price: 299,
    category: 'Boneless Cuts',
    description: 'Farm fresh chicken breast, antibiotic-free',
    image: FreshChickenBreast,
    rating: 4.5,
    ratingCount: 128,
    discount: 10,
    inStock: true,
    weight: '500g',
    features: ['Antibiotic-free', 'Farm-raised']
  },
  {
    id: 2,
    name: 'Chicken Thigh - Boneless',
    price: 349,
    category: 'Boneless Cuts',
    description: 'Juicy boneless chicken thighs, perfect for grilling',
    image: ChickenThigh,
    rating: 4.3,
    ratingCount: 89,
    inStock: true,
    weight: '500g',
    features: ['Boneless', 'Premium cuts']
  },
  {
    id: 3,
    name: 'Whole Chicken',
    price: 399,
    category: 'Whole Chicken',
    description: 'Freshly processed whole chicken with skin',
    image: WholeChicken,
    rating: 4.7,
    ratingCount: 156,
    discount: 15,
    inStock: true,
    weight: '1kg',
    features: ['Farm-fresh', 'Cleaned']
  },
  {
    id: 4,
    name: 'Chicken Curry Cut',
    price: 249,
    category: 'Curry Cuts',
    description: 'Bone-in chicken pieces perfect for curries',
    image: ChickenCurryCut,
    rating: 4.4,
    ratingCount: 95,
    inStock: true,
    weight: '500g',
    features: ['Bone-in', 'Mixed pieces']
  },
  {
    id: 5,
    name: 'Chicken Tikka Cut',
    price: 349,
    category: 'Marinated',
    description: 'Pre-cut and marinated chicken for tikka',
    image: ChickenTikkaCut,
    rating: 4.6,
    ratingCount: 112,
    inStock: true,
    weight: '500g',
    features: ['Pre-marinated', 'Ready to cook']
  },
  {
    id: 6,
    name: 'Tandoori Chicken Wings',
    price: 299,
    category: 'Marinated',
    description: 'Spice-marinated chicken wings ready to cook',
    image: TandooriChickenWings,
    rating: 4.2,
    ratingCount: 78,
    discount: 20,
    inStock: true,
    weight: '400g',
    features: ['Spiced', 'Ready to cook']
  },
  {
    id: 7,
    name: 'Chicken Mince',
    price: 379,
    category: 'Mince & Keema',
    description: 'Freshly minced chicken for various preparations',
    image: ChickenMince,
    rating: 4.8,
    ratingCount: 203,
    inStock: true,
    weight: '500g',
    features: ['Low fat', 'Versatile']
  },
  {
    id: 8,
    name: 'Chicken Drumsticks',
    price: 299,
    category: 'Bone-in Cuts',
    description: 'Juicy chicken drumsticks for roasting',
    image: ChickenDrumsticks,
    rating: 4.3,
    ratingCount: 167,
    discount: 5,
    inStock: true,
    weight: '500g',
    features: ['Fresh', 'Bone-in']
  },
  {
    id: 9,
    name: 'Chicken Lollipop',
    price: 329,
    category: 'Bone-in Cuts',
    description: 'Classic chicken lollipop cut, ready to cook',
    image: ChickenLollipop,
    rating: 4.5,
    ratingCount: 142,
    inStock: true,
    weight: '400g',
    features: ['Party favorite', 'Easy to cook']
  },
  {
    id: 10,
    name: 'Organic Whole Chicken',
    price: 599,
    category: 'Whole Chicken',
    description: 'Organically raised free-range whole chicken',
    image: OrganicWholeChicken,
    rating: 4.9,
    ratingCount: 89,
    inStock: true,
    weight: '1.2kg',
    features: ['Organic', 'Free-range', 'No antibiotics']
  }
];

// Export categories separately if needed
export const categories = [
  'Boneless Cuts',
  'Bone-in Cuts',
  'Whole Chicken',
  'Curry Cuts',
  'Marinated',
  'Mince & Keema'
];

// Export default for convenience
export default products;