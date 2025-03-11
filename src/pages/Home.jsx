// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FaArrowRight, 
//   FaShieldAlt, 
//   FaClock, 
//   FaLeaf, 
//   FaCheckCircle,
//   FaMedal,
//   FaTruck
// } from 'react-icons/fa';
// import Banner from '../components/Banner';
// import ProductCard from '../components/ProductCard';
// import { products } from '../data/products';
// import '../styles/Home.css';

// const Home = () => {
//   // Filter products for featured section
//   const featuredProducts = products.slice(0, 4);
  
//   // Categories data - chicken focused
//   const categories = [
//     {
//       title: "Boneless Cuts",
//       image: "/api/placeholder/400/300?text=Boneless+Cuts",
//       items: ["Chicken Breast", "Chicken Thigh", "Chicken Strips", "Chicken Cubes", "Chicken Tenders"]
//     },
//     {
//       title: "Bone-in Cuts",
//       image: "/api/placeholder/400/300?text=Bone-in+Cuts",
//       items: ["Drumsticks", "Wings", "Lollipop", "Leg Quarters", "Thighs"]
//     },
//     {
//       title: "Whole Chicken",
//       image: "/api/placeholder/400/300?text=Whole+Chicken",
//       items: ["Regular Chicken", "Organic Chicken", "Free-range Chicken", "Broiler Chicken"]
//     },
//     {
//       title: "Marinated",
//       image: "/api/placeholder/400/300?text=Marinated+Chicken",
//       items: ["Tandoori", "Herb & Garlic", "Peri Peri", "BBQ", "Lemon Pepper"]
//     }
//   ];
  
//   // Premium selections data
//   const premiumSelections = [
//     {
//       name: "Organic Free-Range Chicken",
//       price: 599,
//       image: "/api/placeholder/500/300?text=Organic+Chicken",
//       description: "Naturally raised free-range chicken with no antibiotics",
//       origin: "Local Farms"
//     },
//     {
//       name: "Premium Corn-Fed Chicken",
//       price: 499,
//       image: "/api/placeholder/500/300?text=Corn-Fed+Chicken",
//       description: "Premium quality corn-fed chicken with rich flavor",
//       origin: "Specialty Farms"
//     },
//     {
//       name: "Heritage Breed Chicken",
//       price: 699,
//       image: "/api/placeholder/500/300?text=Heritage+Chicken",
//       description: "Rare heritage breed chicken for exceptional taste",
//       origin: "Artisanal Farms"
//     }
//   ];
  
//   // Value combo packs
//   const comboPacks = [
//     {
//       name: "Weekend BBQ Pack",
//       items: "Chicken Wings + Drumsticks + Boneless Breasts",
//       price: 699,
//       originalPrice: 899,
//       image: "/api/placeholder/400/300?text=BBQ+Pack",
//       savings: "Save ₹200"
//     },
//     {
//       name: "Family Feast Pack",
//       items: "Whole Chicken + Curry Cut + Boneless Cubes",
//       price: 999,
//       originalPrice: 1299,
//       image: "/api/placeholder/400/300?text=Feast+Pack",
//       savings: "Save ₹300"
//     }
//   ];
  
//   // Quality guarantee features
//   const qualityFeatures = [
//     {
//       icon: <FaShieldAlt />,
//       title: "Premium Quality",
//       description: "Sourced from certified poultry farms"
//     },
//     {
//       icon: <FaLeaf />,
//       title: "Antibiotic-Free",
//       description: "No added hormones or antibiotics"
//     },
//     {
//       icon: <FaClock />,
//       title: "Farm to Home",
//       description: "Delivered fresh within 24 hours"
//     },
//     {
//       icon: <FaTruck />,
//       title: "Express Delivery",
//       description: "Same day delivery available"
//     }
//   ];
  
