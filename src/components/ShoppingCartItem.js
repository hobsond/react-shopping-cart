import React,{useContext} from 'react';
import {CartContext} from '../context/cart'



const Item = props => {
const cartData = useContext(CartContext)
const newArr = cartData.cart.filter(item=>{
	return item.id !== props.id
})
const removeItem = ()=>{
	cartData.subItem(newArr)
}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
