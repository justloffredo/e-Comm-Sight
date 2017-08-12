import "./gallery.scss";
import { Grid, Item, Rating } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gallery extends Component {
	render() {
		const { products } = this.props;
		return (
			<Grid centered>
    		<Grid.Column width={12}>
					<div className = "Gallery">
						{products.map((product) => {
							return [
								<div className = "gallery-item">
									<Link key = {product.id} to= {`/product/${product.id}`}>
										<h3 className = "gallery-name"> {product.name}</h3>
									</Link>
										 <img className= "gallery-image-main" src= {product.images[0].large}/>
										 <div className= "gallery-image-details">
								 		 <img className= "gallery-image-side" src= {product.images[1].medium}/>
										 <h3 className= "gallery-price"> ${product.price}</h3>
										 </div>
									 </div>];
						})}
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Gallery;
