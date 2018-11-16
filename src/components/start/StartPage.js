import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movementActions from '../../actions/movementActions';

class StartPage extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<React.Fragment>
				{this.props.movements.map(movement => (
					<p>{movement.title}</p>
				))}
			</React.Fragment>
		);
	}
}
StartPage.propTypes = {
	movements: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
	debugger;
	return {
		movements: state.movements
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(movementActions, dispatch)
	};
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartPage);
