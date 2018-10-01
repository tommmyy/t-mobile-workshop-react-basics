import React from 'react';

const Timer = ({ timestamp }) => <div className="timer">
	<h1>Time</h1>
	<p className="timer-value">{new Date(timestamp).toLocaleTimeString()}</p>
</div>;

export default Timer;
