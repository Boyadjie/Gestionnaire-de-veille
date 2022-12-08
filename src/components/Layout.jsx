import Header from '@component/Header/Header';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext';

function Layout() {
	const { theme } = useContext(ThemeContext);
	const [articlesList, setArticlesList] = useState([]);

	return (
		<div className={theme}>
			<Header />
			<main>
				<Outlet articlesList={articlesList} setArticlesList={setArticlesList} />
			</main>
		</div>
	);
}

export default Layout;
