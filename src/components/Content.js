import React from "react";
import './Sidebar.css'
import { Switch, Route } from "react-router-dom";

import Header from "./content/Header";
import Home from './content/appScreens/Home';
import Cart from './content/appScreens/Cart';
import MyOrders from './content/appScreens/MyOrders';
import Wish from './content/appScreens/Wish';

const Content = () => {
  return (
      <div >
        <Header/>
        <div className={"content"}>
            
            <p>
                addil adil adil adil adil adil adil adil adil adil adil addil adil adil adil adil adil adil adil adil adil adil
                addil adil adil adil adil adil adil adil adil adil adil addil adil adil adil adil adil adil adil adil adil adil
                addil adil adil adil adil adil adil adil adil adil adil addil adil adil adil adil adil adil adil adil adil adil
                addil adil adil adil adil adil adil adil adil adil adil addil adil adil adil adil adil adil adil adil adil adil
                addil adil adil adil adil adil adil adil adil adil adil
            </p>

            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/orders">
                    <MyOrders />
                </Route>
                <Route path="/wish">
                    <Wish />
                </Route>
            </Switch>
        </div>
      </div>
    
  );
};

export default Content;

