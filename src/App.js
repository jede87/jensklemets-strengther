import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StartPage from './components/start/StartPage';
import AddMovementPage from './components/movements/AddMovementPage';
import EditMovementPage from './components/movements/EditMovementPage';
import ListMovementsPage from './components/movements/ListMovementsPage';

import { loadMovements } from './actions/movementActions';
import { loadExerciseTypes } from './actions/exerciseTypeActions';

const store = configureStore();
store.dispatch(loadMovements());
store.dispatch(loadExerciseTypes());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<React.Fragment>
						<Header />
						<Switch>
							<Route exact path="/" component={StartPage} />
							<Route
								exact
								path="/movements/add"
								component={AddMovementPage}
							/>
							<Route
								exact
								path="/movements/edit/:id"
								component={EditMovementPage}
							/>
							<Route
								exact
								path="/movements/list"
								component={ListMovementsPage}
							/>
						</Switch>
						<Footer />
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
