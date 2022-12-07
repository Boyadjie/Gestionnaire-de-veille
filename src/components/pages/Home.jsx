import '@sass/content/home/home.scss';

import Articles from '@component/Articles/Articles';
import React from 'react';

function Home() {
	return (
		<div className="home">
			<h1>View Articles : </h1>
			<Articles searchInput="React" />
		</div>
	);
}

export default Home;
