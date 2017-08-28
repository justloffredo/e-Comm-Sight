import React, { Component } from "react";
import { connect } from "redux-thunk";
import { Grid } from "semantic-ui-react";
import "./Home.scss";

class Home extends Component {
	componentDidMount() {
		document.body.classList.add("has-bg");
	}

	componentWillUnmount() {
		document.body.classList.remove("has-bg");
	}
	render() {
		return (
			<Grid centered>
			<Grid.Column width={10}>
			<div className = "home">
				 <h1> Odyssee Time</h1>

				<p> From our luxury timepieces to our accessible fashion watches, each of one is recognized for its inherent quality and distinctive image within its price category. Collectively, our timepieces are sold throughout North and South America, Europe, Asia and the Far East.</p>
			</div>
		</Grid.Column>
	</Grid>
		);
	}
}

export default Home;
