import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ children, articlesList, setArticlesList, setSearchInput }) => {
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
			{children}
		</>
	);
};

Form.propTypes = {
	children: PropTypes.node.isRequired,
	articlesList: PropTypes.instanceOf(Array).isRequired,
	setSearchInput: PropTypes.func.isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Form;
