import firebase from 'firebase/app'
import React,{useState,useEffect} from 'react'
import 'firebase/database'

 function Product(){
         const [produit , setProduct] = useState([]);
      // const ref =firebase.firestore().collection('product');

      useEffect(()=>{
            firebase.database().ref('/').on('value',function(snap){
                  console.log(snap.val())
                  snap.forEach((child)=>{
                        setProduct(child.val())
                  })
            })
            /*firebase.database().ref('produit/').set({
                  name:'produit 1',
                  price:200
            })*/
      },[])

      return (
      
      //   <div>
                  
                  // return (
                        <div>
                              <h1>price {produit} </h1>
                              {/* {produit.map((product) => (
                                    <div><h1>{product.price}</h1></div>
                              ) )} */}
                        </div>
                  //)

      //   </div>
      )
 }
export default Product;
  //console.log("connecter")
  
  