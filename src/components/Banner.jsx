// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FaArrowRight, 
//   FaArrowLeft, 
//   FaTruck, 
//   FaShieldAlt, 
//   FaLeaf,
//   FaStar
// } from 'react-icons/fa';
// import '../styles/Banner.css';

// // Sample banner data - in a real app, this would come from an API
// const bannerData = [
//   {
//     id: 1,
//     title: "Premium Chicken Cuts",
//     subtitle: "Farm Fresh Everyday",
//     description: "Antibiotic-free chicken raised in certified farms",
//     cta: "Shop Now",
//     link: "/shop?category=chicken",
//     image: "/api/placeholder/600/400?text=Premium+Chicken",
//     discount: "20% OFF",
//     originalPrice: 249,
//     discountedPrice: 199,
//     backgroundColor: "#f8f2e9"
//   },
//   {
//     id: 2,
//     title: "Fresh Atlantic Salmon",
//     subtitle: "Ocean to Table",
//     description: "Wild-caught salmon rich in Omega-3",
//     cta: "Explore",
//     link: "/shop?category=seafood",
//     image: "/api/placeholder/600/400?text=Fresh+Salmon",
//     discount: "15% OFF",
//     originalPrice: 599,
//     discountedPrice: 509,
//     backgroundColor: "#e5f6ff"
//   },
//   {
//     id: 3,
//     title: "Premium Mutton Selection",
//     subtitle: "Quality Guaranteed",
//     description: "Tender and juicy cuts for your special occasions",
//     cta: "Buy Now",
//     link: "/shop?category=mutton",
//     image: "/api/placeholder/600/400?text=Premium+Mutton",
//     discount: "10% OFF",
//     originalPrice: 449,
//     discountedPrice: 404,
//     backgroundColor: "#f8e9e9"
//   }
// ];

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const autoPlayRef = useRef(null);
  
//   // Initialize auto-slide functionality
//   useEffect(() => {
//     if (isAutoPlaying) {
//       autoPlayRef.current = setTimeout(() => {
//         if (!isAnimating) {
//           nextSlide();
//         }
//       }, 5000);
//     }
    
//     return () => {
//       if (autoPlayRef.current) {
//         clearTimeout(autoPlayRef.current);
//       }
//     };
//   }, [currentSlide, isAnimating, isAutoPlaying]);
  
//   // Handle mouse enter/leave for auto-play
//   const pauseAutoPlay = () => setIsAutoPlaying(false);
//   const resumeAutoPlay = () => setIsAutoPlaying(true);
  
//   // Slide navigation functions
//   const nextSlide = () => {
//     if (isAnimating) return;
    
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === bannerData.length - 1 ? 0 : prev + 1));
    
//     // Reset animation flag after transition completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };
  
//   const prevSlide = () => {
//     if (isAnimating) return;
    
//     setIsAnimating(true);
//     setCurrentSlide(prev => (prev === 0 ? bannerData.length - 1 : prev - 1));
    
//     // Reset animation flag after transition completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };
  
//   const goToSlide = (index) => {
//     if (isAnimating || currentSlide === index) return;
    
//     setIsAnimating(true);
//     setCurrentSlide(index);
    
//     // Reset animation flag after transition completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };
  
//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 75) {
//       // Swipe left
//       nextSlide();
//     } else if (touchStart - touchEnd < -75) {
//       // Swipe right
//       prevSlide();
//     }
//   };
  
//   const currentBanner = bannerData[currentSlide];
//   const benefits = [
//     { icon: <FaTruck />, text: "Free Delivery" },
//     { icon: <FaShieldAlt />, text: "100% Authentic" },
//     { icon: <FaLeaf />, text: "Farm Fresh" },
//     { icon: <FaStar />, text: "Premium Quality" }
//   ];

//   return (
//     <div className="banner-container">
//       <div 
//         className="main-banner" 
//         style={{ backgroundColor: currentBanner.backgroundColor }}
//         onMouseEnter={pauseAutoPlay}
//         onMouseLeave={resumeAutoPlay}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="banner-content slide-up">
//           <span className="banner-subtitle">{currentBanner.subtitle}</span>
//           <h1 className="banner-title">{currentBanner.title}</h1>
//           <p className="banner-description">{currentBanner.description}</p>
          
//           <div className="banner-benefits">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="benefit-item">
//                 <div className="benefit-icon">{benefit.icon}</div>
//                 <span>{benefit.text}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="banner-price">
//             <div className="price-tag">
//               <span className="discount-badge">{currentBanner.discount}</span>
//               <div className="price-values">
//                 <span className="original-price">₹{currentBanner.originalPrice}</span>
//                 <span className="current-price">₹{currentBanner.discountedPrice}</span>
//               </div>
//             </div>
            
//             <Link to={currentBanner.link} className="cta-button">
//               {currentBanner.cta} <FaArrowRight />
//             </Link>
//           </div>
//         </div>
        
