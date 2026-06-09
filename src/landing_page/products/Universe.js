import React from "react";

function Universe() {
    return (
        <div className="container py-4">

            {/* Tech Blog Section */}
            <div className="text-center mb-5">
                <p
                    className="mb-0"
                    style={{
                        fontSize: "1.1rem",
                        color: "#424242",
                    }}
                >
                    Want to know more about our technology stack? Check out the{" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                        TradeFlow.tech
                    </a>{" "}
                    blog.
                </p>
            </div>

            {/* Heading Section */}
            <div className="text-center mt-4 mb-4">
                <h1
                    className="fw-normal"
                    style={{
                        fontSize: "2.5rem",
                        color: "#424242",
                    }}
                >
                    The TradeFlow Universe
                </h1>

                <p
                    className="mx-auto mt-4"
                    style={{
                        maxWidth: "700px",
                        fontSize: "1.1rem",
                        color: "#424242",
                    }}
                >
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
            </div>

            {/* Partners Grid */}
            <div className="row gx-5 gy-4 mt-3">

                {/* Zerodha Fund House */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/zerodhaFundhouse.png"
                        alt="Zerodha Fund House"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Our asset management venture that is creating simple and
                        transparent index funds to help you save for your goals.
                    </p>
                </div>

                {/* Sensibull */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/sensibullLogo.svg"
                        alt="Sensibull"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Options trading platform that lets you create
                        strategies, analyze positions, and examine data points
                        like open interest, FII/DII, and more.
                    </p>
                </div>

                {/* GoldenPi */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/goldenpiLogo.png"
                        alt="GoldenPi"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Investment research platform that offers detailed
                        insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>

                {/* Streak */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/streakLogo.png"
                        alt="Streak"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Systematic trading platform that allows you to create
                        and backtest strategies without coding.
                    </p>
                </div>

                {/* Smallcase */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/smallcaseLogo.png"
                        alt="Smallcase"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Thematic investing platform that helps you invest in
                        diversified baskets of stocks and ETFs.
                    </p>
                </div>

                {/* Ditto */}
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                        src="media/dittoLogo.png"
                        alt="Ditto"
                        className="img-fluid mb-3"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "250px",
                            color: "#9b9b9b",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Personalized advice on life and health insurance. No
                        spam and no mis-selling.
                    </p>
                </div>

            </div>

            <div className="col-10 col-sm-8 col-md-6 col-lg-3 mt-lg-5 mx-auto">
                <button className="p-2 btn btn-primary fs-5 mb-4 mb-lg-5 mt-4 w-100" style={{ minHeight: "3.15rem" }}>Sign up for free</button>
            </div>
        </div>


    );
}

export default Universe;