import React, { useState } from "react";

function PickThree({user, setUser}) {
    const [guess1, setGuess1] = useState ()
    const [guess2, setGuess2] = useState ()
    const [guess3, setGuess3] = useState ()
    const [nftOne1, setNftOne1] = useState({})
    const [nftTwo2, setNftTwo2] = useState({})
    const [nftThree3, setNftThree3] = useState({})
    const [playClick1, setPlayClick1] = useState(false)

    function handlePickThree (e){
        e.preventDefault()
        if (user){
            if (user.money >= 10) {
                user.money = user.money - 10
                fetch(`/nfts/${guess1}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftOne1(nftJson)
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
                fetch(`/nfts/${guess2}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftTwo2(nftJson)
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
                fetch(`/nfts/${guess3}`)
                .then(resp => resp.json())
                .then(nftJson => {
                    setNftThree3(nftJson)
                    setPlayClick1(true)
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
    }

    return (
        <div className="pick-three">
            <h1>Pick Your Lucky Numbers and Win!</h1>
            <h2>Information:</h2>
                <ul>
                    <li>Win 3 NFTs for each round played</li>
                    <li>Each round costs $10</li>
                    <li>Numbers must be between 1 and 300</li>
                </ul>
            <form onSubmit={handlePickThree}>
                <label htmlFor="guess-1">Lucky Number 1: </label>
                <input
                    type="number"
                    id="guess-1"
                    value={guess1}
                    onChange={(e) => setGuess1(e.target.value)}
                />
                <br></br>
                <label htmlFor="guess-2">Lucky Number 2: </label>
                <input
                    type="number"
                    id="guess-2"
                    value={guess2}
                    onChange={(e) => setGuess2(e.target.value)}
                />
                <br></br>
                <label htmlFor="guess-3">Lucky Number 3: </label>
                <input
                    type="number"
                    id="guess-3"
                    value={guess3}
                    onChange={(e) => setGuess3(e.target.value)}
                />
                <br></br>
                <button variant="fill" color="primary" type="submit">
                    Play!
                </button>
            </form>
            <div className="slot-container">
                <div className={playClick1 ? "nft-card" : "slot-box-1"}>
                    {playClick1 ? <img src={nftOne1.image} alt={nftOne1.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick1 ? <div> {nftOne1.title}</div> : "" }
                    {playClick1 ? <div> {nftOne1.value}</div> : "" }
                </div>
                <div className={playClick1 ? "nft-card" : "slot-box-2"}>
                    {playClick1 ? <img src={nftTwo2.image} alt={nftTwo2.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick1 ? <div> {nftTwo2.title}</div> : "" }
                    {playClick1 ? <div> {nftTwo2.value}</div> : "" }
                </div>
                <div className={playClick1 ? "nft-card" : "slot-box-3"}>
                    {playClick1 ? <img src={nftThree3.image} alt={nftThree3.title}/> : <img src="https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg"/> }
                    {playClick1 ? <div> {nftThree3.title}</div> : "" }
                    {playClick1 ? <div> {nftThree3.value}</div> : "" }
                </div>
            </div>
        </div>
    )
}
export default PickThree;