import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { history } from 'react-router-dom';
import * as movementActions from '../../actions/movementActions';

import FormTextInput from '../common/formInputs/FormTextInput';
import FormSelectInput from '../common/formInputs/FormSelectInput';

class EditMovementPage extends Component {
	state = {
		movement: Object.assign({}, this.props.movement),
		exerciseTypes: this.props.exerciseTypes,
		errors: {}
	};

	onChange = e => {
		const field = e.target.name;
		let movement = this.state.movement;
		movement[field] = e.target.value;
		return this.setState({ movement });
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.actions.saveMovement(this.state.movement);
		this.props.history.push('/movements/list');
	};

	render() {
		return (
			<React.Fragment>
				<h2>EDIT MOVEMENT</h2>
				<form onSubmit={this.onSubmit}>
					<FormTextInput
						type="text"
						label="Title"
						name="title"
						placeholder="Insert Title"
						onChange={this.onChange}
						value={this.state.movement.title}
						autoFocus={true}
					/>
					<FormSelectInput
						options={this.props.exerciseTypes}
						label="Exercise Type"
						name="exerciseType"
						placeholder="Choose Exercise Type"
						onChange={this.onChange}
					/>
					<input type="submit" value="Edit movement" />
				</form>
			</React.Fragment>
		);
	}
}
EditMovementPage.propTypes = {
	movement: PropTypes.object.isRequired,
	exerciseTypes: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
	let movement = { id: '', title: '' };

	const exerciseTypesFormattedForDropDown = state.exerciseTypes.map(type => {
		return {
			value: type.id,
			text: type.title
		};
	});

	return {
		movement,
		exerciseTypes: exerciseTypesFormattedForDropDown
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
)(EditMovementPage);
