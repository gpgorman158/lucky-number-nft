import React, { useState } from "react";
import NftCard from "./NftCard";

function Profile({user, setUser}) {
    const [money, setMoney] = useState(0)
    
    function handleAddMoney (e){
        e.preventDefault()
        let newMoneyAmount = user.money + money
        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers: {
                    "Content-Type": "application/json"
               },
            body: JSON.stringify({money: newMoneyAmount}),
            }).then(resp => resp.json())
            .then(moneyJson => setUser(moneyJson))
    }

    return (
        <>
            <div className="profile-money">Add Money to Your Account
                    <form onSubmit={handleAddMoney}>
                        <label htmlFor="add-money"></label>
                        <div className="money-input">
                            <input
                                type="number"
                                id="add-money"
                                value={money}
                                onChange={(e) => setMoney(parseInt(e.target.value))}
                            />
                        </div>
                        <br></br>
                        <button variant="fill" color="primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            <div className="profile">
                {user ? user.nfts.map(nft => <NftCard nft={nft} key={nft.id}/>) : <h1>Win Nfts and check your collection here</h1>}
            </div>
        </>
    )
}
export default Profile;