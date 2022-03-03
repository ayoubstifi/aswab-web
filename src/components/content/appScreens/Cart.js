import React, { useContext, useEffect,useState } from 'react'
// import { CartContext } from '../../../Global/CartContext'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import './screens.css';

export default function Cart(){

    const uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : '' ;
    const [data,setData] = useState([]);

    const getData = ()=>{
        firebase.database().ref('users/'+uid+'/cart').on('value',function(snap){
            let returnArray = [];
            if(snap.val()){
                snap.forEach(function(child){
                    let data = child.val();
                    returnArray.push(data)
                })
            }
            setData(returnArray);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div  
        style={{backgroundColor:"red"}} className='card_container'>
            <h1>Cart</h1>
            {data.map(item=>{ 
                return(
                    <div className="card" >
                             <h1>name = {item.name} </h1> <br/>
                             <p class="price">price = {item.price}</p> <br/>
                             <p>descripption = {item.description}</p>
                    </div>
                )}
            )}
        </div>
    )
}
 



// export default function Cart () {

//     const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

//     const history = useHistory();


//     return (
//         <>
//              <>
//                 {shoppingCart.length !== 0 && <h1>Cart</h1>}
//                 <div className='cart-container'>
//                     {
//                         shoppingCart.length === 0 && <>
//                             <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
//                             <div><Link to="/">Return to Home page</Link></div>
//                         </>
//                     }
//                     {shoppingCart && shoppingCart.map(cart => (
//                         <div className='cart-card' key={cart.ProductID}>

//                             <div className='cart-img'>
//                                 <img src={cart.ProductImg} alt="not found" />
//                             </div>

//                             <div className='cart-name'>{cart.ProductName}</div>

//                             <div className='cart-price-orignal'>Rs {cart.ProductPrice}.00</div>

//                             <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
//                                 <h3> add </h3>
//                             </div>

//                             <div className='quantity'>{cart.qty}</div>

//                             <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
//                                 <h3> remove </h3>
//                             </div>

//                             <div className='cart-price'>
//                                 Rs {cart.TotalProductPrice}.00
//                             </div>

//                             <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
//                                 <h3> trash </h3>
//                             </button>
//                         </div>
//                     ))
//                     }
//                     {shoppingCart.length > 0 && <div className='cart-summary'>
//                         <div className='cart-summary-heading'>
//                             Cart-Summary
//                         </div>
//                         <div className='cart-summary-price'>
//                             <span>Total Price</span>
//                             <span>{totalPrice}</span>
//                         </div>
//                         <div className='cart-summary-price'>
//                             <span>Total Qty</span>
//                             <span>{totalQty}</span>
//                         </div>
//                         <Link to='cashout' className='cashout-link'>
//                             <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
//                                 Cash on delivery
//                         </button>
//                         </Link>
//                     </div>}
//                 </div>
//             </>
//         </>
//     )
// }