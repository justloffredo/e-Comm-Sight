import React, { Component } from "react";
import { Grid, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { cart } = this.props;

		return (
			<Grid centered>
    		<Grid.Column width={12}>
					<div className="app">
						<h1>Cart</h1>
						<List>
							{cart.map((item) => {
								return (
									<List.Item>
										<div className="cart-items">
											<h1 className="cart-item-name">{item.name}</h1>
												 <img className= "cart-item-image" src= {item.images[0].small}/>
											<h3 className="cart-item-price">{item.price}</h3>
										</div>
									</List.Item>
								);
							})}
						</List>
					</div>
					<div className="cart-checkout-button">
						<Link to= "/checkout">
							<Button> CHECKOUT </Button>
						</Link>
					</div>

				</Grid.Column>
			</Grid>
		);
	}
}

export default Cart;
