import React from 'react';

function OpenAccount() {
    return (
        <div className="container py-4 py-lg-5 mt-5 mb-5 px-3">
            <div className="row text-center">
                <h1 className="mt-5 fs-3 mb-2" style = {{color: "#424242", fontSize: "1.75rem"}}>Open a TradeFlow account</h1>
                <p className="text-muted fs-5 mb-3 mt-2" style = {{fontWeight: "400"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="col-10 col-sm-8 col-md-6 col-lg-3 mx-auto">
                    <button className="p-2 btn btn-primary fs-5 mb-5 mt-4 w-100" style={{ minHeight: "3.15rem" }}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;