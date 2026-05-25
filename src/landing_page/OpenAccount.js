import React from 'react';

function OpenAccount() {
    return (
        <div className="container p-5 mt-5 mb-5 px-3">
            <div className="row text-center">
                <h1 className="mt-5 fs-3 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>Open a TradeFlow account</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className = "p-2 btn btn-primary fs-5 mb-5 mt-4" style= {{width: "18%",height: "3.15rem", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;