import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5 px-3">
            <div className="row text-center">
                <img src="/media/homeHero.png" alt="Hero Image"  className = "mb-5" style = {{width: "70%", margin: "0 auto"}}></img>
                <h1 className="mt-5 fs-2 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>Invest in everything</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                <button className = "p-2 btn btn-primary fs-5 mb-5 mt-4" style= {{width: "18%",height: "3.15rem", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;