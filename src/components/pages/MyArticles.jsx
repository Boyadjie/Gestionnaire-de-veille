import React, { useState } from 'react';

import maListe from '../../data/maListe.json';
import Articles from '../Articles/Articles';
import Search from '../Filters/Search';

const MyArticles = () => {
	const [myArticles, setMyArticles] = useState([...maListe]);

	const handleSearch = (value) => {
		console.log(value);
	};

	return (
		<div>
			<Search handleSearch={handleSearch} />
			<h1>My articles :</h1>
			{myArticles.length > 0 && (
				<Articles
					fetchedArticlesList={[...myArticles]}
					articlesList={myArticles}
					setArticlesList={setMyArticles}
				/>
			)}
		</div>
	);
};

export default MyArticles;
