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
  
//   // Categories data
//   const categories = [
//     {
//       title: "Chicken",
//       image: "/api/placeholder/400/300?text=Chicken",
//       items: ["Whole Chicken", "Boneless", "Curry Cut", "Wings", "Leg Piece"]
//     },
//     {
//       title: "Mutton",
//       image: "/api/placeholder/400/300?text=Mutton",
//       items: ["Curry Cut", "Boneless", "Chops", "Biryani Cut", "Keema"]
//     },
//     {
//       title: "Fish & Seafood",
//       image: "/api/placeholder/400/300?text=Fish",
//       items: ["Fish", "Prawns", "Crab", "Tuna", "Salmon"]
//     },
//     {
//       title: "Ready to Cook",
//       image: "/api/placeholder/400/300?text=Ready+To+Cook",
//       items: ["Marinades", "Kebabs", "Burgers", "Nuggets", "Sausages"]
//     }
//   ];
  
//   // Premium selections data
//   const premiumSelections = [
//     {
//       name: "Premium Wagyu Steak",
//       price: 2499,
//       image: "/api/placeholder/500/300?text=Wagyu+Steak",
//       description: "Japanese A5 Wagyu with exceptional marbling and flavor",
//       origin: "Japan"
//     },
//     {
//       name: "Norwegian Salmon",
//       price: 1299,
//       image: "/api/placeholder/500/300?text=Norwegian+Salmon",
//       description: "Wild caught Atlantic salmon, rich in Omega-3",
//       origin: "Norway"
//     },
//     {
//       name: "New Zealand Lamb",
//       price: 999,
//       image: "/api/placeholder/500/300?text=Lamb+Rack",
//       description: "Grass-fed, free-range lamb with a delicate flavor",
//       origin: "New Zealand"
//     }
//   ];
  
//   // Value combo packs
//   const comboPacks = [
//     {
//       name: "Weekend BBQ Pack",
//       items: "Chicken Wings + Lamb Chops + Prawns",
//       price: 999,
//       originalPrice: 1299,
//       image: "/api/placeholder/400/300?text=BBQ+Pack",
//       savings: "Save ₹300"
//     },
//     {
//       name: "Family Feast Pack",
//       items: "Whole Chicken + Mutton Curry Cut + Fish Fillets",
//       price: 1499,
//       originalPrice: 1999,
//       image: "/api/placeholder/400/300?text=Feast+Pack",
//       savings: "Save ₹500"
//     }
//   ];
  
//   // Quality guarantee features
//   const qualityFeatures = [
//     {
//       icon: <FaShieldAlt />,
//       title: "Premium Quality",
//       description: "Sourced from certified farms and suppliers"
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
//       text: "The quality of meat is exceptional! I've been ordering for 6 months now and have never been disappointed. The chicken is always fresh and the delivery is prompt.",
//       image: "/api/placeholder/60/60?text=P",
//       date: "3 weeks ago"
//     },
//     {
//       name: "Rajesh K.",
//       rating: 5,
//       text: "Best seafood in town. Their prawns are always fresh and perfectly cleaned. The packaging is excellent and the delivery is always on time.",
//       image: "/api/placeholder/60/60?text=R",
//       date: "1 month ago"
//     },
//     {
//       name: "Ananya M.",
//       rating: 4,
//       text: "Great variety of products and excellent customer service. The mutton quality is superior to what I get from local markets. Highly recommend!",
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
//             <h2 className="section-title">Shop by Category</h2>
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
//                     to={`/shop?category=${category.title.toLowerCase()}`} 
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
//             <h2 className="section-title">Featured Products</h2>
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
//               <p>Get 20% off on your first order with code: <span className="promo-code">FRESH20</span></p>
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
//               <img src="/api/placeholder/500/300?text=Special+Offer" alt="Special Offer" />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Premium Selections */}
//       <section className="premium-selections">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Premium Selections</h2>
//             <span className="section-subtitle">Exclusive, high-quality meats for special occasions</span>
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
//             <h2 className="section-title">Value Combo Packs</h2>
//             <span className="section-subtitle">Save more with these specially curated combos</span>
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
//               <p>Get exclusive offers and track your orders in real-time</p>
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
import MuttonSelection from '../assets/Mutton Selection.jpg';
import cbrest from '../assets/c-brest.jpg';
import NorwegianSalmon from '../assets/Norwegian Salmon.jpg';
import MeatLoversPack from '../assets/Meat Lovers Pack.jpg';
import PremiumSeafoodPack from '../assets/Premium Seafood Pack.jpg';
import specialoffer from '../assets/special offer.png';
import CustomerP from '../assets/CustomerP.jpg';
import CustomerR from '../assets/CustomerR.jpg';
import CustomerA from '../assets/CustomerA.jpg';
import GooglePlay from '../assets/Google Play.jpg';
import AppStore from '../assets/App Store.png';
import AppPreview from '../assets/App Preview.jpg';
import '../styles/Home.css';

