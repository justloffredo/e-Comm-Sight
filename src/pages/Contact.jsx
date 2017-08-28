import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import "./Contact.scss";

class Contact extends Component {
	render() {
		return (
			<Grid centered>
			<Grid.Column width={8}>
			<div className="contact">
				<h3> Need Help?</h3>
				<br></br>
				<p>Email us at</p>
				<a href ="mailto:oddysseetime@yahoo.com">
				<h5>CUSTOMERSERVICE@ODYSSEETIME.COM</h5>
				</a>
				<br></br>
				<p>or Call us at 1-800-000-2311</p>
				<br></br>
				<p>Operating Hours:</p>
				<br></br>
				<p>Mon-Fri 9am - 5pm Eastern</p>
				<br></br>
				<p>Please allow up to 48 hours for order processing.</p>
			</div>
		</Grid.Column>
	</Grid>
		);
	}
}

export default Contact;
