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
			text: "GALLERY",
		}, {
			to: "/cart",
			text: "CART",
		}, {
			to: "/contact",
			text: "CONTACT",
		}];

		return (
			< Menu >
				< Menu.Menu>
					<Menu.Item position="left">
						<Link to="/" className="Nav-Link-Home" activeClassName= "is-active">
							ODYSSEY TIME
						</Link>
					</Menu.Item>
				</Menu.Menu>
				< Menu.Menu position= "right">
					{links.map((link) => {
						return (
							<Menu.Item>
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
