import React, { Component } from "react";
import { Grid, List, Button } from "semantic-ui-react";

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
										<div className="cart-items-container">
											<h1>{item.name}</h1>
											<img src={item.images[0].small} />
											<h3>{item.price}</h3>
										</div>
									</List.Item>
								);
							})}
						</List>
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Cart;
