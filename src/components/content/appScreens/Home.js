import firebase from 'firebase/app'
import React,{useState,useEffect} from 'react'
import { NavItem } from 'react-bootstrap';
import './screens.css';



function ReturnData(props) {

    const uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : '' ;
    let item = props.value;
    const [nmbCartItems , setNmbCartItems] = useState(0);

    useEffect(()=>{
        firebase.database().ref('users/'+uid+'/nmbCartItems').on('value',function(snap){
            if(snap.val()){
                setNmbCartItems(snap.val())
            }else{
                setNmbCartItems(0)
            }
        })
    },[])

    const toCart = ()=>{
        var to_cart = firebase.database().ref('users/'+uid+'/cart').push();
        var key = to_cart.key;
        to_cart.set({
            cartKey : key,
            name : item.name,
            price: item.price,
            picture: item.picture,
            description: item.description,
            key: item.key,
        })
        .then(()=>{
            firebase.database().ref('users/'+uid).update({
                nmbCartItems : nmbCartItems+1
            })
        })
        .then(()=>{ alert('produit added to cart') })
    }

    return(
        <div style={{border:'1px solid'}} className="card" >
            <img  src={item.picture}/> 
            <h1>name = {item.name} </h1> <br/>
            <p class="price">price = {item.price}</p> <br/>
            <p>descripption = {item.description}</p>
            <button onClick={()=> toCart() } >Add to Cart</button>
        </div>
    )
}

 function Product(){

    const [produit , setProduct] = useState([]);

    useEffect(()=>{
        firebase.database().ref('products/').on('value',function(snap){
            let returnArray = [];
            if(snap.val()){
                    snap.forEach((child)=>{
                        let data = child.val();
                        returnArray.push(data)
                    })
            }
            setProduct(returnArray);
        })
        
    },[])

    return (
        <div className='card_container' >
            {produit.map((item) => <ReturnData key={item.key} value={item} />)}
        </div>
    )
}
                  

export default Product;