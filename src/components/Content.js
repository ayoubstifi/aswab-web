import React from "react";
import './Sidebar.css'
import { Switch, Route } from "react-router-dom";

import Header from "./content/Header";
import Home from './content/appScreens/Home';
import Cart from './content/appScreens/Cart';
import MyOrders from './content/appScreens/MyOrders';
import Wish from './content/appScreens/Wish';
//import { CartContextProvider } from '../global/CartContext'
//import { ProductsContextProvider } from '../global/ProductsContext'
import { BrowserRouter} from 'react-router-dom'
import Login from './content/appScreens/Login';
import Signup from './content/appScreens/Signup';
import Account from "./content/appScreens/Account";

const Content = () => {
  return (
  //    <ProductsContextProvider>
    //            <CartContextProvider>
       <div className={"content"} >
        <Header/>
        <div style={{display:'flex',justifyContent:'center'}} >
            <Switch >
                <Route exact path="/" component={Home} />
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/orders">
                    <MyOrders />
                </Route>
                <Route path="/wish">
                    <Wish />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/account" component={Account} />
            </Switch>
        </div>
      </div>
       //          </CartContextProvider>
        //    </ProductsContextProvider>     
    
  );
};

export default Content;

