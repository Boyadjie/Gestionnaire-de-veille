import '@sass/content/home/home.scss';

import Articles from '@component/Articles/Articles';
import React from 'react';

function Home() {
	return (
		<div className="home">
			<h1>Home</h1>
			<Articles searchInput="react" />
		</div>
	);
}

export default Home;
