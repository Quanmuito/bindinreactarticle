import React from "react";
import "./App.css";
import ToggleButton from "./component/ToggleButton";
import ToggleButton4 from "./component/ToggleButton4";
import ToggleButton3 from "./component/ToggleButton3";
import ToggleButton2 from "./component/ToggleButton2";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<ToggleButton />
				<ToggleButton2 />
				<ToggleButton3 />
				<ToggleButton4 />
			</div>
		</div>
	);
}

export default App;
