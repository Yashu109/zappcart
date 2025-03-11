import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaTruck, 
  FaShieldAlt, 
  FaLeaf,
  FaStar
} from 'react-icons/fa';
import '../styles/Banner.css';

// Updated banner data focusing only on chicken products
const bannerData = [
  {
    id: 1,
    title: "Premium Chicken Cuts",
    subtitle: "Farm Fresh Everyday",
    description: "Antibiotic-free chicken raised in certified farms",
    cta: "Shop Now",
    link: "/shop?category=boneless",
    image: "/api/placeholder/600/400?text=Premium+Chicken",
    discount: "20% OFF",
    originalPrice: 249,
    discountedPrice: 199,
    backgroundColor: "#f8f2e9"
  },
  {
    id: 2,
    title: "Organic Whole Chicken",
    subtitle: "Pure & Natural",
    description: "Free-range chicken with no antibiotics or hormones",
    cta: "Explore",
    link: "/shop?category=whole",
    image: "/api/placeholder/600/400?text=Organic+Chicken",
    discount: "15% OFF",
    originalPrice: 599,
    discountedPrice: 509,
    backgroundColor: "#e9f0e5"
  },
  {
    id: 3,
    title: "Ready-to-Cook Chicken",
    subtitle: "Convenience Guaranteed",
    description: "Pre-marinated, pre-cut chicken for quick and easy meals",
    cta: "Buy Now",
    link: "/shop?category=marinated",
    image: "/api/placeholder/600/400?text=Marinated+Chicken",
    discount: "10% OFF",
    originalPrice: 349,
    discountedPrice: 314,
    backgroundColor: "#f8e9e9"
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
        style={{ backgroundColor: currentBanner.backgroundColor }}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
            
            <Link to={currentBanner.link} className="cta-button">
              {currentBanner.cta} <FaArrowRight />
            </Link>
          </div>
        </div>
        
        <div className="banner-image">
          <img 
            src={currentBanner.image}
            alt={currentBanner.title} 
            className="product-image fade-in"
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