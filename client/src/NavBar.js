import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar( {onLogout, user} ) {

    function handleLogout (user){
        fetch("/logout_back", {
            method: "DELETE"}
        )
        onLogout(user);
    }
    const loginOption = 
    <>
        <div className="login-loggedin">
            { user ? <div>Welcome <em>{user.username}</em></div> : "" }
            { user ? <div>{`Balance: $${user.money}`}</div> : "" }
        </div>
        <Link to="/profile">Profile</Link>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
    </> 
    const loginOptionTwo = 
    <>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/signup">Sign Up</Link>
    </>

    return (
        <div className="header-all">
            <div className="header-title">
                <img src="/Lucky_Number_NFT-logos_transparent.png" alt="Lucky Number NFTs Logo"/>
            </div>
            <div className="header-links">
                <NavLink to="/play-slots">Play Slots</NavLink>
                <NavLink to="/lucky-numbers">Pick Your Numbers</NavLink>
                <NavLink to="/nft-gallery">NFT Gallery</NavLink>
            </div>
            <div className="header-right">
                { user ? loginOption : loginOptionTwo }
            </div>
        </div>
        
        )
}

export default NavBar;