//   // Customer testimonials
//   const testimonials = [
//     {
//       name: "Priya S.",
//       rating: 5,
//       text: "The quality of chicken is exceptional! I've been ordering for 6 months now and have never been disappointed. The chicken is always fresh and the delivery is prompt.",
//       image: "/api/placeholder/60/60?text=P",
//       date: "3 weeks ago"
//     },
//     {
//       name: "Rajesh K.",
//       rating: 5,
//       text: "Best chicken in town. Their marinated options save me so much time in the kitchen. The packaging is excellent and the delivery is always on time.",
//       image: "/api/placeholder/60/60?text=R",
//       date: "1 month ago"
//     },
//     {
//       name: "Ananya M.",
//       rating: 4,
//       text: "Great variety of chicken cuts and excellent customer service. The boneless chicken breast is superior to what I get from local markets. Highly recommend!",
//       image: "/api/placeholder/60/60?text=A",
//       date: "2 months ago"
//     }
//   ];

//   return (
//     <div className="home-page">
//       {/* Main Banner/Slider */}
//       <Banner />
      
//       {/* Quality Guarantees */}
//       <section className="quality-guarantees">
//         <div className="container">
//           <div className="guarantees-grid">
//             {qualityFeatures.map((feature, index) => (
//               <div key={index} className="guarantee-card">
//                 <div className="guarantee-icon">
//                   {feature.icon}
//                 </div>
//                 <div className="guarantee-content">
//                   <h3>{feature.title}</h3>
//                   <p>{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Category Showcase */}
//       <section className="category-showcase">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Shop by Chicken Type</h2>
//             <Link to="/categories" className="view-all">
//               View All Categories <FaArrowRight />
//             </Link>
//           </div>
          
//           <div className="categories-grid">
//             {categories.map((category, index) => (
//               <div key={index} className="category-card">
//                 <div className="category-image">
//                   <img src={category.image} alt={category.title} />
//                 </div>
//                 <div className="category-content">
//                   <h3>{category.title}</h3>
//                   <ul className="category-items">
//                     {category.items.map((item, idx) => (
//                       <li key={idx}>
//                         <FaCheckCircle className="check-icon" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link 
//                     to={`/shop?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`} 
//                     className="explore-category"
//                   >
//                     Explore {category.title} <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Featured Products */}
//       <section className="featured-products">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Featured Chicken Products</h2>
//             <Link to="/shop" className="view-all">
//               View All Products <FaArrowRight />
//             </Link>
//           </div>
          
//           <div className="products-grid">
//             {featuredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Promotional Banner */}
//       <section className="promo-banner">
//         <div className="container">
//           <div className="promo-content">
//             <div className="promo-text">
//               <span className="promo-tag">Limited Time Offer</span>
//               <h2>First Order Discount</h2>
//               <p>Get 20% off on your first chicken order with code: <span className="promo-code">FRESH20</span></p>
//               <ul className="promo-features">
//                 <li><FaCheckCircle /> Free delivery on orders above ₹500</li>
//                 <li><FaCheckCircle /> Premium quality guaranteed</li>
//                 <li><FaCheckCircle /> Easy returns within 24 hours</li>
//               </ul>
//               <Link to="/shop" className="promo-btn">
//                 Shop Now <FaArrowRight />
//               </Link>
//             </div>
//             <div className="promo-image">
//               <img src="/api/placeholder/500/300?text=Fresh+Chicken+Offer" alt="Special Offer" />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Premium Selections */}
//       <section className="premium-selections">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Premium Chicken Selections</h2>
//             <span className="section-subtitle">Exclusive, high-quality chicken for special occasions</span>
//           </div>
          
//           <div className="premium-grid">
//             {premiumSelections.map((item, index) => (
//               <div key={index} className="premium-card">
//                 <div className="premium-image">
//                   <img src={item.image} alt={item.name} />
//                   <div className="origin-tag">
//                     <FaMedal /> {item.origin}
//                   </div>
//                 </div>
//                 <div className="premium-content">
//                   <h3>{item.name}</h3>
//                   <p>{item.description}</p>
//                   <div className="premium-price">₹{item.price}</div>
//                   <button className="premium-btn">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Value Combo Packs */}
//       <section className="combo-packs">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Chicken Combo Packs</h2>
//             <span className="section-subtitle">Save more with these specially curated chicken combos</span>
//           </div>
          
