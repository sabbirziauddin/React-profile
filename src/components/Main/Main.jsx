import React from 'react';
import user from '../../fakeData/users';
import { useState } from 'react';
import './Main.css';
import Display from '../Display/Display';
import Cart from '../Cart/Cart';

const Main = () => {

         const handlerAddUser =(users)=>{  
               // console.log("user added",users) 
               const newCart = [...cart,users];
               setCart(newCart);


         }
      
      const firstData15 = [...user];
      const [users,setUsers]=useState(firstData15);
      const [cart,setCart]=useState([]);

   return (
      <div className="main-container">
         <div className="user-container">
            {

            users.map(user=> <Display
             users ={user}
             handlerAdd={handlerAddUser}>
             </Display> )
           
            
            }
         
         </div>
         <div className="cart-container">
              <Cart cartt={cart} > </Cart> 
                  
         </div>
         
      </div>
   );
};

export default Main;