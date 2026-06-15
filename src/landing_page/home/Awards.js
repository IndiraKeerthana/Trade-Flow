import React from 'react';

function Awards() {
    return (
      <div className="container mt-4 mt-lg-5 mb-4 mb-lg-5">
        <div className = "row align-items-center gy-4">
          <div className="col-12 col-lg-6 p-3 p-lg-5 text-center text-lg-start">
            <img src="media/largestBroker.svg" className="img-fluid" style = {{width: "70%", maxWidth: "420px"}} alt="Award" />
          </div>
          <div className="col-12 col-lg-6 p-3 p-lg-5">
            <h1 className="fs-3">Modern Trading Made Simple</h1>
            <p className="mb-4 mb-lg-5">TradeFlow is designed to help users trade and invest seamlessly with real-time insights, intuitive dashboards, and a smooth investing experience.</p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li><p>Futures and Options</p></li>
                  <li><p>Commodity derivatives</p></li>
                  <li><p>Currency derivatives</p></li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li><p>Stocks & IPOs</p></li>
                  <li><p>Direct Mutual Funds</p></li>
                  <li><p>Bonds and Govt. Securities</p></li>
                </ul>
              </div>
              <img src="media/pressLogos.png" className="img-fluid" style={{width: "92%"}} alt="Press logos" />
            </div>
          </div>
        </div>
      </div> 
    );
}

export default Awards;