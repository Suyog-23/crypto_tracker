import React, {useEffect, useState} from "react";
import '../assets/css/Home.css'
import CoinDesc from "../components/Coininfo";

export default function Home(){

    const [coins, setCoins] = useState(null)
    const [fetching, setFetching] = useState(true)

    const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    
    useEffect(() => {
        setTimeout(() => {
            fetch(api_url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setCoins(data)
            setFetching(false)
        })
        }, 2000);
    }, [])

    return (
        <div>
            {
                fetching && <div className="ring">Loading
                                <span></span>
                            </div>
            }
            {
                coins && coins.map(function (coin, index) { 
                    
                        if(index%2===0){
                            return <CoinDesc key={coin.id} name={coin.name} cap={coin.market_cap} symbol={coin.symbol} style={{"width":"100%","left":"0","height":"100px", "backgroundColor":"white"}} img={coin.image} price={coin.current_price} high={coin.high_24h} percent_change={coin.price_change_percentage_24h}/>
                        }
                        else{
                            return <CoinDesc key={coin.id} name={coin.name} cap={coin.market_cap} symbol={coin.symbol} style={{"width":"100%","left":"0","height":"100px", "backgroundColor":"#F8F8FA"}} img={coin.image} price={coin.current_price} high={coin.high_24h} percent_change={coin.price_change_percentage_24h}/>
                        }
                    }    
                    
                )
            }
        </div>
    );
}