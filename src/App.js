import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAa0dVx3kH682kVlcUxChRP9VahoPEn3fs",
  authDomain: "aswak-web.firebaseapp.com",
  databaseURL: "https://aswak-web-default-rtdb.firebaseio.com",
  projectId: "aswak-web",
  storageBucket: "aswak-web.appspot.com",
  messagingSenderId: "799942771912",
  appId: "1:799942771912:web:0abf502ed898a6acdc51fd"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

function App() {

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    </Router>
    
  );

  // return (
  //   <Router>
  //     <Header setisOpen={sendDataToParent} isOpen={open} />
  //     <div style={{display:"flex"}} >
  //       <SideBar isOpen={open} />
  //       <div style={{backgroundColor:'green',width:'100%'}} >
  //         <Switch >
  //           <Route exact path="/">
  //             <Home />
  //           </Route>
  //           <Route path="/Cart">
  //             <Cart />
  //           </Route>
  //           <Route path="/MyOrders">
  //             <MyOrders />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </div>
  //   </Router>
  // );
}

export default App;