import "./Navigation.scss";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";




class Navigation extends Component {
	render() {
		console.log(this.props);
		const { cartTotalItems } = this.props;

		const links = [{
			to: "/about",
			text: "ABOUT",
		},	{
			to: "/gallery",
			text: "WATCHES",
		}, {
			to: "/contact",
			text: "CONTACT",
		}, {
			to: "/cart",
			text: "CART" + " " + cartTotalItems,
		}];

		return (
			< Menu >
				< Menu.Menu>
					<Menu.Item position="left">
						<Link to="/" className="Nav-Link-Home">
							ODYSSEY TIME
						</Link>
					</Menu.Item>
				</Menu.Menu>
				< Menu.Menu position= "right">
					{links.map((link, index) => {
						return (
							<Menu.Item key= {index}>
								<NavLink
									key= {link.to}
									to= {link.to}
									className= "Nav-link"
									activeClassName= "is-active">
									{link.text}
								</NavLink>
							</Menu.Item>
						);
					})}
					</Menu.Menu>

			</Menu>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		cartTotalItems: state.cart.cartTotalItems,
	};
}

export default connect(mapStateToProps) (Navigation);
