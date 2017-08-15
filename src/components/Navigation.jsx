import "./Navigation.scss";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";




class Navigation extends Component {
	render() {

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
			text: "CART" + " " + this.props.cartTotalItems,
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

export default Navigation;
