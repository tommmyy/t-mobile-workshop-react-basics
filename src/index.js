import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(
	<App timestamp={new Date().getTime()} />,
	document.getElementById('root')
);

setInterval(render, 1000);

registerServiceWorker();
