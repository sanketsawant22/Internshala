import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({
  product,
  onProductClick,
  addToCartDirectly = false,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const formatPrice = (price) => `$${price}`;

  const truncateTitle = (title) =>
    title.length > 20 ? `${title.substring(0, 20)}...` : title;

  return (
    <div className="product-card" onClick={() => onProductClick(product.id)}>
      {product.id % 3 === 0 && <div className="product-tag">NEW</div>}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{truncateTitle(product.title)}</h3>
        <div className="product-price">{formatPrice(product.price)}</div>
        <div className="product-rating">
          {"★".repeat(Math.round(product.rating.rate))}
          {"☆".repeat(5 - Math.round(product.rating.rate))}
          <span className="rating-count">({product.rating.count})</span>
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
