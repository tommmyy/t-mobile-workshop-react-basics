import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Timer from './Timer';

const getTimestamp = () => new Date().getTime();

class App extends Component {
	static defaultProps = {
		refreshInterval: 1000,
	};

	static propTypes = {
		refreshInterval: PropTypes.number,
	};

	state = {};

	componentDidMount() {
		this.interval = setInterval(this.setTimestamp, this.props.refreshInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setTimestamp = () => {
		this.setState({ timestamp: getTimestamp() });
	};

	render() {
		const { timestamp } = this.state;

		return timestamp ? <Timer timestamp={timestamp} /> : '';
	}
}

export default App;
