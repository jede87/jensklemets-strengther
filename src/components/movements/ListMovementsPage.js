import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListMovementsPage extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<React.Fragment>
				<h2>LIST MOVEMENTS</h2>
				<ul>
					{this.props.movements.map(movement => (
						<li key={movement.id}>
							<Link to={`/movements/edit/${movement.id}`}>
								{movement.title}
							</Link>
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}
ListMovementsPage.propTypes = {
	movements: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
	return {
		movements: state.movements
	};
}
export default connect(
	mapStateToProps,
	null
)(ListMovementsPage);
