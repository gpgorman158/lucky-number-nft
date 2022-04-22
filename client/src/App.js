import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import Signup from "./Signup";
import SlotThree from "./SlotThree"
import PickThree from "./PickThree"
import Gallery from "./Gallery"

function App() {
  const [user, setUser] = useState(null);
  const [nftList, setNftList] = useState({})
  const history = useHistory()
  // const [currentNfts, setCurrentNfts] = useState ({})

  useEffect(() => {
    fetch("/auto_login").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);
  useEffect(() => {
    fetch("/nfts").then((r) => {
      if (r.ok) {
        r.json().then((nftsJson) => {
          setNftList(nftsJson)
        });
      }
    });
  }, []);

  function onLogout(){
    setUser(null);
    history.push("/")
  }

  function onSignup(userJson){
    setUser(userJson)
    history.push("/")
  }
  return (
    
      <div className="App">
        <NavBar user={user} onLogout={onLogout}/>
        <Switch>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            <Signup user={user} onSignup={onSignup} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route exact path="/nft-gallery">
            <Gallery nftList={nftList} />
          </Route>
          <Route exact path="/lucky-numbers">
            <PickThree user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/play-slots">
            <SlotThree user={user} setUser={setUser} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
