import "./gallery.scss";
import { Grid, Item, Rating } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "actions/products";
import Loader from "components/Loader.jsx";
import PropTypes from "prop-types";
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

										<p className = "gallery-name"> {product.name}</p>

										<Link key = {product.id} to= {`/product/${product.id}`}>
											 <img className= "gallery-image-main" src= {product.image.large}/>
										 </Link>
										 <div className= "gallery-image-details">
								 		 <p className= "gallery-rating">Rating {product.rating} out of 10</p>
										 <p className= "gallery-price"> ${product.price}</p>
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

Gallery.propTypes = {
	products: PropTypes.arrayOf
	(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.string,
		rating: PropTypes.number,
		image: PropTypes.shape({
			small: PropTypes.string,
			medium : PropTypes.string,
			large : PropTypes.string,
			original : PropTypes.string,
		}),
	})).isRequired,
	isLoading: PropTypes.bool,
	error: PropTypes.string,

	// Actions
	getAll: PropTypes.func.isRequired,
};

// Connect state to INITIAL_STATE of products reducer
function mapStateToProps(state, props) {
	return {
		products: state.products.products,
		isLOADING: state.products.isLOADING,
		error: state.products.error,
	};
}

export default connect(mapStateToProps, { getAll }) (Gallery);
