import { HEADER_LOGO, HEADER_CART_IMAGE } from "../utils.js/image-cdn";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-image">
                        <a href="/">
                            <img src={HEADER_LOGO} />
                        </a>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Memberships</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="cart">
                            <div className="logo">
                                <img src={HEADER_CART_IMAGE} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;