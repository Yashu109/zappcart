// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowRight, FaShoppingBasket, FaRegListAlt, FaClock } from 'react-icons/fa';
// import '../styles/Categories.css';

// // Detailed category data
// const meatCategories = [
//   { 
//     id: 1, 
//     name: "Chicken", 
//     image: "/api/placeholder/600/400?text=Chicken", 
//     description: "Antibiotic-free, farm-raised chicken cuts that are cleaned and ready to cook.",
//     popularItems: ["Boneless Breast", "Curry Cut", "Wings", "Drumsticks"],
//     tagline: "Farm Fresh Daily"
//   },
//   { 
//     id: 2, 
//     name: "Mutton", 
//     image: "/api/placeholder/600/400?text=Mutton", 
//     description: "Premium quality tender and juicy mutton for your special dishes.",
//     popularItems: ["Curry Cut", "Boneless", "Keema", "Biryani Cut"],
//     tagline: "Premium Cuts"
//   },
//   { 
//     id: 3, 
//     name: "Fish & Seafood", 
//     image: "/api/placeholder/600/400?text=Fish", 
//     description: "Freshly caught and cleaned fish and seafood options delivered to your home.",
//     popularItems: ["Rohu", "Pomfret", "Prawns", "Salmon"],
//     tagline: "Ocean Fresh"
//   },
//   { 
//     id: 4, 
//     name: "Prawns", 
//     image: "/api/placeholder/600/400?text=Prawns", 
//     description: "Juicy and succulent prawns that are perfect for curries, stir-fries, and grills.",
//     popularItems: ["Tiger Prawns", "Freshwater Prawns", "Shrimp", "King Prawns"],
//     tagline: "Daily Caught"
//   },
//   { 
//     id: 5, 
//     name: "Eggs", 
//     image: "/api/placeholder/600/400?text=Eggs", 
//     description: "Farm-fresh eggs from free-range hens that are naturally nutritious.",
//     popularItems: ["Brown Eggs", "White Eggs", "Quail Eggs", "Duck Eggs"],
//     tagline: "Farm Fresh"
//   },
//   { 
//     id: 6, 
//     name: "Ready to Cook", 
//     image: "/api/placeholder/600/400?text=Ready+To+Cook", 
//     description: "Pre-marinated and seasoned items that are ready to cook with minimal prep.",
//     popularItems: ["Chicken Tikka", "Fish Fry", "Mutton Kebab", "Tandoori Wings"],
//     tagline: "Just Heat & Eat"
//   },
// ];

// // Special collections
// const specialCollections = [
//   {
//     id: 1,
//     name: "BBQ Specials",
//     image: "/api/placeholder/600/300?text=BBQ+Specials",
//     description: "Premium cuts perfect for your grill and barbecue parties",
//     products: 12,
//   },
//   {
//     id: 2,
//     name: "Breakfast Protein",
//     image: "/api/placeholder/600/300?text=Breakfast+Protein",
//     description: "Start your day right with protein-rich breakfast options",
//     products: 8,
//   },
//   {
//     id: 3,
//     name: "Party Packs",
//     image: "/api/placeholder/600/300?text=Party+Packs",
//     description: "Value combos for gatherings and celebrations",
//     products: 10,
//   }
// ];

// const Categories = () => {
//   return (
//     <div className="categories-page">
//       <div className="categories-hero">
//         <div className="categories-hero-content">
//           <h1>Explore Fresh Categories</h1>
//           <p>Premium quality meat and seafood delivered to your doorstep</p>
//         </div>
//       </div>
      
//       <div className="categories-container">
//         {/* Features Banner */}
//         <div className="features-banner">
//           <div className="feature-item">
//             <FaShoppingBasket className="feature-icon" />
//             <div className="feature-content">
//               <h3>Premium Quality</h3>
//               <p>Sourced from certified farms</p>
//             </div>
//           </div>
          
//           <div className="feature-item">
//             <FaRegListAlt className="feature-icon" />
//             <div className="feature-content">
//               <h3>150+ Quality Checks</h3>
//               <p>For the best quality assurance</p>
//             </div>
//           </div>
          
//           <div className="feature-item">
//             <FaClock className="feature-icon" />
//             <div className="feature-content">
//               <h3>Express Delivery</h3>
//               <p>Same day delivery available</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Main Categories */}
//         <section className="main-categories">
//           <h2 className="section-title">
//             <span className="highlight">Premium</span> Categories
//           </h2>
          
//           <div className="categories-grid">
//             {meatCategories.map((category) => (
//               <div key={category.id} className="category-card">
//                 <div className="category-image-container">
//                   <img 
//                     src={category.image} 
//                     alt={category.name}
//                     className="category-image"
//                   />
//                   <div className="category-tag">{category.tagline}</div>
//                 </div>
                
//                 <div className="category-content">
//                   <h3 className="category-title">{category.name}</h3>
//                   <p className="category-description">{category.description}</p>
                  
//                   <div className="popular-items">
//                     <h4>Popular Items:</h4>
//                     <ul className="popular-items-list">
//                       {category.popularItems.map((item, index) => (
//                         <li key={index} className="popular-item">{item}</li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <Link to={`/shop?category=${category.name.toLowerCase()}`} className="shop-category-btn">
//                     Explore {category.name} <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
        
//         {/* Special Collections */}
//         <section className="special-collections">
//           <h2 className="section-title">
//             Special <span className="highlight">Collections</span>
//           </h2>
          
//           <div className="collections-grid">
//             {specialCollections.map(collection => (
//               <div key={collection.id} className="collection-card">
//                 <div className="collection-image-wrapper">
//                   <img 
//                     src={collection.image}
//                     alt={collection.name}
//                     className="collection-image"
//                   />
//                 </div>
                
