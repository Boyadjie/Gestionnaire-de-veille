import '@sass/content/notFound.scss';

import Articles from '@component/Articles/Articles';
import useArticles from '@hook/useArticles';
import React, { useEffect, useState } from 'react';

import Search from '../Filters/Search';
import Loader from '../Loader';

function Home() {
	const [searchInput, setSearchInput] = useState('react');
	const [fetchedArticlesList, setFetchedArticlesList] = useState([]);
	const [articlesList, setArticlesList] = useState([]);
	const { isLoading, articles, error } = useArticles(searchInput);

	useEffect(() => {
		if (!isLoading) {
			setFetchedArticlesList(articles);
			setArticlesList(articles);
		}
	}, [isLoading]);

	const handleSearch = (value) => {
		if (value === '' || value === ' ') {
			setSearchInput('react');
		} else {
			setSearchInput(value);
		}
	};

	const handleReset = () => {
		setArticlesList(fetchedArticlesList);
	};

	return (
		<div className="home">
			<Search handleSearch={handleSearch} placeholder="Search by tag ..." />
			<h1>Articles about {searchInput} : </h1>
			{isLoading && <Loader />}
			{error && <p className="error">{error}</p>}
			{!isLoading && articlesList.length > 0 && (
				<Articles
					fetchedArticlesList={fetchedArticlesList}
					articlesList={articlesList}
					setArticlesList={setArticlesList}
				/>
			)}
			{!isLoading && articlesList.length === 0 && (
				<div className="no-articles">
					<p>You don&apos;t have any articles here !</p>
					<button type="button" onClick={handleReset}>
						Reset
					</button>
				</div>
			)}
		</div>
	);
}

export default Home;