//           <div className="combo-grid">
//             {comboPacks.map((combo, index) => (
//               <div key={index} className="combo-card">
//                 <div className="combo-image">
//                   <img src={combo.image} alt={combo.name} />
//                   <div className="savings-tag">{combo.savings}</div>
//                 </div>
//                 <div className="combo-content">
//                   <h3>{combo.name}</h3>
//                   <p className="combo-items">{combo.items}</p>
//                   <div className="combo-price">
//                     <span className="current-price">₹{combo.price}</span>
//                     <span className="original-price">₹{combo.originalPrice}</span>
//                   </div>
//                   <button className="combo-btn">Add to Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Testimonials */}
//       <section className="testimonials">
//         <div className="container">
//           <div className="section-header center">
//             <h2 className="section-title">What Our Customers Say</h2>
//             <span className="section-subtitle">Don't just take our word for it</span>
//           </div>
          
//           <div className="testimonials-grid">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="testimonial-card">
//                 <div className="testimonial-header">
//                   <div className="customer-info">
//                     <div className="customer-image">
//                       <img src={testimonial.image} alt={testimonial.name} />
//                     </div>
//                     <div className="customer-details">
//                       <h4>{testimonial.name}</h4>
//                       <span className="testimonial-date">{testimonial.date}</span>
//                     </div>
//                   </div>
//                   <div className="rating">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="star">★</span>
//                     ))}
//                     {[...Array(5 - testimonial.rating)].map((_, i) => (
//                       <span key={i} className="star empty">★</span>
//                     ))}
//                   </div>
//                 </div>
//                 <p className="testimonial-text">{testimonial.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* App Download */}
//       <section className="app-download">
//         <div className="container">
//           <div className="app-content">
//             <div className="app-text">
//               <h2>Download Our App</h2>
//               <p>Get exclusive offers and track your chicken orders in real-time</p>
//               <ul className="app-features">
//                 <li><FaCheckCircle /> Exclusive app-only offers</li>
//                 <li><FaCheckCircle /> Real-time order tracking</li>
//                 <li><FaCheckCircle /> Easy re-ordering</li>
//                 <li><FaCheckCircle /> Loyalty rewards</li>
//               </ul>
//               <div className="app-buttons">
//                 <a href="#" className="app-btn">
//                   <img src="/api/placeholder/140/42?text=Google+Play" alt="Get it on Google Play" />
//                 </a>
//                 <a href="#" className="app-btn">
//                   <img src="/api/placeholder/140/42?text=App+Store" alt="Download on App Store" />
//                 </a>
//               </div>
//             </div>
//             <div className="app-image">
//               <img src="/api/placeholder/300/600?text=App+Preview" alt="App Preview" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaShieldAlt, 
  FaClock, 
  FaLeaf, 
  FaCheckCircle,
  FaMedal,
  FaTruck
} from 'react-icons/fa';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/Home.css';

// Import images from src/assets/
import BonelessCuts from '../assets/Boneless Cuts.jpg';
import BoneInCuts from '../assets/Bone-in Cuts.jpg';
import WholeChicken from '../assets/Whole Chicken.jpg';
import MarinatedChicken from '../assets/Marinated.jpg';
import OrganicChicken from '../assets/Organic Free-Range Chicken.jpg';
import CornFedChicken from '../assets/Premium Corn-Fed Chicken.jpg';
import HeritageChicken from '../assets/Heritage Breed Chicken.jpg';
import BBQPacks from '../assets/Weekend BBQ Pack.jpg';
import FeastPack from '../assets/Whole Chicken.jpg';
import FreshChickenOffer from '../assets/FreshChickenOffer1.jpg';
import CustomerP from '../assets/CustomerP.jpg';
import CustomerR from '../assets/CustomerR.jpg';
import CustomerA from '../assets/CustomerA.jpg';
import GooglePlay from '../assets/Google Play.jpg';
import AppStore from '../assets/App Store.png';
import AppPreview from '../assets/App Preview.jpg';

