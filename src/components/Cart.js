import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {BsDash} from 'react-icons/bs'
import {BsPlus} from 'react-icons/bs'
import {FaTrashAlt} from 'react-icons/fa'
// import CartReducer from "../store/reducers/CartReducer";
const Cart=()=>{
    const {products}=useSelector(state=>state.CartReducer)
    const dispatch=useDispatch()
    return (
    <div>

        <div className="cart">
            <div className="container">
                <h2 className="cart-title">Cart</h2>
            </div>
            {products.length>0 ? <>
            <div className="row">
                <div className="col-md-9">
                  {products.map(product=>(
                      <div className="row tables" key={product.id}>
                     <div className="col-2">
                        <div className="product-title">
                            {product.name}
                            </div>
                         <div className="prize">
                             {product.currency}
                           <span className="" >{product.price}.00</span>
                             </div>
                             <div className='size'>
                    <button className='btn'>S</button><br/>  
                   <button className='btn'>M</button>  
                   </div>
                   </div>
                   <div className="col-md-2">
                           <div className="cart-image">
                           <img src={`/${product.thumb}`} alt="first image"/>
                        </div>
                      </div>
                      <div className="col-md-4">
                      <div className='pro-details'>
                    <span className='dec' onClick={()=>dispatch({type:'DEC',payload:product.id})}><BsDash/></span>  
                    <span className="quantity">{product.quantity}</span>
                   <span className='inc' onClick={()=>dispatch({type:'INC',payload:product.id})}><BsPlus/></span>  
                  
                    </div>
                          </div>
                        <div className="col-md-2">
                            <div className="total-prize">
                                {product.price*product.quantity}.00
                                </div>
                            </div>
                          <div className="col-md-2">
                              <div className="remove" onClick={()=>dispatch({type:'Remove',payload:product.id})}>
                              <FaTrashAlt/>
                                  </div>
                              </div>
                              </div>
                ))}
                   
</div>

</div>
</> : 'Your Cart is empty!'} 
            </div>
        </div>
         
    // </div>
    )
    }
export default Cart;