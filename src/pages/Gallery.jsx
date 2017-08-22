import "./gallery.scss";
import { Grid, Item, Rating } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "actions/products";
import Loader from "components/Loader.jsx";
import { connect } from "react-redux";

class Gallery extends Component {
	componentDidMount() {
		this.props.getAll();
	}
	render() {
		const { products, isLOADING, error } = this.props;
		let content;

		if (isLOADING) {
			content = <Loader/>;
		}

		else if (!products) {
			content = <div className = "Gallery-Error">{ error }</div>;
		}

		else {
			content = (
			<Grid centered>
    		<Grid.Column width={12}>
					<div className = "Gallery">
						{products.map((product) => {
							return [
								<div className = "gallery-item">
									<Link key = {product.id} to= {`/product/${product.id}`}>
										<h3 className = "gallery-name"> {product.name}</h3>
									</Link>
										 <img className= "gallery-image-main" src= {product.image.medium}/>
										 <div className= "gallery-image-details">
								 		 <img className= "gallery-image-side" src= {product.image}/>
										 <h3 className= "gallery-price"> ${product.price}</h3>
										 </div>
									 </div>];
							})}
						</div>
					</Grid.Column>
				</Grid>
			);
		}
		return (
			<div className="Gallery">
				{ content }
			</div>
		);
	}
}


// Connect state to INITIAL_STATE of products reducer
function mapStateToProps(state, props) {
	return {
		products: state.products.products,
		isLOADING: state.products.isLOADING,
		error: state.products.error,
	};
}

export default connect(mapStateToProps, { getAll }) (Gallery);
