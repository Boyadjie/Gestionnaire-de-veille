import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ handleSearch }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const searchInput = event.target[0].value;
		handleSearch(searchInput);
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

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};

export default Search;
