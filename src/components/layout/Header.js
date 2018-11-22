import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/">Home</Link>{' '}
					<Link to="/movements/list">Movements</Link>{' '}
					<Link to="/movements/add">Add Movement</Link>
				</nav>
				<h1>Strengther</h1>
				<p>a training app among others</p>
			</header>
		);
	}
}

// Header.propTypes = {
// 	title: PropTypes.string.isRequired
// };
export default Header;
