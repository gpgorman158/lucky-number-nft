import React, { useState } from "react";

function NftCard({nft}) {
    
    
    return (
        <div className="nft-card">
            <div className="nft-container">
                <img src={nft.image} alt={nft.title}/>
            </div>
            <div className="nft-details">
                <h3>{nft.title}</h3>
                <p>Value: {nft.value}</p>
            </div>
        </div>
    )
}
export default NftCard;