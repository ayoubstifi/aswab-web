import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './App.css'


import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Product from './components/Product';

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCFrtzv3lsw4B42I9XLxOnCtk5AVVp3RbU',
  authDomain: "aswak-app-a2249.firebaseapp.com",
  projectId: "aswak-app-a2249",
  storageBucket: "aswak-app-a2249.appspot.com",
  messagingSenderId: "847402799946",
  appId: "1:847402799946:web:e9b0c12bce3865f32c27b3",
  measurementId: "G-JZ447BVWER"
};  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

function App() {

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div>
          <Content />
          <Product/>
        </div>
      </div>
    </Router>
    
  );

}

export default App;