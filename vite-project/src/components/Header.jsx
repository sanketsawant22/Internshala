// components/Header.jsx
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Header({ categories, onCategoryChange }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.items)
    const dropdownRef = useRef(null)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryClick = (category) => {
        onCategoryChange(category)
        setSearchTerm(category)
        setIsDropdownOpen(false)
    }

    const handleSearchFocus = () => {
        setIsDropdownOpen(true)
    }

    const handleResetCategory = () => {
        onCategoryChange('')
        setSearchTerm('')
        setIsDropdownOpen(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className="header">
            <div className="logo">
                <h1>Harmony</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home Page</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li className="dropdown">
                        <a href="#">More Stores <span>▼</span></a>
                    </li>
                </ul>
            </nav>
            <div className="search-container" ref={dropdownRef}>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={handleSearchFocus}
                    />
                    <button className="search-button">🔍</button>
                </div>
                {isDropdownOpen && (
                    <div className="category-dropdown">
                        <div className="category-item" onClick={handleResetCategory}>
                            All Products
                        </div>
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="category-item"
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="cart-icon">
                <span className="cart-count">{cartItems.length}</span>
                <span className="icon">🛒</span>
            </div>
        </header>
    )
}

export default Header