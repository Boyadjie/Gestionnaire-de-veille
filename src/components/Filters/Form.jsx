import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ setSearchInput }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const searchInput = e.target[0].value;

		if (searchInput === '' || searchInput === ' ') {
			setSearchInput('react');
		} else {
			setSearchInput(searchInput);
		}
	};

	return (
		<>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<input type="text" name="search" />
				<input type="submit" value="Search" />
			</form>
		</>
	);
};

Form.propTypes = {
	setSearchInput: PropTypes.func.isRequired,
};

export default Form;
