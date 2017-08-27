import React, { Component } from "react";
import { connect } from "redux-thunk";
import "./Home.scss";

class Home extends Component {
	render() {
		return (
			<div className = "home">
				 <h1> Odyssee Time</h1>

				<p> From our luxury timepieces to our accessible fashion watches, each of one is recognized for its inherent quality and distinctive image within its price category. Collectively, our timepieces are sold throughout North and South America, Europe, Asia and the Far East.</p>
			</div>
		);
	}
}

export default Home;
