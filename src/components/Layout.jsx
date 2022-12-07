import Header from '@component/Header/Header';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import ThemeContext from '../ThemeContext';

function Layout() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={theme}>
			<Header>
				<p>Search + filters</p>
			</Header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
