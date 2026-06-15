import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container my-5">
            <div className="row align-items-center justify-content-between gy-5">
                {/* Left Image */}
                <div className="col-12 col-lg-7 text-center mb-5 mb-lg-0">
                    <img src={imageURL} className="img-fluid" style={{ maxWidth: "90%" }} />
                </div>

                {/* Right Text */}
                <div className="col-12 col-lg-5 ps-lg-5 text-center text-lg-start" style={{ color: "#424242" }}>

                    <h2 className="fs-4 mb-4" style={{ color: "#424242" }}>{productName}</h2>

                    <p style={{
                        lineHeight: "1.8",
                        fontSize: "1rem"
                    }}>{productDescription}</p>

                    <div className="mt-4 d-flex gap-4 flex-wrap justify-content-center justify-content-md-start">
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>

                        <a href={learnMore} className="ms-md-4" style={{ textDecoration: "none" }} >Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
                        <a href={googlePlay}>
                            <img src="media\googlePlayBadge.svg" className="img-fluid"
                                style={{ maxWidth: "170px" }}
                            />
                        </a>

                        <a href={appStore}>
                            <img src="media\appstoreBadge.svg" className="img-fluid"
                                style={{ maxWidth: "170px" }} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;