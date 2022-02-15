import React, {useEffect, useState} from "react";
import '../assets/css/Home.css'
import CoinDesc from "../components/Coininfo";

export default function Home(){

    const [coins, setCoins] = useState(null)
    const [fetching, setFetching] = useState(true)

    const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    
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
        }, 1000);
    }, [])

    return (
        <div>
            {
                fetching && <div class="ring">Loading
                                <span></span>
                            </div>
            }
            {
                coins && coins.map(coin => 
                    // <li>{coin.symbol}</li>
                    <CoinDesc />
                )
            }
        </div>
    );
}