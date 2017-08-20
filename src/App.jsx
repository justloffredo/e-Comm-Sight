import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "reducers";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Gallery from "pages/Gallery";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Contact from "pages/Contact";
import Success from "pages/Success";
import FourOFour from "pages/404";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	state = {
		// products: PRODUCTS,
		cart: [],
		cartTotalItems : 0,
	};


 // 	_getProduct = (productId) => {
	// 	return this.state.products.reduce((prev, product) => {
	// 			return product.id === productId ? product : prev;
	// 	});
	// }

	_addToCart = (productId) => {
		const { cart, products } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
			cartTotalItems: cart.length + 1,
		});

	}

	// _removeFromCart = (itemId) =>{
	// 	const { cart, items } = this.state;
	// 	this.setState({
	// 		cart: [
	// 			...cart.
	//
	// 		]
	// 	})
	// }

	render() {
		const { products, cart, cartTotalItems } = this.state;
		return (
			<Provider store={store}>
			<BrowserRouter>
				<div>
					<Navigation cartTotalItems = {this.state.cartTotalItems}/>
					<Switch>
						<Route exact path ="/" component = {Home}/>
						<Route exact path = "/about" component = {About}/>
						<Route exact path = "/gallery" component= {Gallery}/>
						<Route exact path = "/product/:productId" component = {Product}/>
						<Route exact path = "/cart" render = {(props) => {
							return (
								<Cart
									cart = {cart}
									cartTotalItems = {cartTotalItems}
								/>
							);
						}}/>
						<Route exact path = "/checkout" render = {(props) => {
							return (
								<Checkout
								/>
							);
						}}/>
						<Route exact path = "/contact" component = {Contact}/>
						<Route exact path = "/success" component = {Success}/>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
		);
	}
}

export default App;
