import "./product.scss";
import { Grid, List, Button } from "semantic-ui-react";
import React, { Component } from "react";
import { getOne } from "actions/products";
import { addToCart } from "actions/cart";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "components/Loader.jsx";


class Product extends Component {
	componentDidMount() {
		this.props.getOne(this.props.productId);
	}


	_handleClick = (product) => {
		this.props.addToCart(this.props.product);
	};
	render() {
		const { product, isLOADING, error, cart } = this.props;
		let content;

		if (isLOADING) {
			content = <Loader/>;
		}

		else if (!product) {
			content = <div className = "Product Error"> { error } </div>;
		}
		else {
			content = (
				<Grid centered>
					<Grid.Column width={12}>
						<div className="product">
							<h1 className= "product-name">{product.name} </h1>
							<div className="product-images">
								<img className="product-image-side" src ={product.images[1].large}/>
								<img className="product-image-main" src ={product.images[0].medium}/>
								<img className="product-image-band" src ={product.images[2].medium}/>
							</div>

							<div className="product-description">
								<p>{product.description}</p>
							</div>
							<div className="product-specs">
								<List horizontal>
									{product.specs.map((specs) => {
										return [
											<List.Item className="product-specs-label"> {specs.label.toUpperCase()}: </List.Item>,
											<List.Item> {specs.value}  </List.Item>,
										];
									}
									)}
								</List>
							</div>
							<div className="product-price">
								<p> ${product.price} </p>
							</div>
							<div className="product-buy-button">
							<Button value = {product} onClick = {this._handleClick}> ADD TO CART </Button>
							{ console.log(cart) }
							</div>
						</div>
					</Grid.Column>
				</Grid>
			);
		}
		return (
			<div className= "Product">
				{ content }
			</div>
		);
	}
}

Product.propTypes = {
	productId: PropTypes.string.isRequired,
	product: PropTypes.shape({
		id: PropTypes.integer,
		name: PropTypes.string,
		category: PropTypes.string,
		description: PropTypes.string,
		rating: PropTypes.integer,
		price: PropTypes.string,
		specs: PropTypes.arrayOf(PropTypes.shape({
			0: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			1: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			2: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			3: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			4: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			5: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			6: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			7: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			8: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			9: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			10: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			11: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			12: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			13: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
			14: PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			}),
		})),
	}),
	images: PropTypes.arrayOf(PropTypes.shape({
		0: PropTypes.shape({
			original: PropTypes.string,
			small: PropTypes.string,
			medium: PropTypes.string,
			large: PropTypes.string,
		}),
		1: PropTypes.shape({
			original: PropTypes.string,
			small: PropTypes.string,
			medium: PropTypes.string,
			large: PropTypes.string,
		}),
		2: PropTypes.shape({
			original: PropTypes.string,
			small: PropTypes.string,
			medium: PropTypes.string,
			large: PropTypes.string,
		}),
	})),
	error: PropTypes.string,
	isLOADING: PropTypes.bool,
};

function mapStateToProps(state, props) {
	const { activeProduct, isLOADING, error } = state.products;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		isLOADING,
		error,
		cart: state.cart,
	};
}

export default connect(mapStateToProps,  { getOne, addToCart }) (Product);
