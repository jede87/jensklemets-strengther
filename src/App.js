import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StartPage from './components/start/StartPage';

const store = configureStore({});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<React.Fragment>
						<Header />
						<Switch>
							<Route exact path="/" component={StartPage} />
						</Switch>
						<Footer />
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
