import React, { useState } from "react";
import NftCard from "./NftCard";

function Gallery({nftList}) {
    // let index = 0;
    let filteredNftList = [];
    if(nftList){
        filteredNftList.push(nftList[0])
        for (let i = 1; i < nftList.length - 1; i++){
            if (nftList[i].title !== nftList[i-1].title){
                filteredNftList.push(nftList[i])
            }     
        }
    }

    return (
        <div className="profile">
            {nftList.length > 0 ? filteredNftList.map(nft => <NftCard nft={nft} key={nft.id}/>) : <h1>Gallery Loading...</h1>}
        </div>
    )
}
export default Gallery;