import React from 'react';

function Education() {
    return (
      <div className="container mt-4 mt-lg-5 pt-3 pt-lg-4">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <img src="media/education.svg" className="img-fluid" style={{ width: '70%', maxWidth: "420px" }} alt="Education" />
          </div>
          
          <div className="col-12 col-lg-6 mb-4 mb-lg-5">
            <h1 className="mb-4 fs-3">Free and open market education</h1>

            <p className="mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="" className = "" style = {{textDecoration: "none"}}>Varsity <i className="fa-solid fa-arrow-right-long"></i></a>

            <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="" className = "" style = {{textDecoration: "none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    );
}

export default Education;