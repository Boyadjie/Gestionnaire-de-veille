import PropTypes from 'prop-types';
import React from 'react';

const Article = ({ article }) => {
	return (
		<article>
			<h3>{article.id}</h3>
		</article>
	);
};

Article.propTypes = {
	article: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
