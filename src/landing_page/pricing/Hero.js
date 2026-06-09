import React from 'react';

function Hero() {
    return (
        <div className="container my-5 mt-lg-5">
            <div className="row align-items-center text-center">
                <h2 className="" style={{ color: "#424242" }}>Charges</h2>
                <p className=" fs-5 text-muted">List of all charges and taxes</p>
            </div>

            <div className="row mt-lg-5 align-items-start text-center gy-5">
                <div className="col-md-4">
                    <img src="media\pricingEquity.svg" style={{ width: "60%" }} />
                    <h2 style={{ color: "#424242" }}>Free equity delivery</h2>
                    <p className="text-muted p-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-md-4">
                    <img src="media\intradayTrades.svg" style={{ width: "60%" }} />
                    <h2 style={{ color: "#424242" }}>Intraday and F&O trades</h2>
                    <p className="text-muted p-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-md-4">
                    <img src="media\pricingEquity.svg" style={{ width: "60%" }} />
                    <h2 style={{ color: "#424242" }}>Free direct MF</h2>
                    <p className="text-muted p-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;