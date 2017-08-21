import React, { Component } from "react";
import { Grid, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Cart extends Component {

	render() {
		const { cartTotalItems } = this.props;
		const { cart } = this.props;

		const totalPrice = cart.reduce(function(prev, item) {
			return prev + parseFloat(item.price);
		},0);

		console.log(cartTotalItems);
		if (cartTotalItems > 0) {

		return (

			<Grid centered>
    		<Grid.Column width={12}>
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
					<div className="cart-checkout-button">
						<Link to= "/checkout">
							<Button> CHECKOUT </Button>
						</Link>
					</div>
					<p className="cart-total-price">Total Price {totalPrice}</p>
				</Grid.Column>
			</Grid>
		);
	}
		else {
			return (
			<Grid centered>
    		<Grid.Column width={12}>
						<h1>YOUR CART IS EMPTY!!</h1>

					<p className="cart-total-price">Total Price {totalPrice}</p>
				</Grid.Column>
			</Grid>
		);
		}
	}
}

function mapStateToProps(state, props) {
	return {
		cartTotalItems: state.cart.cartTotalItems,
		cart: state.cart.cart,
	};
}


export default connect (mapStateToProps) (Cart);
