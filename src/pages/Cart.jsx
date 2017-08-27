import React, { Component } from "react";
import { Grid, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Cart.scss";

class Cart extends Component {

	render() {
		const { cartTotalItems, cart } = this.props;

		const totalPrice = cart.reduce(function(prev, item) {
			return prev + parseFloat(item.price);
		},0);

		if (cartTotalItems > 0) {

			return (

				<Grid centered>
    		<Grid.Column width={4}>
						<h1>Cart</h1>
						<List>
							{cart.map((item) => {
								return (
									<List.Item>
										<div className="cart-items">
											<h1 className="cart-item-name">{item.name}</h1>
											<img className= "cart-item-image" src= {item.images[0].medium}/>
											<h3 className="cart-item-price"> $ {item.price}</h3>
										</div>
									</List.Item>
								);
							})}
						</List>
						<div className="cart-checkout-button">
							<Link to= "/checkout">
								<Button className="cart-checkout-button"> CHECKOUT </Button>
							</Link>
						</div>
						<p className="cart-total-price">Total Price $ {totalPrice.toFixed(2)}</p>
					</Grid.Column>
				</Grid>
			);
		}
		else {
			return (
				<Grid centered>
    		<Grid.Column width={12}>
						<p>Your cart is currently empty. Please try one of our fine watches.</p>

						<p className="cart-total-price">Total Price $ {totalPrice.toFixed(2)}</p>
					</Grid.Column>
				</Grid>
			);
		}
	}
}

Cart.propTypes = {
	cartTotalItems: PropTypes.number,
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			category: PropTypes.string,
			description: PropTypes.string,
			rating: PropTypes.number,
			price: PropTypes.string,
			specs: PropTypes.arrayOf(PropTypes.shape({
				0: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				1: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				2: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				3: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				4: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				5: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				6: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				7: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				8: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				9: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				10: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				11: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				12: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				13: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				14: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
			})),
			images: PropTypes.arrayOf(PropTypes.shape({
				0: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				1: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				2: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
			})),
		}),
	})),

};

function mapStateToProps(state, props) {
	return {
		cartTotalItems: state.cart.cartTotalItems,
		cart: state.cart.cart,
	};
}


export default connect (mapStateToProps) (Cart);
