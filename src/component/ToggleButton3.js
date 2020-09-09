import React, { Component } from "react";

export default class ToggleButton3 extends Component {
	state = { clicked: false };

	clickHandler() {
		this.setState((prevState) => ({ clicked: !prevState.clicked }));
	}

	render() {
		const clicked = this.state.clicked;

		return (
			<div>
				<p>Button 3</p>
				<button onClick={this.clickHandler.bind(this)}>{clicked ? "ON" : "OFF"}</button>
			</div>
		);
	}
}
