import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { filterByTag } from '../../functions/FilterArticles';

const Filters = ({ tags, fetchedArticlesList, setArticlesList }) => {
	const [activeFilters, setActiveFilters] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const tagToAdd = event.target[0].value;
		if (tagToAdd !== 0) {
			setActiveFilters([...activeFilters, tagToAdd]);
		} else {
			setActiveFilters([...activeFilters]);
		}
	};

	const handleRemoveTag = (tag) => {
		const updatedActiveFilters = [...activeFilters];
		const filterIndex = updatedActiveFilters.indexOf(tag);
		updatedActiveFilters.splice(filterIndex, 1);
		setActiveFilters(updatedActiveFilters);
	};

	useEffect(() => {
		const FilteredArticlesList = filterByTag(activeFilters, fetchedArticlesList);
		setArticlesList(FilteredArticlesList);
	}, [activeFilters]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<input type="text" name="select-tag" id="select-tag" list="tag-list" />
				<datalist name="tag" id="tag-list">
					{tags.map((tag) => (
						<option key={tag} value={tag} />
					))}
				</datalist>
				<input type="submit" value="Ajouter" />
			</form>
			<div className="activeFilters">
				{activeFilters.length > 0 &&
					activeFilters.map((tag) => (
						<span key={tag} className="tag">
							{tag}
							<button type="button" onClick={() => handleRemoveTag(tag)}>
								X
							</button>
						</span>
					))}
			</div>
		</div>
	);
};

Filters.propTypes = {
	tags: PropTypes.instanceOf(Array).isRequired,
	fetchedArticlesList: PropTypes.instanceOf(Array).isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Filters;
