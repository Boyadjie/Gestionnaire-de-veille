import '@sass/content/articles.scss';

import Article from '@component/Articles/Article';
import { union } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Filters from '../Filters/Filters';
import Order from '../Filters/Order';

const Articles = ({ fetchedArticlesList, articlesList, setArticlesList }) => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		const tagsList = [];
		articlesList.forEach((article) => {
			tagsList.push(article.tag_list);
		});
		setTags(union(...tagsList));
	}, []);

	return (
		<>
			<Filters
				tags={tags}
				fetchedArticlesList={fetchedArticlesList}
				setArticlesList={setArticlesList}
			/>
			<Order
				fetchedArticlesList={fetchedArticlesList}
				setArticlesList={setArticlesList}
			/>
			<div className="Articles-list">
				{articlesList.map((article) => (
					<Article key={article.id} article={article} />
				))}
			</div>
		</>
	);
};

Articles.propTypes = {
	fetchedArticlesList: PropTypes.instanceOf(Array).isRequired,
	articlesList: PropTypes.instanceOf(Array).isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Articles;
