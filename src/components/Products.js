import React,{useContext} from 'react';
import{ProductContext} from '../context/products'
import {CartContext} from '../context/cart'

// Components
import Product from './Product';
const Products = props => {
const prodData = useContext(ProductContext)
const cartData = useContext(CartContext)
console.log(cartData)


	return (
		<div>
			{prodData.map(item=>{
				return<Product key={item.id} addItem={cartData.additem} product ={item}/>
			})}
		</div>
		
	);
};

export default Products;