//         <div className="banner-image">
//           <img 
//             src={currentBanner.image}
//             alt={currentBanner.title} 
//             className="product-image fade-in"
//           />
//         </div>
        
//         {/* Navigation Controls */}
//         <div className="banner-controls">
//           <button 
//             className="banner-arrow prev-arrow" 
//             onClick={prevSlide}
//             aria-label="Previous slide"
//           >
//             <FaArrowLeft />
//           </button>
          
//           <div className="banner-indicators">
//             {bannerData.map((_, index) => (
//               <button
//                 key={index}
//                 className={`banner-indicator ${currentSlide === index ? 'active' : ''}`}
//                 onClick={() => goToSlide(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
          
//           <button 
//             className="banner-arrow next-arrow" 
//             onClick={nextSlide}
//             aria-label="Next slide"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaTruck, 
  FaShieldAlt, 
  FaLeaf,
  FaStar
} from 'react-icons/fa';

// Ensure correct image imports
// Use relative path from the component's location
import WholeChickenBg from '../assets/Whole Chicken.jpg';
import FishSeafoodBg from '../assets/Fish & Seafood.jpg';
import MuttonCurryCutBg from '../assets/Mutton Curry Cut.jpg';
import WholeChicken from '../assets/Whole Chicken.jpg';
import FishSeafood from '../assets/Fish & Seafood.jpg';
import MuttonCurryCut from '../assets/Mutton Curry Cut.jpg';

// Styles import
import '../styles/Banner.css';

// Modified banner data - focusing only on chicken, mutton, and fish
const bannerData = [
  {
    id: 1,
    title: "Premium Chicken Cuts",
    subtitle: "Farm Fresh Everyday",
    description: "Antibiotic-free chicken raised in certified farms",
    cta: "Shop Now",
    link: "/shop?category=chicken",
    backgroundImage: WholeChickenBg,
    productImage: WholeChicken,
    discount: "20% OFF",
    originalPrice: 249,
    discountedPrice: 199,
  },
  {
    id: 2,
    title: "Fresh Fish Collection",
    subtitle: "Ocean to Table",
    description: "Wild-caught fish rich in Omega-3",
    cta: "Explore",
    link: "/shop?category=fish",
    backgroundImage: FishSeafoodBg,
    productImage: FishSeafood,
    discount: "15% OFF",
    originalPrice: 599,
    discountedPrice: 509,
  },
  {
    id: 3,
    title: "Premium Mutton Selection",
    subtitle: "Quality Guaranteed",
    description: "Tender and juicy cuts for your special occasions",
    cta: "Buy Now",
    link: "/shop?category=mutton",
    backgroundImage: MuttonCurryCutBg,
    productImage: MuttonCurryCut,
    discount: "10% OFF",
    originalPrice: 449,
    discountedPrice: 404,
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Initialize auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAnimating, isAutoPlaying]);
  
  // Handle mouse enter/leave for auto-play
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);
  
  // Slide navigation functions
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === bannerData.length - 1 ? 0 : prev + 1));
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === 0 ? bannerData.length - 1 : prev - 1));
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || currentSlide === index) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };
  
  const currentBanner = bannerData[currentSlide];
  const benefits = [
    { icon: <FaTruck />, text: "Free Delivery" },
    { icon: <FaShieldAlt />, text: "100% Authentic" },
    { icon: <FaLeaf />, text: "Farm Fresh" },
    { icon: <FaStar />, text: "Premium Quality" }
  ];

  return (
    <div className="banner-container">
      <div 
        className="main-banner" 
        style={{ 
          backgroundImage: `url(${currentBanner.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="banner-overlay"></div>
        
        <div className="banner-content slide-up">
          <span className="banner-subtitle">{currentBanner.subtitle}</span>
          <h1 className="banner-title">{currentBanner.title}</h1>
          <p className="banner-description">{currentBanner.description}</p>
          
          <div className="banner-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
          
          <div className="banner-price">
            <div className="price-tag">
              <span className="discount-badge">{currentBanner.discount}</span>
              <div className="price-values">
                <span className="original-price">₹{currentBanner.originalPrice}</span>
                <span className="current-price">₹{currentBanner.discountedPrice}</span>
              </div>
            </div>
            
            <a 
              href={currentBanner.link} 
              className="cta-button"
            >
              {currentBanner.cta} <FaArrowRight />
            </a>
          </div>
        </div>
        
        <div className="banner-image">
          <img 
            src={currentBanner.productImage}
            alt={currentBanner.title} 
            className="product-image fade-in"
            onError={(e) => {
              console.error('Image load error:', e);
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Navigation Controls */}
        <div className="banner-controls">
          <button 
            className="banner-arrow prev-arrow" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          
          <div className="banner-indicators">
            {bannerData.map((_, index) => (
              <button
                key={index}
                className={`banner-indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="banner-arrow next-arrow" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;