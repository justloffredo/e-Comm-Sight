import "./item.scss";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";


class Item extends Component {
	constructor(props) {
		super (props);
		this.state = {
			itemId: props.match.params.itemId,
		};
	}
	render() {
		const item = PRODUCTS[this.state.itemId];
		return (
			<Grid centered>
				<Grid.Column width={12}>
					<div className="item">
						<h1 className= "item-name">{item.name} </h1>
						<div className="item-images">
							<img className="item-image-side" src ={item.images[1].medium}/>
							<img className="item-image-main" src ={item.images[0].medium}/>
							<img className="item-image-band" src ={item.images[2].medium}/>
						</div>
						<div className="item-description">
							<p>{item.description}</p>
						</div>
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Item;
