import '@sass/content/notFound.scss';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import maListe from '../../data/maListe.json';
import { filterByTitle } from '../../functions/FilterArticles';
import Articles from '../Articles/Articles';
import Search from '../Filters/Search';

const MyArticles = () => {
	const [fetchedArticlesList] = useState([...maListe]);
	const [myArticles, setMyArticles] = useState([...maListe]);

	const handleSearch = (value) => {
		if (value === '' || value === ' ') {
			setMyArticles(fetchedArticlesList);
		} else {
			setMyArticles(filterByTitle(fetchedArticlesList, value));
		}
	};

	const handleReset = () => {
		setMyArticles(fetchedArticlesList);
	};

	const handleDeleteArticle = (id) => {
		const updatedArticles = [...myArticles];
		const articleToRemoveIndex = updatedArticles.findIndex(
			(article) => article.id === id,
		);
		updatedArticles.splice(articleToRemoveIndex, 1);
		setMyArticles(updatedArticles);
		toast(`Article number ${id} had successfully been deleted`);
	};

	return (
		<div>
			<ToastContainer />
			<Search handleSearch={handleSearch} placeholder="Search by title ..." />
			<h1>My articles :</h1>
			{myArticles.length > 0 && (
				<Articles
					fetchedArticlesList={fetchedArticlesList}
					articlesList={myArticles}
					setArticlesList={setMyArticles}
					deleteArticle={handleDeleteArticle}
				/>
			)}
			{myArticles.length === 0 && (
				<div className="no-articles">
					<p>You don&apos;t have any articles here !</p>
					<button type="button" onClick={handleReset}>
						Reset
					</button>
				</div>
			)}
		</div>
	);
};

export default MyArticles;
