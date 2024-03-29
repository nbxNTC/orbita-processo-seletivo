import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>								
					<Route path="/" exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;