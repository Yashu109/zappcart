import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShoppingBasket, FaRegListAlt, FaClock } from 'react-icons/fa';
import '../styles/Categories.css';
import PartyPlatters from '../assets/Party Platters.jpg'
import ProteinPack from '../assets/Protein Pack.jpg'
import ChickenBBQSpecials from '../assets/Chicken BBQ Specials.jpg'
import BonelessCuts from '../assets/Boneless Cuts.jpg'
import BoneinCuts from '../assets/Bone-in Cuts.jpg'
import WholeChicken from '../assets/Whole Chicken.jpg'
import ChickenCurryCut from '../assets/Chicken Curry Cut.jpg'
import ChickenMince from '../assets/Chicken Mince.jpg'
import Marinated from '../assets/Marinated.jpg'

// Updated chicken-focused category data
const chickenCategories = [
  { 
    id: 1, 
    name: "Boneless Cuts", 
    image:BonelessCuts, 
    description: "Premium boneless chicken cuts that are tender and versatile.",
    popularItems: ["Chicken Breast", "Chicken Thigh", "Chicken Cubes", "Chicken Strips"],
    tagline: "Lean & Tender"
  },
  { 
    id: 2, 
    name: "Bone-in Cuts", 
    image: BoneinCuts, 
    description: "Juicy bone-in chicken pieces for flavorful dishes.",
    popularItems: ["Drumsticks", "Wings", "Lollipop", "Leg Quarters"],
    tagline: "Extra Juicy"
  },
  { 
    id: 3, 
    name: "Whole Chicken", 
    image: WholeChicken, 
    description: "Farm-fresh whole chickens, perfect for roasting.",
    popularItems: ["Regular Whole Chicken", "Organic Whole Chicken", "Skinless Whole Chicken", "Premium Broiler"],
    tagline: "Farm Fresh"
  },
  { 
    id: 4, 
    name: "Curry Cuts", 
    image:ChickenCurryCut, 
    description: "Mixed chicken pieces ideal for curries and stews.",
    popularItems: ["Small Pieces", "Medium Pieces", "Large Pieces", "Biryani Cut"],
    tagline: "Perfect for Curries"
  },
  { 
    id: 5, 
    name: "Marinated", 
    image: Marinated, 
    description: "Pre-marinated chicken in various delicious flavors.",
    popularItems: ["Tandoori", "Achari", "Malai", "Pepper Garlic"],
    tagline: "Ready to Cook"
  },
  { 
    id: 6, 
    name: "Mince & Keema", 
    image: ChickenMince, 
    description: "Freshly prepared chicken mince for versatile cooking.",
    popularItems: ["Regular Mince", "Lean Mince", "Keema", "Meatball Mix"],
    tagline: "Versatile Option"
  },
];

// Special collections focused on chicken
const specialCollections = [
  {
    id: 1,
    name: "Chicken BBQ Specials",
    image: ChickenBBQSpecials,
    description: "Premium cuts perfect for your grill and barbecue",
    products: 8,
  },
  {
    id: 2,
    name: "Protein Pack",
    image: ProteinPack,
    description: "High-protein chicken options for fitness enthusiasts",
    products: 6,
  },
  {
    id: 3,
    name: "Party Platters",
    image: PartyPlatters,
    description: "Assorted chicken platters for gatherings and celebrations",
    products: 5,
  }
];

const Categories = () => {
  return (
    <div className="categories-page">
      <div className="categories-hero">
        <div className="categories-hero-content">
          <h1>Explore Fresh Chicken Categories</h1>
          <p>Premium quality chicken delivered to your doorstep</p>
        </div>
      </div>
      
      <div className="categories-container">
        {/* Features Banner */}
        <div className="features-banner">
          <div className="feature-item">
            <FaShoppingBasket className="feature-icon" />
            <div className="feature-content">
              <h3>Premium Quality</h3>
              <p>Sourced from certified poultry farms</p>
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
            <span className="highlight">Premium</span> Chicken Categories
          </h2>
          
          <div className="categories-grid">
            {chickenCategories.map((category) => (
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
                  
                  <Link to={`/shop?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="shop-category-btn">
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
            <p>Get your favorite chicken products delivered weekly or monthly and save up to 15%</p>
            <Link to="/subscription" className="subscribe-btn">
              Explore Plans
            </Link>
          </div>
          <div className="subscription-image">
            <img src="/api/placeholder/400/300?text=Fresh+Chicken+Subscription" alt="Subscription" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;