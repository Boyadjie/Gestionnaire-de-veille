import Article from '@component/Articles/Article';
import useArticles from '@hook/useArticles';
import PropTypes from 'prop-types';
import React from 'react';

import Loader from '../Loader';

const Articles = ({ searchInput }) => {
	const { isLoading, articles, error } = useArticles(searchInput);
	return (
		<>
			{isLoading && <Loader />}
			{error && <p className="error">{error}</p>}
			{!isLoading &&
				articles.map((article) => <Article key={article.id} article={article} />)}
		</>
	);
};

Articles.propTypes = {
	searchInput: PropTypes.string,
};

Articles.defaultProps = {
	searchInput: 'react',
};

export default Articles;
