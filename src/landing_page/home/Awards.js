import React from 'react';

function Awards() {
    return (
      <div className="container mt-5 mb-5">
        <div className = "row">
          <div className="col-6 p-5">
            <img src="media/largestBroker.svg" style = {{width: "70%"}} alt="Award" />
          </div>
          <div className="col-6 p-5">
            <h1 className="fs-3">Modern Trading Made Simple</h1>
            <p className="mb-5">TradeFlow is designed to help users trade and invest seamlessly with real-time insights, intuitive dashboards, and a smooth investing experience.</p>
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
              <img src="media/pressLogos.png" style={{width: "92%"}}/>
            </div>
          </div>
        </div>
      </div> 
    );
}

export default Awards;