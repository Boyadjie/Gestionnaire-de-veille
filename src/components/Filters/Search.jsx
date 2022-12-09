import '@sass/content/filters/search.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ handleSearch, placeholder }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const searchInput = event.target[0].value;
		handleSearch(searchInput);
	};

	return (
		<div className="searchbar">
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<input type="text" name="search" id="search" placeholder={placeholder} />
				<input type="submit" value="Search" id="send" />
			</form>
		</div>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default Search;
