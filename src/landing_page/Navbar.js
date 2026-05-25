import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
            <div class="container">
                <Link class="navbar-brand ml-4" to="/">
                    <img src="media/TradeFlow_logo.svg" style={{ width: '40%' }} alt="Logo" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-lg-0 ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/product">Product</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/support">Support</Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;