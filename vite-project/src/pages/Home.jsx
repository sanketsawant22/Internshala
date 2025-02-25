import React from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = ({ products, loading, error, onProductClick }) => {
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span>My Store</span>
          </h1>
          <h2>Your Shopping Destination</h2>
          <p>
            Discover a wide range of products tailored just for you. Shop with
            ease and find exactly what you need.
          </p>
        </div>
        <div className="hero-image">
          {/* Hero image would go here in a real implementation */}
        </div>
      </section>

      <section className="cta-section">
        <h2>Discover Your Next Favorite Item</h2>
        <p>
          Browse our exclusive collection and find the perfect product tailored
          just for you.
        </p>
        <div className="cta-buttons">
          <button className="shop-btn">Shop</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <div className="section-title">
            <span className="title-indicator"></span>
            <h2>Our Products</h2>
          </div>
          <h3>Explore Our Products</h3>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $100</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📞</div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="feature">
          <div className="feature-icon">✓</div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
