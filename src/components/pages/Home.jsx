import '@sass/content/home/home.scss';

import Articles from '@component/Articles/Articles';
import useArticles from '@hook/useArticles';
import React, { useEffect, useState } from 'react';

import Filters from '../Filters/Filters';
import Form from '../Filters/Form';
import Loader from '../Loader';

function Home() {
	const [searchInput, setSearchInput] = useState('react');
	const [articlesList, setArticlesList] = useState([]);
	const { isLoading, articles, error } = useArticles(searchInput);

	useEffect(() => {
		if (!isLoading) {
			setArticlesList(articles);
		}
	}, [isLoading]);

	return (
		<div className="home">
			<Form
				setSearchInput={setSearchInput}
				articlesList={articlesList}
				setArticlesList={setArticlesList}>
				<Filters />
			</Form>
			<h1>Articles à propos de {searchInput} : </h1>
			{isLoading && <Loader />}
			{error && <p className="error">{error}</p>}
			{!isLoading && articlesList.length > 0 && (
				<Articles articlesList={articlesList} />
			)}
		</div>
	);
}

export default Home;
