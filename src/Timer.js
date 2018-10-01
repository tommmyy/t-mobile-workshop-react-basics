import React from 'react';
import PropTypes from 'prop-types';

const format = (x) => new Date(x).toLocaleTimeString();

const Timer = ({ timestamp, children, className, ...other }) => (
	<div className={`timer ${className}`} {...other}>
		<h1>Time</h1>
		<p className="timer-value">{format(timestamp)}</p>
		{children}
	</div>
);

Timer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	timestamp: PropTypes.number.isRequired,
};

Timer.defaultProps = {
	className: '',
	children: null,
};

export default Timer;
