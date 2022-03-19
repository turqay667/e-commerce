import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import store from '../store'
import {BsDash} from 'react-icons/bs'
import {BsPlus} from 'react-icons/bs'
const Details=()=>{
    const[quantity,setQuantity]=useState(1)
    const{id}=useParams()
    const dispatch=useDispatch()
    const {product}=useSelector(state=>state.ProductsReducer)
    // const {product}=useSelector(state=>state.ProductsReducer)
    useEffect(()=>{
dispatch({
    type:'women',id })
    },[id])
// dispatch({
//     type:'men',id })
// dispatch({
//     type:'kids',id })
    
// })
 const decQuantity=()=>{
     if(quantity>1){
         setQuantity(quantity-1)
     }
 }

  
    return (
        <div>
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-2'>
<div className='small-images' >
<ul className='imglist'>

  <li><img src={`/${product.thumb}`} alt="" /></li>
 <li><img src={`/${product.thumb}`} alt="" /></li>
 <li><img src={`/${product.thumb}`} alt="" /></li> 
 </ul>
</div>
</div>
<span className='col-md-6'><img src={`/${product.thumb}`} alt="" /></span> 
                {/* <div className='col-md-6'>
<div className='image' > */}
 
{/* </div> */}
 {/* </div> */}
                <div className='col-md-4' >
                <div className='products-name'>
                    {product.name}
                    </div> 
                    <h2 className='price-text'>Size:</h2>
                    <br/>
                    <div className='size'>
                    <button className='btn'>XS</button>
                    <button className='btn'>S</button>
                    <button className='btn'>M</button>
                    <button className='btn'>L</button>
                    </div>
                    <div className='price-details'>
                    <h2 className='price-text'>Price:</h2>
                    <h3>{product.price}<span>{product.currency}</span></h3>
                    </div>
                    <div className='pro-details'>
                    <span className='dec' onClick={decQuantity}><BsDash/></span>  
                   <span className='quantity' >{quantity}</span>  
                   <span className='inc' onClick={()=>setQuantity(quantity+1)}><BsPlus/></span>  
                    </div>
                   <div className='add'><button className='btn btn-success' onClick={()=>dispatch({ type:'Add_To_Cart',payload:{product,quantity} })}>Add To Cart</button></div> 
                    <div className='products-desc'>
                        {product.desc}
                        </div>   
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Details;