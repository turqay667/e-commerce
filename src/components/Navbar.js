import React from "react";
import {Link} from 'react-router-dom'
import {FiShoppingBag} from  "react-icons/fi"
import {FaShoppingCart} from  "react-icons/fa"
import { useSelector } from "react-redux";
import ProductsReducer from "../store/reducers/ProductsReducer";
function Navbar(){
    const navStyle={
        color:"white",
     fontSize:20,
     textDecoration:"none"

    };
    const{totalQuantities}=useSelector(state=>state.CartReducer)
    const {products}=useSelector(state=>state.CartReducer)
    return(
        <nav>
             
            <ul className='nav-links'>
               <Link style={navStyle} to="/women">
               <li>Women</li>
               </Link>
           <Link style={navStyle} to="/men">
           <li>Men</li>
           </Link>
           <Link style={navStyle} to="/kids">
           <li>Kids</li>
           </Link>
              
            </ul>
           
            <ul className='icons'>
            <FiShoppingBag/>
       
            {/* <div className='select'> */}
            </ul>
            <div className="icons">
            {products.map(product=>(
                  <>
            <select className='money'>
            
          
           
              
               <option hidden className="hide">$</option> 
               <option value="1"> {product.currency} USD</option>
               <option value="2" > € EUR</option>
               <option value="3"> ¥ JPY</option>
              
         
              </select>
              </>
          
        
          ))}
          
          <Link to="/cart"><FaShoppingCart className="cart-icon"/></Link> <span className="prod-quantity">{totalQuantities}</span></div>
          
          
        
           
            
        </nav>
    )
    
}
export default Navbar;