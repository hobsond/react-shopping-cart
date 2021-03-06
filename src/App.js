import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './context/products'
import {CartContext} from './context/cart'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		
		setCart([...cart,item])
	};

	const subItem = item=>{
		setCart(item)
	}
	const cartValue= {
		cart:cart,
		additem:addItem,
		subItem:subItem
	}

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={products}>
				
				<CartContext.Provider value={cartValue}>

					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart  />


					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>


		</div>
	);
}

export default App;
