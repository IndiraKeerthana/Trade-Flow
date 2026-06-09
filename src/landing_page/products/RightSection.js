import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className="container my-5">
            <div className="row align-items-center justify-content-between gy-5">
                

                {/* Left Text */}
                <div className="col-12 col-lg-5 ps-lg-5 text-center text-lg-start" style={{ color: "#424242" }}>

                    <h2 className="fs-4 mb-4" style={{ color: "#424242" }}>{productName}</h2>

                    <p style={{
                        lineHeight: "1.8",
                        fontSize: "1rem"
                    }}>{productDescription}</p>

                    <div className="mt-4 d-flex gap-4 flex-wrap justify-content-center justify-content-md-start">
                        <a href={learnMore} className="" style={{ textDecoration: "none" }} >Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>

                {/* Right Image */}
                <div className="col-12 col-lg-7 text-center mb-5 mb-lg-0">
                    <img src={imageURL} className="img-fluid" style={{ maxWidth: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;