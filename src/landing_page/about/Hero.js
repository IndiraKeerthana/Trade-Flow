import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row px-3 px-lg-5 py-4 py-lg-5 mb-3 mb-lg-5 mt-4" style={{ color: "#424242" }}>
                <h2 className="fs-4 text-center">A modern fintech-inspired trading platform.<br />Built to explore real-world full-stack web development.</h2>
            </div>

            <div className="row px-3 px-lg-5 py-4 py-lg-5 mt-3 mt-lg-5 border-top text-muted mx-0 mx-lg-5 gy-3" style = {{lineHeight: "1.8", fontSize: "1rem", color: "#424242"}}>
                <div className="col-12 col-lg-6 p-2 p-lg-5">
                    <p>
                        TradeFlow is a full-stack stock trading platform project built as a detailed clone and recreation of the Zerodha web application.
                    </p>

                    <p>
                        The project was created to understand how modern fintech platforms are designed and developed while improving my skills in frontend development, backend architecture, responsive UI design, and scalable web applications.
                    </p>

                    <p>
                        Through TradeFlow, I explored building real-world features such as authentication systems, responsive layouts, reusable React components, dashboard interfaces, and modern user experiences inspired by production-level trading platforms.
                    </p>
                </div>
                <div className="col-12 col-lg-6 p-2 p-lg-5">
                    <p>
                        The goal of this project was not only to replicate the look and feel of Zerodha, but also to gain practical experience in creating professional-grade fintech applications using modern technologies and clean design principles.
                    </p>

                    <p>
                        In addition, this project helped me strengthen my understanding of full-stack development workflows, component-based architecture, routing systems, API integration, and performance-focused web design.
                    </p>

                    <p>
                        TradeFlow is purely an educational and portfolio project built for learning, experimentation, and showcasing development skills through a real-world inspired application.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;