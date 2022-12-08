import '@sass/content/home/home.scss';

import Articles from '@component/Articles/Articles';
import React, { useState } from 'react';

import Filters from '../Filters/Filters';
import Form from '../Filters/Form';

function Home() {
	const [searchInput, setSearchInput] = useState('React');
	const [articlesList, setArticlesList] = useState([]);
	return (
		<div className="home">
			<Form
				setSearchInput={setSearchInput}
				articlesList={articlesList}
				setArticlesList={setArticlesList}>
				<Filters />
			</Form>
			<h1>React Articles : </h1>
			<Articles searchInput={searchInput} setArticlesList={setArticlesList} />
		</div>
	);
}

export default Home;
