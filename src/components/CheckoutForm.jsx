import React, { Component } from 'react';
import "./checkoutForm.scss";
import { Button, Form, Segment, Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { submitOrder } from "actions/checkout.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				name: "",
				address: "",
				city: "",
				state: "",
				zipCode: "",
				error: null,
			};
		}
	}

	// handleUpdateInput = (name) => {
	//   this.setState({ [name]: event.target.value }) // event.target = undefined
	// }
	_handleChange = (ev) => {
		this.setState({
			[ev.target.name]: [ev.target.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		const { cart, cartTotalItems } = this.props;
		this.props.submitOrder(this.state);
	}

	render() {
		const { name, address, zipCode, city, state, value } = this.state;
		const { error, orderSuccess, orderFailure, cart, cartTotalItems } = this.props;
		const options = [
			{ key:'AL', text:'Alabama', value:'AL' },
			{ key:'AK', text:'Alaska', value:'AK' },
			{ key:'AZ', text:'Arizona', value:'AZ' },
			{ key:'AR', text:'Arkansas', value:'AR' },
			{ key:'CA', text:'California', value:'CA' },
			{ key:'CO', text:'Colorado', value:'CO' },
			{ key:'CT', text:'Connecticut', value:'CT' },
			{ key:'DE', text:'Delaware', value:'DE' },
			{ key:'DC', text:'Washington D.C.', value:'DC' },
			{ key:'FL', text:'Florida', value:'FL' },
			{ key:'GA', text:'Georgia', value:'GA' },
			{ key:'HI', text:'Hawaii', value:'HI' },
			{ key:'ID', text:'Idaho', value:'ID' },
			{ key:'IL', text:'Illinois', value:'IL' },
			{ key:'IN', text:'Indiana', value:'IN' },
			{ key:'IA', text:'Iowa', value:'IA' },
			{ key:'KS', text:'Kansas', value:'KS' },
			{ key:'KY', text:'Kentucky', value:'KY' },
			{ key:'LA', text:'Louisiana', value:'LA' },
			{ key:'ME', text:'Maine', value:'ME' },
			{ key:'MD', text:'Maryland', value:'MD' },
			{ key:'MA', text:'Massachusetts', value:'MA' },
			{ key:'MI', text:'Michigan', value:'MI' },
			{ key:'MN', text:'Minnesota', value:'MN' },
			{ key:'MS', text:'Mississippi', value:'MS' },
			{ key:'MO', text:'Missouri', value:'MO' },
			{ key:'MT', text:'Montana', value:'MT' },
			{ key:'NE', text:'Nebraska', value:'NE' },
			{ key:'NV', text:'Nevada', value:'NV' },
			{ key:'NH', text:'New Hampshire', value:'NH' },
			{ key:'NJ', text:'New Jersey', value:'NJ' },
			{ key:'NM', text:'New Mexico', value:'NM' },
			{ key:'NY', text:'New York', value:'NY' },
			{ key:'NC', text:'North Carolina', value:'NC' },
			{ key:'ND', text:'North Dakota', value:'ND' },
			{ key:'OH', text:'Ohio', value:'OH' },
			{ key:'OK', text:'Oklahoma', value:'OK' },
			{ key:'OR', text:'Oregon', value:'OR' },
			{ key:'PA', text:'Pennsylvania', value:'PA' },
			{ key:'PR', text:'Puerto Rico', value:'PR' },
			{ key:'RI', text:'Rhode Island', value:'RI' },
			{ key:'SC', text:'South Carolina', value:'SC' },
			{ key:'SD', text:'South Dakota', value:'SD' },
			{ key:'TN', text:'Tennessee', value:'TN' },
			{ key:'TX', text:'Texas', value:'TX' },
			{ key:'UT', text:'Utah', value:'UT' },
			{ key:'VT', text:'Vermont', value:'VT' },
			{ key:'VA', text:'Virginia', value:'VA' },
			{ key:'WA', text:'Washington', value:'WA' },
			{ key:'WV', text:'West Virginia', value:'WV' },
			{ key:'WI', text:'Wisconson', value:'WI' },
			{ key:'WY', text:'Wyoming', value:'WY' },
		];

		let message;

		if (orderSuccess) {
			message = (<div className = "OrderFormSuccess">
				<Link to= "/gallery"> <p>Your Order has been submitted successfully! Please feel free to continue shopping here if you'd like.</p></Link>
			</div>);
		}

		if (orderFailure) {
			message = <div className = "OrderFormFailure"> { error } </div>;
		}



		return (
			<Grid centered>
			<Grid.Column width={6}>
			<Segment inverted>
		    <Form inverted onSubmit={this._handleSubmit}>
		      <Form.Group>
		        <Form.Input className="form-input-name"
							name = "name"
							label='Full Name'
							type= "text"
							placeholder='Full Name'
							onChange={this._handleChange}
							 required />
					</Form.Group>
					<Form.Group>
						<Form.Input className = "form-input-address"
							name = "address"
							label='Street Address'
							placeholder='Street Address'
							type= "text"
							onChange={this._handleChange}
							required />
					</Form.Group>
					<Form.Group>
						<Form.Input className = "form-input-city"
							name = "city"
							label='City'
							placeholder='City'
							type= "text"
							onChange={this._handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<div className="button-field">
							<label name="State">State</label>
							<select onChange={this._handleChange} name="state" >
								{options.map((states) => {
									return (
										<option value={states.value}>{states.text}</option>
									);
								})}
							</select>
						</div>
					</Form.Group>
					<Form.Group>
						<Form.Input className="form-input-zipcode"
							name= "zipCode"
							label='Zip Code'
							placeholder='Zip Code'
							type= "text"
							onChange={this._handleChange}
							required/>
					</Form.Group>
					<Form.Group>
						<Button className= "checkout-button" type='submit' onSubmit= {this._handleSubmit} >Submit</Button>
		      </Form.Group>

				 </Form>
				 <div className="order-message">
					  { message }
				 </div>
		  </Segment>
		</Grid.Column>
	</Grid>
		);
	}
}

CheckoutForm.propTypes = {
	error: PropTypes.string,
	orderSuccess: PropTypes.bool,
	orderFailure: PropTypes.bool,
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			category: PropTypes.string,
			description: PropTypes.string,
			rating: PropTypes.number,
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
		}),
	})),
	cartTotalItems: PropTypes.number,
};

function mapStateToProps(state, props) {
	return {
		error: state.checkout.error,
		orderSuccess: state.checkout.orderSuccess,
		orderFailure: state.checkout.orderFailure,
		cart: state.cart.cart,
		cartTotalItems: state.cart.cartTotalItems,

	};
}


export default connect(mapStateToProps, { submitOrder }) (CheckoutForm);
