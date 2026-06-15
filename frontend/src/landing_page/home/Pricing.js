import React from 'react';

function Pricing() {
    return (
        <div className="container mt-4 mt-lg-5 mb-4 mb-lg-5">
            <div className="row align-items-start gy-4">
                <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                    <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className = "" style = {{textDecoration: "none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="d-none d-lg-block col-lg-2"></div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5">
                    <div className="row text-center">
                        <div className="col-12 col-sm p-3 border">
                            <h1 className="mb-3">₹0</h1>
                            <br />
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-12 col-sm p-3 border mt-3 mt-sm-0">
                            <h1 className="mb-3">₹20</h1>
                            <br />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;