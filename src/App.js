import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
	render() {
		const timestamp = Date.now();

		return <Timer timestamp={timestamp} />;
	}
}

export default App;
