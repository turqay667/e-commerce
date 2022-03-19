import React  from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = ()=>{
   
const {women}=useSelector(state=>state.ProductsReducer)
        return (
            <>
            <h3>Category name</h3>
        <div className="card" >
     <section className='py-4 container'>
         <div className='row justify-content-center'>
            {/* <div className='col-11  col-md-6  col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'> */}
                    {women.map(product=>(

                  
                    <div className='col-3' key={product.id}>

<Link to={`/details_women/${product.id}`}><img src={`${product.thumb}`} className="card-img img-fluid"/></Link>
<div className='product-name'>
    {product.name}
    </div>
    <div className='product-price'>
        {product.price}<span>{product.currency}</span>
        </div>
                    </div>
                    ))}
                </div>
               
            {/* </div>
            </div> */}
            </section>
            </div>
            </>
        )
    }
export default Home;
