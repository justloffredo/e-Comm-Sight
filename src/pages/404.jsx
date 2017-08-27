import React, { Component } from "react";
import { Link } from "react-router-dom";

class FourOFour extends Component {
	render() {
		return (
			<div className= "404">
				<Link to="/">
					<h1> This is not the page you're looking for. Return to ODYSSEY TIME</h1>
				</Link>
			</div>
		);
	}
}

export default FourOFour;
