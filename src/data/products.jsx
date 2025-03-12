// // src/data/products.js

// export const products = [
//     {
//       id: 1,
//       name: 'Fresh Chicken Breast',
//       price: 299,
//       category: 'Meat & Poultry',
//       description: 'Farm fresh chicken breast, antibiotic-free',
//       image: '/api/placeholder/300/200?text=Fresh+Chicken',
//       rating: 4.5,
//       ratingCount: 128,
//       discount: 10,
//       inStock: true,
//       weight: '500g',
//       features: ['Antibiotic-free', 'Farm-raised']
//     },
//     {
//       id: 2,
//       name: 'Premium Mutton',
//       price: 899,
//       category: 'Meat & Poultry',
//       description: 'Grass-fed premium mutton cuts',
//       image: '/api/placeholder/300/200?text=Premium+Mutton',
//       rating: 4.3,
//       ratingCount: 89,
//       inStock: true,
//       weight: '1kg',
//       features: ['Grass-fed', 'Premium cuts']
//     },
//     {
//       id: 3,
//       name: 'Wild Caught Salmon',
//       price: 799,
//       category: 'Seafood',
//       description: 'Fresh Norwegian salmon fillet',
//       image: '/api/placeholder/300/200?text=Salmon',
//       rating: 4.7,
//       ratingCount: 156,
//       discount: 15,
//       inStock: true,
//       weight: '500g',
//       features: ['Wild-caught', 'Omega-3 rich']
//     },
//     {
//       id: 4,
//       name: 'Fresh Prawns',
//       price: 499,
//       category: 'Seafood',
//       description: 'Daily caught & cleaned prawns',
//       image: '/api/placeholder/300/200?text=Prawns',
//       rating: 4.4,
//       ratingCount: 95,
//       inStock: true,
//       weight: '250g',
//       features: ['Cleaned', 'Deveined']
//     },
//     {
//       id: 5,
//       name: 'Chicken Tikka Cut',
//       price: 349,
//       category: 'Ready to Cook',
//       description: 'Pre-cut pieces for tikka',
//       image: '/api/placeholder/300/200?text=Chicken+Tikka',
//       rating: 4.6,
//       ratingCount: 112,
//       inStock: true,
//       weight: '500g',
//       features: ['Pre-marinated', 'Ready to cook']
//     },
//     {
//       id: 6,
//       name: 'Marinated Fish',
//       price: 449,
//       category: 'Ready to Cook',
//       description: 'Spice-marinated fish pieces',
//       image: '/api/placeholder/300/200?text=Marinated+Fish',
//       rating: 4.2,
//       ratingCount: 78,
//       discount: 20,
//       inStock: true,
//       weight: '400g',
//       features: ['Spiced', 'Ready to cook']
//     },
//     {
//       id: 7,
//       name: 'Boneless Chicken',
//       price: 379,
//       category: 'Meat & Poultry',
//       description: 'Clean boneless chicken chunks',
//       image: '/api/placeholder/300/200?text=Boneless+Chicken',
//       rating: 4.8,
//       ratingCount: 203,
//       inStock: true,
//       weight: '500g',
//       features: ['Boneless', 'Premium quality']
//     },
//     {
//       id: 8,
//       name: 'Fish Curry Cut',
//       price: 299,
//       category: 'Seafood',
//       description: 'Perfect cuts for curry',
//       image: '/api/placeholder/300/200?text=Fish+Curry+Cut',
//       rating: 4.3,
//       ratingCount: 167,
//       discount: 5,
//       inStock: true,
//       weight: '500g',
//       features: ['Fresh', 'Curry cut']
//     }
//   ];
  
//   // Export categories separately if needed
//   export const categories = [
//     'Meat & Poultry',
//     'Seafood',
//     'Ready to Cook'
//   ];
  
//   // Export default for convenience
//   export default products;

// src/data/products.js

import FreshChickenBreast from '../assets/c-brest.jpg';
import BonelessCuts from '../assets/Boneless Cuts.jpg'
import ChickenDrumsticks from '../assets/Chicken Drumsticks.jpg';
import PrmiumMutton from '../assets/Premium Mutton.jpg'
import WildSalman from '../assets/Wild Caught Salmon.jpg'
import Prawn from '../assets/Fresh Prawn.jpg'
import FishCurryCut from '../assets/Fish Curry Cut.jpg'
import MuttonCurryCut from '../assets/Mutton Curry Cut.jpg'

export const products = [
  {
    id: 1,
    name: 'Fresh Chicken Breast',
    price: 299,
    category: 'Chicken',
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
    name: 'Premium Mutton',
    price: 899,
    category: 'Mutton',
    description: 'Grass-fed premium mutton cuts',
    image: PrmiumMutton,
    rating: 4.3,
    ratingCount: 89,
    inStock: true,
    weight: '1kg',
    features: ['Grass-fed', 'Premium cuts']
  },
  {
    id: 3,
    name: 'Wild Caught Salmon',
    price: 799,
    category: 'Fish & Seafood',
    description: 'Fresh Norwegian salmon fillet',
    image: WildSalman,
    rating: 4.7,
    ratingCount: 156,
    discount: 15,
    inStock: true,
    weight: '500g',
    features: ['Wild-caught', 'Omega-3 rich']
  },
  {
    id: 4,
    name: 'Fresh Prawns',
    price: 499,
    category: 'Fish & Seafood',
    description: 'Daily caught & cleaned prawns',
    image: Prawn,
    rating: 4.4,
    ratingCount: 95,
    inStock: true,
    weight: '250g',
    features: ['Cleaned', 'Deveined']
  },
  {
    id: 7,
    name: 'Boneless Chicken',
    price: 379,
    category: 'Chicken',
    description: 'Clean boneless chicken chunks',
    image: BonelessCuts,
    rating: 4.8,
    ratingCount: 203,
    inStock: true,
    weight: '500g',
    features: ['Boneless', 'Premium quality']
  },
  {
    id: 8,
    name: 'Fish Curry Cut',
    price: 299,
    category: 'Fish & Seafood',
    description: 'Perfect cuts for curry',
    image: FishCurryCut,
    rating: 4.3,
    ratingCount: 167,
    discount: 5,
    inStock: true,
    weight: '500g',
    features: ['Fresh', 'Curry cut']
  },
  {
    id: 9,
    name: 'Chicken Drumsticks',
    price: 329,
    category: 'Chicken',
    description: 'Juicy chicken drumsticks, perfect for grilling',
    image: ChickenDrumsticks,
    rating: 4.6,
    ratingCount: 125,
    inStock: true,
    weight: '500g',
    features: ['Fresh', 'Bone-in']
  },
  {
    id: 10,
    name: 'Mutton Curry Cut',
    price: 799,
    category: 'Mutton',
    description: 'Perfect cut pieces for your traditional curry',
    image: MuttonCurryCut,
    rating: 4.5,
    ratingCount: 92,
    discount: 8,
    inStock: true,
    weight: '500g',
    features: ['Bone-in', 'Fresh cut']
  }
];

// Export categories - only the ones we need
export const categories = [
  'Chicken',
  'Mutton',
  'Fish & Seafood'
];

// Export default for convenience
export default products;