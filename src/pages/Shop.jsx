import ProductList from "../components/ProductList";
import { products } from "../data/products";
import "../styles/Shop.css";

const Shop = () => (
  <div className="shop">
    <div className="shop-header">
      <h1>Our Products</h1>
      <p>Discover fresh and high-quality products at the best prices.</p>
    </div>
    <ProductList products={products} />
  </div>
);

export default Shop;
