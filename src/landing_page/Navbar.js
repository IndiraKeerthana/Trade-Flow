import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
            <div className="container">
                <Link className="navbar-brand ms-2 ms-md-4" to="/">
                    <img src="media/TradeFlow_logo.svg" className="img-fluid" style={{ width: '40%', minWidth: "120px", maxWidth: "180px" }} alt="Logo" />
                </Link>
                {/* Mobile: Font Awesome bars acts as Bootstrap menu toggle */}
                <button
                    className="navbar-toggler border-0 shadow-none d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars fa-lg" style={{ color: "#424242" }}></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0 ms-auto align-items-lg-center">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>

                        {/* Desktop placeholder menu button for future features */}
                        <li className="nav-item d-none d-lg-block">
                            <button
                                type="button"
                                className="nav-link border-0 bg-transparent text-decoration-none p-0 ms-2"
                                aria-label="Open menu"
                                title="Menu"
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;