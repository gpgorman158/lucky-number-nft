import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    function handlePromo2 (){
        history.push("/play-slots")
    }
    function handlePromo1 (){
        history.push("/lucky-numbers")
    }

    return (
        <div className="home">
            {/* <Link to="/play-slots"> */}
                <div onClick={handlePromo2} className="promo-2 bounce">
                    <h2>NFT Gambing Slots</h2> 
                    <img src="https://news100.org/wp-content/uploads/2021/12/Christies-NFT-Auction-with-OpenSea-Fails-to-Impress-with-Middling-1022x570.png" alt="NFT Gambling Slots"/> 
                </div>
            {/* </Link> */}
            {/* <Link to="/lucky-numbers"> */}
                <div onClick={handlePromo1} className="promo-1 bounce">
                    <h2>Lucky Number NFT</h2>
                    <img src="https://s32659.pcdn.co/wp-content/uploads/2021/04/BIC_cosmonautic_day_crypto_space.jpg.optimal.jpg" alt="Lucky Number NFTs"/>
                </div>
            {/* </Link> */}
        </div>
    )
}
export default Home;