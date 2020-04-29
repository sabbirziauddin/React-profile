import React from 'react';
import './Display.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Display = ( props) => {
// console.log(props);
const {img,name,email,income,phone } =props.users;
const {street,suite,city,zipcode} = props.users.address
   return (
      <div className ="display-container">
         <div className ="user-components">
            <img src={img} alt=""/>
            

         </div>

         <div className="user-address">
            <h3>Name: {name}</h3>
            <p>Address:{props.users.address.street}</p>
            <p><small>Street:{street}</small></p>
            <p>Email:{email}</p>
            <p><small>Zip Code:{zipcode}</small></p>
            <p>Income$:{income}</p>
            <p>Phone:{phone}</p>
            <button className="btn-user"
            onClick ={()=>props.handlerAdd(props.users)}>
            
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>  AddUser</button>

      
         </div>
         
      </div>
     
   );
};

export default Display;