const Home = () => {
  // Filter products for featured section
  const featuredProducts = products.slice(0, 4);
  
  // Categories data - chicken focused
  const categories = [
    {
      title: "Boneless Cuts",
      image: '/api/placeholder/400/300?text=Boneless+Cuts',
      items: ["Chicken Breast", "Chicken Thigh", "Chicken Strips", "Chicken Cubes", "Chicken Tenders"]
    },
    {
      title: "Bone-in Cuts",
      image: '/api/placeholder/400/300?text=Boneless+Cuts',
      items: ["Drumsticks", "Wings", "Lollipop", "Leg Quarters", "Thighs"]
    },
    {
      title: "Whole Chicken",
      image: '/api/placeholder/400/300?text=Boneless+Cuts',
      items: ["Regular Chicken", "Organic Chicken", "Free-range Chicken", "Broiler Chicken"]
    },
    {
      title: "Marinated",
      image: '/api/placeholder/400/300?text=Boneless+Cuts',
      items: ["Tandoori", "Herb & Garlic", "Peri Peri", "BBQ", "Lemon Pepper"]
    }
  ];
  
  // Premium selections data
  const premiumSelections = [
    {
      name: "Organic Free-Range Chicken",
      price: 599,
      image: OrganicChicken,
      description: "Naturally raised free-range chicken with no antibiotics",
      origin: "Local Farms"
    },
    {
      name: "Premium Corn-Fed Chicken",
      price: 499,
      image: CornFedChicken,
      description: "Premium quality corn-fed chicken with rich flavor",
      origin: "Specialty Farms"
    },
    {
      name: "Heritage Breed Chicken",
      price: 699,
      image: HeritageChicken,
      description: "Rare heritage breed chicken for exceptional taste",
      origin: "Artisanal Farms"
    }
  ];
  
  // Value combo packs
  const comboPacks = [
    {
      name: "Weekend BBQ Pack",
      items: "Chicken Wings + Drumsticks + Boneless Breasts",
      price: 699,
      originalPrice: 899,
      image: BBQPacks,
      savings: "Save ₹200"
    },
    {
      name: "Family Feast Pack",
      items: "Whole Chicken + Curry Cut + Boneless Cubes",
      price: 999,
      originalPrice: 1299,
      image: FeastPack,
      savings: "Save ₹300"
    }
  ];
  
  // Quality guarantee features
  const qualityFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      description: "Sourced from certified poultry farms"
    },
    {
      icon: <FaLeaf />,
      title: "Antibiotic-Free",
      description: "No added hormones or antibiotics"
    },
    {
      icon: <FaClock />,
      title: "Farm to Home",
      description: "Delivered fresh within 24 hours"
    },
    {
      icon: <FaTruck />,
      title: "Express Delivery",
      description: "Same day delivery available"
    }
  ];
  
  // Customer testimonials
  const testimonials = [
    {
      name: "Priya S.",
      rating: 5,
      text: "The quality of chicken is exceptional! I've been ordering for 6 months now and have never been disappointed. The chicken is always fresh and the delivery is prompt.",
      image: CustomerP,
      date: "3 weeks ago"
    },
    {
      name: "Rajesh K.",
      rating: 5,
      text: "Best chicken in town. Their marinated options save me so much time in the kitchen. The packaging is excellent and the delivery is always on time.",
      image: CustomerR,
      date: "1 month ago"
    },
    {
      name: "Ananya M.",
      rating: 4,
      text: "Great variety of chicken cuts and excellent customer service. The boneless chicken breast is superior to what I get from local markets. Highly recommend!",
      image: CustomerA,
      date: "2 months ago"
    }
  ];

  return (
    <div className="home-page">
      {/* Main Banner/Slider */}
      <Banner />
      
      {/* Quality Guarantees */}
      <section className="quality-guarantees">
        <div className="container">
          <div className="guarantees-grid">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">
                  {feature.icon}
                </div>
                <div className="guarantee-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Category Showcase */}
      <section className="category-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Chicken Type</h2>
            <Link to="/categories" className="view-all">
              View All Categories <FaArrowRight />
            </Link>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <ul className="category-items">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/shop?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="explore-category"
                  >
                    Explore {category.title} <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Chicken Products</h2>
            <Link to="/shop" className="view-all">
              View All Products <FaArrowRight />
            </Link>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <span className="promo-tag">Limited Time Offer</span>
              <h2>First Order Discount</h2>
              <p>Get 20% off on your first chicken order with code: <span className="promo-code">FRESH20</span></p>
              <ul className="promo-features">
                <li><FaCheckCircle /> Free delivery on orders above ₹500</li>
                <li><FaCheckCircle /> Premium quality guaranteed</li>
                <li><FaCheckCircle /> Easy returns within 24 hours</li>
              </ul>
              <Link to="/shop" className="promo-btn">
                Shop Now <FaArrowRight />
              </Link>
            </div>
            <div className="promo-image">
              <img src={FreshChickenOffer} alt="Special Offer" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Selections */}
      <section className="premium-selections">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Chicken Selections</h2>
            <span className="section-subtitle">Exclusive, high-quality chicken for special occasions</span>
          </div>
          
          <div className="premium-grid">
            {premiumSelections.map((item, index) => (
              <div key={index} className="premium-card">
                <div className="premium-image">
                  <img src={item.image} alt={item.name} />
                  <div className="origin-tag">
                    <FaMedal /> {item.origin}
                  </div>
                </div>
                <div className="premium-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="premium-price">₹{item.price}</div>
                  <button className="premium-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Combo Packs */}
      <section className="combo-packs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Chicken Combo Packs</h2>
            <span className="section-subtitle">Save more with these specially curated chicken combos</span>
          </div>
          
          <div className="combo-grid">
            {comboPacks.map((combo, index) => (
              <div key={index} className="combo-card">
                <div className="combo-image">
                  <img src={combo.image} alt={combo.name} />
                  <div className="savings-tag">{combo.savings}</div>
                </div>
                <div className="combo-content">
                  <h3>{combo.name}</h3>
                  <p className="combo-items">{combo.items}</p>
                  <div className="combo-price">
                    <span className="current-price">₹{combo.price}</span>
                    <span className="original-price">₹{combo.originalPrice}</span>
                  </div>
                  <button className="combo-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">What Our Customers Say</h2>
            <span className="section-subtitle">Don't just take our word for it</span>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="customer-info">
                    <div className="customer-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="customer-details">
                      <h4>{testimonial.name}</h4>
                      <span className="testimonial-date">{testimonial.date}</span>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <span key={i} className="star empty">★</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Download */}
      <section className="app-download">
        <div className="container">
          <div className="app-content">
            <div className="app-text">
              <h2>Download Our App</h2>
              <p>Get exclusive offers and track your chicken orders in real-time</p>
              <ul className="app-features">
                <li><FaCheckCircle /> Exclusive app-only offers</li>
                <li><FaCheckCircle /> Real-time order tracking</li>
                <li><FaCheckCircle /> Easy re-ordering</li>
                <li><FaCheckCircle /> Loyalty rewards</li>
              </ul>
              <div className="app-buttons">
                <a href="#" className="app-btn">
                  <img src={GooglePlay} alt="Get it on Google Play" />
                </a>
                <a href="#" className="app-btn">
                  <img src={AppStore} alt="Download on App Store" />
                </a>
              </div>
            </div>
            <div className="app-image">
              <img src={AppPreview} alt="App Preview" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;