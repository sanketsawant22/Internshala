// App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch all products on initial load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Fetch categories on initial load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleProductClick = async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await response.json();
      setSelectedProduct(data);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header categories={categories} onCategoryChange={handleCategoryChange} />

      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span className="store-name">My Store</span>
          </h1>
          <h2>Your Shopping Destination</h2>
          <p>
            Discover a wide range of products tailored just for you. Shop with
            ease and find exactly what you need.
          </p>
        </div>
      </div>

      <div className="banner-section">
        <h2>Discover Your Next Favorite Item</h2>
        <p>
          Browse our exclusive collection and find the perfect product tailored
          just for you.
        </p>
        <div className="banner-buttons">
          <button className="btn shop-btn">Shop</button>
          <button className="btn learn-more-btn">Learn More</button>
        </div>
      </div>

      <div className="products-section">
        <div className="section-heading">
          <div className="heading-indicator"></div>
          <h2>Our Products</h2>
        </div>
        <h2 className="explore-heading">Explore Our Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProductList
            products={products}
            onProductClick={handleProductClick}
          />
        )}
      </div>

      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $100</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🧑‍💻</div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;