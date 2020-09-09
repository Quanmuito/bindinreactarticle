import React, { Component } from "react";

export default class ToggleButton4 extends Component {
	state = { clicked: false };

	clickHandler() {}

	render() {
		const clicked = this.state.clicked;

		return (
			<div>
				<p>Button 4</p>
				<button
					onClick={() => {
						this.setState((prevState) => ({ clicked: !prevState.clicked }));
					}}>
					{clicked ? "ON" : "OFF"}
				</button>
			</div>
		);
	}
}
