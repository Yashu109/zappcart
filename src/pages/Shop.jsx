// import ProductList from "../components/ProductList";
// import { products } from "../data/products";
// import "../styles/Shop.css";

// const Shop = () => (
//   <div className="shop">
//     <div className="shop-header">
//       <h1>Our Products</h1>
//       <p>Discover fresh and high-quality products at the best prices.</p>
//     </div>
//     <ProductList products={products} />
//   </div>
// );

// export default Shop;
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ProductList from "../components/ProductList";
import { products } from "../data/products";
import "../styles/Shop.css";

const Shop = () => {
  const location = useLocation();
  const [initialCategory, setInitialCategory] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    
    if (categoryParam) {
      // Capitalize first letter and handle special case for "Fish & Seafood"
      const formattedCategory = categoryParam === 'fish' ? 'Fish & Seafood' : 
                                 categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      setInitialCategory(formattedCategory);
    }
  }, [location.search]);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Our Products</h1>
        <p>Discover fresh and high-quality products at the best prices.</p>
      </div>
      <ProductList 
        products={products} 
        initialCategory={initialCategory} 
      />
    </div>
  );
};

export default Shop;