import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Gallery from "pages/Gallery";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Contact from "pages/Contact";
import PRODUCTS from "json/products.json";



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path ="/" component = {Home}/>
						<Route exact path = "/about" component = {About}/>
						<Route exact path = "/gallery" component = {Gallery}/>
						<Route exact path = "/item/:itemId" component = {Item}/>
						<Route exact path = "/cart" component = {Cart}/>
						<Route exact path = "/checkout" component = {Checkout}/>
						<Route exact path = "/contact" component = {Contact}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
