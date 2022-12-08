import { orderBy } from 'lodash';

export function filterByTag(activeTags, articlesList) {
	if (activeTags.length === 0) {
		return articlesList;
	}
	const filteredArticlesList = [];

	articlesList.forEach((article) => {
		article.tag_list.forEach((tag) => {
			if (activeTags.includes(tag)) {
				if (
					filteredArticlesList.find((element) => element.id === article.id) ===
					undefined
				) {
					filteredArticlesList.push(article);
				}
			}
		});
	});

	return filteredArticlesList;
}

export function orderByDate(articles, order = 'desc') {
	if (order !== 'desc' && order !== 'asc') {
		return articles;
	}
	return orderBy(articles, 'published_timestamp', order);
}

export function filterByTitle(articlesList, text) {
	const matchingArticles = [];

	articlesList.forEach((article) => {
		const articleTitle = article.title.toLowerCase();
		if (articleTitle.includes(text.toLowerCase())) {
			if (
				matchingArticles.find((element) => element.id === article.id) ===
				undefined
			) {
				matchingArticles.push(article);
			}
		}
	});

	return matchingArticles;
}
