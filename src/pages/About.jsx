import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "redux-thunk";
import "./About.scss";

class About extends Component {
	render() {
		return (
			<Grid centered>
				<Grid.Column width={10}>
					<div className= "about">
						<h1> Odyssey Time</h1>

						<p>ABOUT ODYSSEY TIME: <br></br>
					ODYSSEY, the flagship brand within the Timex Group Inc. portfolio, was founded in La Chaux-de-Fonds, Switzerland in 1881, and acquired by the corporation in 1983.  Recognized today for its iconic Museum® dial and modern aesthetic, Odyssey has earned more than 100 patents and 200 international awards for watch design and time technology.   This long, rich heritage of artistry and innovation in design, and a close, enduring association with the arts continue to define the Oddyssey brand identity.  Always in motion, Odyssey Time creates modern watches of exceptional craftsmanship and design distinction.
						</p>
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}

export default About;
