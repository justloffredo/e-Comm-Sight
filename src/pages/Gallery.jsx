import "./gallery.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Gallery extends Component {
	render() {
		return (
			<div className = "Gallery">
				{PRODUCTS.map((product, index) => {
					return [
						<div className = "gallery-item">
							<Link to= {`/item/${index}`}>
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
		);
	}
}

export default Gallery;
