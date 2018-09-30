import React from 'react';

const format = (x) => new Date(x).toLocaleTimeString();

const Timer = ({ timestamp, children, className, ...other }) => (
	<div className={`timer ${className}`} {...other}>
		<h1>Time</h1>
		<p class="timer-value">{format(timestamp)}</p>
		{children}
	</div>
);

export default Timer;
