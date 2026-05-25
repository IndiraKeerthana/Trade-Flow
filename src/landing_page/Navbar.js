import React from 'react';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
            <div class="container">
                <a class="navbar-brand ml-4" href="#">
                    <img src="media/TradeFlow_logo.svg" style={{ width: '40%' }} alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-lg-0 ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Signup</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Product</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
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