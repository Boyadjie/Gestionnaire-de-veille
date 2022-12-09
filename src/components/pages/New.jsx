import React, { useContext } from 'react';

import LocalArticles from '../../contexts/LocalArticles';
import FormAddArticle from '../Form/FormAddArticle';

const New = () => {
	const { setLocalArticles } = useContext(LocalArticles);

	const handleAddArticle = (newArticleValues) => {
		const newArticle = { id: '?', ...newArticleValues };
		setLocalArticles(newArticle);
	};
	return (
		<div>
			<h1>Add a new article: </h1>
			<FormAddArticle handleAddArticle={handleAddArticle}>
				<input type="submit" value="Add" />
			</FormAddArticle>
		</div>
	);
};

export default New;
