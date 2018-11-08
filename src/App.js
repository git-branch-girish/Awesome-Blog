import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Navbar from './components/layout/Navbar';
import Posts from './components/posts/Posts';
import Article from './components/posts/Article';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<React.Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Posts} />
								<Route exact path="/post/:id" component={Article} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
