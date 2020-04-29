import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const cartAll = props.cartt;
   //console.log(cartAll);
      // const total = cart.reduce((total,cartElement) => total+cartElement.income,0);
      let total = 0;
      for(let i =0;i<cartAll.length;i++){
         const newElement = cartAll[i];
         
      

         total =(total + newElement.income) ;
         

      }
     
   return (
      <div>

         <div className="div-cart">
                  <h2>User Summary</h2>
                  <h3> total User:{props.cartt.length}</h3>
                  <h4>Yearly Income:{total}</h4>
         
         </div>
         
      </div>
   );
};

export default Cart;