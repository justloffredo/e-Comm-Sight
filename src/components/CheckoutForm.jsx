import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				firstName: "",
				lastName: "",
				addressStreet: "",
				city: "",
				userState: "",
				zipCode: "",
				error: null,
			};
		}
	}

	_handleChange = (ev) => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	_handleSubmit = (ev) => {
		ev.preventDefault();

		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const addressStreet = this.state.addressStreet;
		const city = this.state.city;
		const userState = this.state.state;
		const zipCode = this.state.zipCode;
		const error = (firstName === "" || lastName === "" || addressStreet === "" || city === "" || userState === "" || zipCode === "") &&  "One or more of your fields is blank";


			(!firstName || !lastName || !addressStreet || !city || !userState || !zipCode) || this.props.onSubmit({

			firstName: this.state.firstName,
			lastName: this.state.lastName,
			addressStreet: this.state.addressStreet,
			city: this.state.city,
			userState: this.state.state,
			zipCode: this.state.zipCode,
		});

			this.setState({ firstName: "", lastName: "", addressStreet: "", city: "", userState: "", zipCode: "", error });
		};

	render() {
		const firstName = this.state;
		const lastName = this.state;
		const addressStreet = this.state;
		const city = this.state;
		const userState = this.state;
		const zipCode = this.state;

		return (
			<Segment inverted>
		    <Form inverted onSubmit={this._handleSubmit}>
		      <Form.Group widths='equal'>
		        <Form.Input
							name = "firstName"
							label='First name'
							placeholder='First name'
							onChange={this._handleChange}
							value = {firstName} />
		        <Form.Input
							name = "lastName"
							label='Last name'
							placeholder='Last name'
							onChange={this._handleChange}
							value = {lastName}/>
						<Form.Input
							name = "addressStreet"
							label='Street Address'
							placeholder='Street Address'
							onChange={this._handleChange}
							value = {addressStreet}/>
						<Form.Input
							name = "city"
							label='City'
							placeholder='City'
							onChange={this._handleChange}
							value = {city}/>
						<Form.Input
							name= "state"
							label='State'
							placeholder='State'
							onChange={this._handleChange}
							value = {userState}/>
						<Form.Inpu
							name= "zipCode"
							label='Zip Code'
							placeholder='Zip Code'
							onChange={this._handleChange}
							value = {zipCode}/>
		      </Form.Group>
		      <Button type='submit'>Submit</Button>
		    </Form>
		  </Segment>
		);
	}
}
export default CheckoutForm;
