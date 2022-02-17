import React from "react";

export default function TopDesc(){
    return (
        <div className="topdesc" style={{"width":"100%","left":"0","height":"100px", "backgroundColor":"#171717","position":"fixed","zIndex":"4","top":"0","color":"white"}}>
            <div className="content">
                <div className="row">
                    <div className="coin-img col-lg-1 col-sm-2">
                        
                    </div>
                    <div className="coin-name col-lg-2 col-sm-2">
                        <h5>Currency</h5>
                    </div>
                    <div className="coin-current-price col-lg-2 col-sm-2">
                        <h5>Current Price</h5>
                    </div>
                    <div className="coin-current-price col-lg-2 col-sm-2">
                        <h5>High 24hrs</h5>
                    </div>
                    <div className="coin-current-price col-lg-2 col-sm-2">
                        <h5>24hrs %</h5>
                    </div>
                    <div className="coin-current-price col-lg-1.5 col-sm-2">
                        <h5>Market Cap</h5>
                    </div>
                    <div className="coin-current-price col-lg-1 col-sm-2">
                        
                </div>
            </div>
        </div>
        </div>
    );
}