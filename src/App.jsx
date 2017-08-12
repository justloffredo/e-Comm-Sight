import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Gallery from "pages/Gallery";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Contact from "pages/Contact";
import PRODUCTS from "json/products.json";



class App extends React.Component {
	state = {
		products: PRODUCTS,
		cart: [],
	};


 	_getProduct = (productId) => {
		return this.state.products.reduce((prev, product) => {
				return product.id === productId ? product : prev;
		});
	}

	_addToCart = (productId) => {
		const { cart, products } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
		});
		console.log(cart);
	}

	render() {
		const { products, cart } = this.state;
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path ="/" component = {Home}/>
						<Route exact path = "/about" component = {About}/>
						<Route exact path = "/gallery" render = {(props) => {
						return (
							<Gallery
								products = {products}
						/>
					)
				}}/>
						<Route exact path = "/product/:productId" render = {(props) => {
							return (
								<Product
									product = {this._getProduct(props.match.params.productId)}
									addToCart = {this._addToCart}

								/>
							)
						}}/>
						<Route exact path = "/cart" render = {(props) => {
							return (
								<Cart
									cart = {cart}
								/>
						);
					}}/>
						<Route exact path = "/checkout" component = {Checkout}/>
						<Route exact path = "/contact" component = {Contact}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
