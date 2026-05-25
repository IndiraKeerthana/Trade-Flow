import React from 'react';

function Stats() {
    return (
        <div className="container p-3 mb-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className = "mb-5 fs-3">Trust with Confidence</h1>

                    <h2 className = "fs-5">Customer-first always</h2>
                    <p className = "text-muted">From market tracking to seamless trading, TradeFlow is crafted to make investing easier for everyone.</p>

                    <h2 className = "fs-5">No spam or gimmicks</h2>
                    <p className = "text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className = "fs-5">The TradeFlow Universe</h2>
                    <p className = "text-muted">Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services specific to you needs.</p>

                    <h2 className = "fs-5">Do better with money</h2>
                    <p className = "text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="col-6 mb-5">
                    <img src="media\ecosystem.png" style = {{width: "100%"}}/>
                    <div className = "text-center">
                        <a href="" className = "mx-5" style = {{textDecoration: "none"}}>Explore our Products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style = {{textDecoration: "none"}}>Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;