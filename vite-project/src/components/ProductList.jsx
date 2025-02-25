// components/ProductList.jsx
import ProductCard from './ProductCard'

function ProductList({ products, onProductClick }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={onProductClick}
                />
            ))}
        </div>
    )
}

export default ProductList