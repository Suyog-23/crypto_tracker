import React from "react";
import '../assets/css/Home.css'

export default function CoinDesc({name, style, img, price, high, percent_change, symbol, cap}){
    return (
        <div className="coindesc" style={style}>
            <div className="content">
                <div className="row">
                    <div className="coin-img col-lg-1">
                        <img src={img} height="50px" width="50px" />
                    </div>
                    <div className="coin-name col-lg-2">
                    <h6><b>{name}</b> ({symbol})</h6>
                    </div>
                    <div className="coin-current-price col-lg-2">
                    <h6>$ {price}</h6>
                    </div>
                    <div className="coin-current-price col-lg-2">
                    <h6>$ {high}</h6>
                    </div>
                    <div className="coin-current-price col-lg-2">
                        <h6>{percent_change}%</h6>
                    </div>
                    <div className="coin-current-price col-lg-2">
                        <h6>{cap}</h6>
                    </div>
                    <div className="coin-current-price col-lg-1">
                        <button type="button" class="btn btn-warning" style={{"color":"white"}}>Suscribe</button>
                    </div>  
                </div>
            </div>
        </div>
    );
}