const Home = () => {
  // Filter products for featured section
  const featuredProducts = products.slice(0, 4);
  
  // Categories data - only chicken, mutton, and fish
  const categories = [
    {
      title: "Chicken",
      // image: "/api/placeholder/400/300?text=Chicken",
      items: ["Whole Chicken", "Boneless", "Curry Cut", "Wings", "Leg Piece"]
    },
    {
      title: "Mutton",
      // image: "/api/placeholder/400/300?text=Mutton",
      items: ["Curry Cut", "Boneless", "Chops", "Biryani Cut", "Keema"]
    },
    {
      title: "Fish & Seafood",
      // image: "/api/placeholder/400/300?text=Fish",
      items: ["Fish", "Prawns", "Crab", "Tuna", "Salmon"]
    }
  ];
  
  // Premium selections data - only chicken, mutton, and fish
  const premiumSelections = [
    {
      name: "Premium Chicken Breast",
      price: 399,
      image: cbrest,
      description: "Farm-raised antibiotic-free premium chicken breast",
      origin: "Local Farms"
    },
    {
      name: "Norwegian Salmon",
      price: 1299,
      image: NorwegianSalmon,
      description: "Wild caught Atlantic salmon, rich in Omega-3",
      origin: "Norway"
    },
    {
      name: "Premium Mutton Cuts",
      price: 999,
      image: MuttonSelection,
      description: "Grass-fed, free-range mutton with a rich flavor",
      origin: "Local Farms"
    }
  ];
  
  // Value combo packs - focused on chicken, mutton, and fish
  const comboPacks = [
    {
      name: "Meat Lover's Pack",
      items: "Chicken Drumsticks + Mutton Curry Cut + Fish Fillets",
      price: 999,
      originalPrice: 1299,
      image: MeatLoversPack,
      savings: "Save ₹300"
    },
    {
      name: "Premium Seafood Pack",
      items: "Norwegian Salmon + Prawns + Fish Curry Cut",
      price: 1499,
      originalPrice: 1999,
      image: PremiumSeafoodPack,
      savings: "Save ₹500"
    }
  ];
  
  // Quality guarantee features
  const qualityFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      description: "Sourced from certified farms and suppliers"
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
      text: "Best seafood in town. Their fish is always fresh and perfectly cleaned. The packaging is excellent and the delivery is always on time.",
      image: CustomerR,
      date: "1 month ago"
    },
    {
      name: "Ananya M.",
      rating: 4,
      text: "Great variety of mutton cuts and excellent customer service. The quality is superior to what I get from local markets. Highly recommend!",
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
            <h2 className="section-title">Shop by Category</h2>
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
                    to={`/shop?category=${category.title.toLowerCase()}`} 
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
            <h2 className="section-title">Featured Products</h2>
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
              <p>Get 20% off on your first order with code: <span className="promo-code">FRESH20</span></p>
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
              <img src={specialoffer} alt="Special Offer" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Selections */}
      <section className="premium-selections">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Selections</h2>
            <span className="section-subtitle">Exclusive, high-quality meats for special occasions</span>
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
            <h2 className="section-title">Value Combo Packs</h2>
            <span className="section-subtitle">Save more with these specially curated combos</span>
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
              <p>Get exclusive offers and track your orders in real-time</p>
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
