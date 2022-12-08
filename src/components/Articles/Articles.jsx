import Article from '@component/Articles/Article';
import useArticles from '@hook/useArticles';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Loader from '../Loader';

const Articles = ({ searchInput, setArticlesList }) => {
	const { isLoading, articles, error } = useArticles(searchInput);

	useEffect(() => {
		if (!isLoading) {
			setArticlesList(articles);
		}
	}, [isLoading]);

	return (
		<div className="Articles-list">
			{isLoading && <Loader />}
			{error && <p className="error">{error}</p>}
			{!isLoading &&
				articles.map((article) => <Article key={article.id} article={article} />)}
		</div>
	);
};

Articles.propTypes = {
	searchInput: PropTypes.string,
	setArticlesList: PropTypes.func.isRequired,
};

Articles.defaultProps = {
	searchInput: 'react',
};

export default Articles;
