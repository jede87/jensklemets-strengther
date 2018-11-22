import React from 'react';
import PropTypes from 'prop-types';

const FormSelectInput = ({ label, name, placeholder, options, onChange }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<select name={name} onChange={onChange}>
				<option>{placeholder}</option>
				{options.map(option => {
					return (
						<option key={option.value} value={option.value}>
							{option.text}
						</option>
					);
				})}
			</select>
		</div>
	);
};

FormSelectInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
};

export default FormSelectInput;
