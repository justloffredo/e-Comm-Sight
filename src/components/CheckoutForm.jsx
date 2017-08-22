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

		const { Name, addressStreet, city, zipCode } = this.state;
		const error = (Name === "" || addressStreet === "" || city === "" || zipCode === "") &&  "One or more of your fields is blank";


		(!Name || !addressStreet || !city || !zipCode) || this.props.onSubmit({

			firstName: this.state.firstName,
			lastName: this.state.lastName,
			addressStreet: this.state.addressStreet,
			userState: this.state.state,
			zipCode: this.state.zipCode,
		});

		this.setState({ firstName: "", lastName: "", addressStreet: "", city: "", userState: "", zipCode: "", error });
	};

	render() {
		const { Name, addressStreet, zipCode, error  } = this.state;
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

		return (
			<Segment inverted>
		    <Form inverted onSubmit={this._handleSubmit}>
		      <Form.Group widths='equal'>
		        <Form.Input
							name = "Name"
							label='Full Name'
							type= "text"
							placeholder='Full Name'
							onChange={this._handleChange}
							 />
						<Form.Input
							name = "addressStreet"
							label='Street Address'
							placeholder='Street Address'
							type= "text"
							onChange={this._handleChange}
						/>
						<Form.Input
							name = "city"
							label='City'
							placeholder='City'
							type= "text"
							onChange={this._handleChange}
						/>
						<Form.Select
							name= "state"
							label='State'
							placeholder='State'
							options = {options}
						/>
						<Form.Input
							name= "zipCode"
							label='Zip Code'
							placeholder='Zip Code'
							type= "text"
							onChange={this._handleChange}
						/>
		      </Form.Group>
					{error && <div className = "error">{error}</div>}
		      <Button type='submit'>Submit</Button>
		    </Form>
		  </Segment>
		);
	}
}
export default CheckoutForm;
