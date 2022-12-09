import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import LocalArticles from '../../contexts/LocalArticles';
import FormAddArticle from '../Form/FormAddArticle';

const New = () => {
	const { localArticles, setLocalArticles } = useContext(LocalArticles);

	const handleAddArticle = (newArticleValues) => {
		const newId = localArticles[localArticles.length - 1].id + 1;
		const newArticle = { id: newId, ...newArticleValues };
		setLocalArticles([...localArticles, newArticle]);
		toast(`Article number ${newId} had successfully been created`);
	};
	return (
		<div>
			<ToastContainer />
			<h1>Add a new article: </h1>
			<FormAddArticle handleAddArticle={handleAddArticle}>
				<input type="submit" value="Add" />
			</FormAddArticle>
		</div>
	);
};

export default New;
