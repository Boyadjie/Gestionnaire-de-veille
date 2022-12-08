import Article from '@component/Articles/Article';
import PropTypes from 'prop-types';
import React from 'react';

const Articles = ({ articlesList }) => {
	return (
		<div className="Articles-list">
			{articlesList.map((article) => (
				<Article key={article.id} article={article} />
			))}
		</div>
	);
};

Articles.propTypes = {
	articlesList: PropTypes.instanceOf(Array).isRequired,
};

export default Articles;
