// components/Footer.jsx
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="email-subscription">
                        <input type="email" placeholder="Enter your email" />
                        <button>→</button>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <p>1234 Park Street,</p>
                    <p>NY-Ithaca, 1001</p>
                    <p>help@mystore.com</p>
                    <p>+1-202-555-0199</p>
                </div>

                <div className="footer-section">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright MyStore 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer