/**
 * Main script file
 * Author: Armando G. Mondul
 */

// Tell webpack to load favicon.ico
require('./favicon.ico');

import React from 'react';
import {render} from 'react-dom';

import LikesComponent from './LikesComponent.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<p>This is a webpack test with React</p>
				<LikesComponent/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
