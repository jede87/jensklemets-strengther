import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import * as movementActions from '../../actions/movementActions';

import FormTextInput from '../common/formInputs/FormTextInput';

class AddMovementPage extends Component {
	state = {
		id: uuid(),
		title: ''
	};
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		const newMovement = this.state;
		this.props.actions.addMovement(newMovement);
		this.setState({ id: uuid(), title: '' });
	};

	render() {
		return (
			<React.Fragment>
				<h2>ADD MOVEMENT</h2>
				<form onSubmit={this.onSubmit}>
					<FormTextInput
						label="Title"
						type="text"
						name="title"
						placeholder="Insert title"
						onChange={this.onChange}
						value={this.state.title}
					/>
					<input type="submit" value="Add movement" />
				</form>
			</React.Fragment>
		);
	}
}
AddMovementPage.propTypes = {
	actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(movementActions, dispatch)
	};
}
export default connect(
	null,
	mapDispatchToProps
)(AddMovementPage);
