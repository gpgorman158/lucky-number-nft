import React, { useState } from "react";

function SlotThree({user, setUser}) {
    const [nftOne, setNftOne] = useState({})
    const [nftTwo, setNftTwo] = useState({})
    const [nftThree, setNftThree] = useState({})
    const [playClick, setPlayClick] = useState(false)

    function handlePlay (){
        if (user){
            if (user.money >= 10) {
                user.money = user.money - 10
                let rand1 = Math.floor(Math.random() * 300)
                let rand2 = Math.floor(Math.random() * 300)
                let rand3 = Math.floor(Math.random() * 300)
                fetch(`/nfts/${rand1}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftOne(nftJson)
                    fetch('/joins', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({user_id: user.id, nft_id: nftJson.id}),
                    }).then(resp => resp.json())
                    .then(joinJson => console.log(joinJson))
                    }
                )
                fetch(`/nfts/${rand2}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftTwo(nftJson)
                    fetch('/joins', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({user_id: user.id, nft_id: nftJson.id}),
                    }).then(resp => resp.json())
                    .then(joinJson => console.log(joinJson))
                    }
                )
                fetch(`/nfts/${rand3}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftThree(nftJson)
                    setPlayClick(true)
                    fetch('/joins', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({user_id: user.id, nft_id: nftJson.id}),
                    }).then(resp => resp.json())
                    .then(joinJson => console.log(joinJson))
                    }
                )
                fetch(`/users/${user.id}`, {
                    method: "PATCH",
                    headers: {
                            "Content-Type": "application/json"
                        },
                    body: JSON.stringify({money: user.money}),
                    }).then(resp => resp.json())
                    .then(userJson => setUser(userJson))
            }
            else {
                alert("You don't have enough money in your account to play")
            }
        }
        else{
            alert("You need to login to play")
        }
    
            
        
        //add NFTs to user
        //custom text to appear
    }


    return (
        <div className="slots">
            <h1>Play Slots and Win!</h1>
            <h2>Information:</h2>
                <ul>
                    <li>Win 3 NFTs for each round played</li>
                    <li>Each round costs $10</li>
                    <li>Try your luck at winning NFTs worth up to $100</li>
                </ul>
            <button onClick={handlePlay}>Play!</button>
            <div className="slot-container">
                <div className={playClick ? "nft-card" : "slot-box-1"}>
                    {playClick ? <img src={nftOne.image} alt={nftOne.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick ? <div> {nftOne.title}</div> : "" }
                    {playClick ? <div> {nftOne.value}</div> : "" }
                </div>
                <div className={playClick ? "nft-card" : "slot-box-2"}>
                    {playClick ? <img src={nftTwo.image} alt={nftTwo.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick ? <div> {nftTwo.title}</div> : "" }
                    {playClick ? <div> {nftTwo.value}</div> : "" }
                </div>
                <div className={playClick ? "nft-card" : "slot-box-3"}>
                    {playClick ? <img src={nftThree.image} alt={nftThree.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick ? <div> {nftThree.title}</div> : "" }
                    {playClick ? <div> {nftThree.value}</div> : "" }
                </div>
            </div>
        
        </div>
    )
}
export default SlotThree;