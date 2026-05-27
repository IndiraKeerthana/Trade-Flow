import React from 'react';

function Hero() {
    return (
        <div className="container py-4 py-lg-5 mb-4 mb-lg-5 px-3">
            <div className="row text-center">
                <img src="/media/homeHero.png" alt="Hero Image" className="img-fluid mb-2 mx-auto" style={{ width: "65%", maxWidth: "720px" }}></img>
                <h1 className="mt-4 mt-lg-5 fs-3 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>Invest in everything</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                <div className="col-10 col-sm-8 col-md-6 col-lg-3 mx-auto">
                    <button className="p-2 btn btn-primary fs-5 mb-4 mb-lg-5 mt-4 w-100" style={{ minHeight: "3.15rem" }}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;