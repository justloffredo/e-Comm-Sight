import "./product.scss";
import { Grid, List, Button } from "semantic-ui-react";
import React, { Component } from "react";
import { getOne } from "actions/products";
import { addToCart } from "actions/cart";
import { connect } from "react-redux";
import Loader from "components/Loader.jsx";


class Product extends Component {
	componentDidMount() {
		this.props.getOne(this.props.productId);
	}


	_handleClick = (product) => {
		this.props.addToCart(this.props.product);
	};
	render() {
		const { product, isLOADING, error, cart, cartTotalItems } = this.props;
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
								<img className="product-image-side" src ={product.images[1].medium}/>
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

function mapStateToProps(state, props) {
	const { activeProduct, isLOADING, error } = state.products;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		isLOADING,
		error,
		cart: state.cart,
		cartTotalItems: state.cart,
	};
}

export default connect(mapStateToProps,  { getOne, addToCart }) (Product);
