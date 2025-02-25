// components/ProductModal.jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function ProductModal({ product, onClose }) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }))
        onClose()
    }

    const handleBuyNow = () => {
        dispatch(addToCart({ ...product, quantity }))
        onClose()
        // In a real app, this would navigate to checkout
        alert('Proceeding to checkout...')
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="modal-details">
                        <h2 className="modal-title">{product.title}</h2>
                        <div className="modal-rating">
                            {'★'.repeat(Math.round(product.rating.rate))}
                            {'☆'.repeat(5 - Math.round(product.rating.rate))}
                            <span className="rating-count">({product.rating.count} Reviews)</span>
                            {product.rating.count > 50 && <span className="stock-status">| In Stock</span>}
                        </div>
                        <div className="modal-price">${product.price}</div>
                        <div className="modal-description">{product.description}</div>

                        <div className="quantity-selector">
                            <button className="quantity-btn" onClick={handleDecrement}>−</button>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="quantity-input"
                            />
                            <button className="quantity-btn" onClick={handleIncrement}>+</button>
                        </div>

                        <div className="modal-actions">
                            <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal