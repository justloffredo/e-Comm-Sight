import "./gallery.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Gallery extends Component {
	render() {
		return (
			<div className = "Gallery">
				<h1>Gallery</h1>
				{PRODUCTS.map((product) => {
					return [ <div className = "gallery-item"> <h3 className = "gallery-name"> {product.name}</h3> <img className= "gallery-image-main" src= {product.images[0].medium}/>
					<div className = "gallery-image-previews"> <img className= "gallery-image" src= {product.images[1].small}/>
						<img className= "gallery-image" src= {product.images[2].small}/>
					</div>
						</div>];
							})}
			</div>
		);
	}
}

export default Gallery;
