import React from 'react';
import PropTypes from 'prop-types';
const FormTextInput = ({
	type,
	label,
	name,
	placeholder,
	onChange,
	autoFocus = false,
	value,
	error
}) => {
	let wrapperClass = 'form-group';
	if (error && error.length > 0) {
		wrapperClass += 'has-error';
	}

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				className={wrapperClass}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				autoFocus={autoFocus}
			/>
		</div>
	);
};

FormTextInput.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	autoFocus: PropTypes.bool,
	value: PropTypes.string,
	error: PropTypes.string
};

export default FormTextInput;
