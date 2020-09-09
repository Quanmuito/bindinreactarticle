import React, { Component } from "react";

export default class ToggleButton2 extends Component {
	state = { clicked: false };

	clickHandler = () => {
		this.setState((prevState) => ({ clicked: !prevState.clicked }));
	};

	render() {
		const clicked = this.state.clicked;

		return (
			<div>
				<p>Button 2</p>
				<button onClick={this.clickHandler}>{clicked ? "ON" : "OFF"}</button>
			</div>
		);
	}
}