//                 <div className="collection-content">
//                   <h3 className="collection-title">{collection.name}</h3>
//                   <p className="collection-description">{collection.description}</p>
//                   <div className="collection-products">{collection.products} Products</div>
                  
//                   <Link to={`/shop?collection=${collection.name.toLowerCase().replace(/\s+/g, '-')}`} className="view-collection-btn">
//                     View Collection
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
        
//         {/* Subscription Banner */}
//         <section className="subscription-banner">
//           <div className="subscription-content">
//             <h2>Subscribe & Save</h2>
//             <p>Get your favorite meat & seafood delivered weekly or monthly and save up to 15%</p>
//             <Link to="/subscription" className="subscribe-btn">
//               Explore Plans
//             </Link>
//           </div>
//           <div className="subscription-image">
//             <img src="/api/placeholder/400/300?text=Subscribe+And+Save" alt="Subscription" />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShoppingBasket, FaRegListAlt, FaClock } from 'react-icons/fa';
import WholeMutton from '../assets/Whole Mutton.jpg'
import FishSeafood from '../assets/Fish & Seafood.jpg'
import MuttonSelection from '../assets/Mutton Selection.jpg'
import wholefish from '../assets/whole fish.jpg'
import Subscription from '../assets/Subscription.png'
import WholeChicken from '../assets/Whole Chicken.jpg'
import '../styles/Categories.css';

// Detailed category data - only including chicken, mutton, and fish
const meatCategories = [
  { 
    id: 1, 
    name: "Chicken", 
    image: WholeChicken, 
    description: "Antibiotic-free, farm-raised chicken cuts that are cleaned and ready to cook.",
    popularItems: ["Boneless Breast", "Curry Cut", "Wings", "Drumsticks"],
    tagline: "Farm Fresh Daily"
  },
  { 
    id: 2, 
    name: "Mutton", 
    image: WholeMutton, 
    description: "Premium quality tender and juicy mutton for your special dishes.",
    popularItems: ["Curry Cut", "Boneless", "Keema", "Biryani Cut"],
    tagline: "Premium Cuts"
  },
  { 
    id: 3, 
    name: "Fish & Seafood", 
    image: FishSeafood, 
    description: "Freshly caught and cleaned fish and seafood options delivered to your home.",
    popularItems: ["Rohu", "Pomfret", "Prawns", "Salmon"],
    tagline: "Ocean Fresh"
  }
];

// Special collections - modified to focus on our three categories
const specialCollections = [
  {
    id: 1,
    name: "Chicken Specials",
    image: WholeChicken,
    description: "Premium chicken cuts for your everyday meals",
    products: 8,
  },
  {
    id: 2,
    name: "Mutton Selection",
    image: MuttonSelection,
    description: "High-quality mutton for special occasions",
    products: 6,
  },
  {
    id: 3,
    name: "Fresh Fish",
    image: wholefish,
    description: "Ocean-fresh fish and seafood options",
    products: 7,
  }
];

const Categories = () => {
  return (
    <div className="categories-page">
      <div className="categories-hero">
        <div className="categories-hero-content">
          <h1>Explore Fresh Categories</h1>
          <p>Premium quality meat and seafood delivered to your doorstep</p>
        </div>
      </div>
      
      <div className="categories-container">
        {/* Features Banner */}
        <div className="features-banner">
          <div className="feature-item">
            <FaShoppingBasket className="feature-icon" />
            <div className="feature-content">
              <h3>Premium Quality</h3>
              <p>Sourced from certified farms</p>
            </div>
          </div>
          
          <div className="feature-item">
            <FaRegListAlt className="feature-icon" />
            <div className="feature-content">
              <h3>150+ Quality Checks</h3>
              <p>For the best quality assurance</p>
            </div>
          </div>
          
          <div className="feature-item">
            <FaClock className="feature-icon" />
            <div className="feature-content">
              <h3>Express Delivery</h3>
              <p>Same day delivery available</p>
            </div>
          </div>
        </div>
        
        {/* Main Categories */}
        <section className="main-categories">
          <h2 className="section-title">
            <span className="highlight">Premium</span> Categories
          </h2>
          
          <div className="categories-grid">
            {meatCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image-container">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="category-image"
                  />
                  <div className="category-tag">{category.tagline}</div>
                </div>
                
                <div className="category-content">
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  
                  <div className="popular-items">
                    <h4>Popular Items:</h4>
                    <ul className="popular-items-list">
                      {category.popularItems.map((item, index) => (
                        <li key={index} className="popular-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={`/shop?category=${category.name.toLowerCase()}`} className="shop-category-btn">
                    Explore {category.name} <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Special Collections */}
        <section className="special-collections">
          <h2 className="section-title">
            Special <span className="highlight">Collections</span>
          </h2>
          
          <div className="collections-grid">
            {specialCollections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image-wrapper">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="collection-image"
                  />
                </div>
                
                <div className="collection-content">
                  <h3 className="collection-title">{collection.name}</h3>
                  <p className="collection-description">{collection.description}</p>
                  <div className="collection-products">{collection.products} Products</div>
                  
                  <Link to={`/shop?collection=${collection.name.toLowerCase().replace(/\s+/g, '-')}`} className="view-collection-btn">
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Subscription Banner */}
        <section className="subscription-banner">
          <div className="subscription-content">
            <h2>Subscribe & Save</h2>
            <p>Get your favorite meat & seafood delivered weekly or monthly and save up to 15%</p>
            <Link to="/subscription" className="subscribe-btn">
              Explore Plans
            </Link>
          </div>
          <div className="subscription-image">
            <img src={Subscription} alt="Subscription" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;