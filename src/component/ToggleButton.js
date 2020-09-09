import React, { Component } from "react";

export default class ToggleButton extends Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	state = { clicked: false };

	clickHandler() {
		this.setState((prevState) => ({ clicked: !prevState.clicked }));
	}

	render() {
		const clicked = this.state.clicked;

		return (
			<div>
				<button onClick={this.clickHandler}>{clicked ? "ON" : "OFF"}</button>
			</div>
		);
	}
}
