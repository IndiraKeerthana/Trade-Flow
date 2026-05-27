import React from 'react';

function Hero() {
    return(
        <div className="container p-5 mb-5 px-3">
            <div className="row text-center">
                <h1 className="mt-5 fs-3 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>TradeFlow Products</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href="" className="text-decoration-none">investments offering <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;