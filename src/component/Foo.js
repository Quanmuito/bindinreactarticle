import React, { Component } from "react";

export class Foo extends Component {
	/*
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
    }
    */

	handleClick(e) {
		// Do something here
	}

	render() {
		return <button onClick={this.handleClick.bind(this)}>Click</button>;
	}
}

export default Foo;


Object.method();

var methodv2 = Object.method;
methodv2();