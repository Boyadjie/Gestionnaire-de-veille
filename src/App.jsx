import Layout from '@component/Layout';
import Home from '@component/pages/Home';
import MyArticles from '@component/pages/MyArticles';
import New from '@component/pages/New';
import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LocalArticles from './contexts/LocalArticles';
import ThemeContext from './contexts/ThemeContext';
import maList from './data/maListe.json';

function App() {
	const [theme, setTheme] = useState('theme-light');
	const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

	const [localArticles, setLocalArticles] = useState([...maList]);
	const localArticlesContextValue = useMemo(
		() => ({ localArticles, setLocalArticles }),
		[localArticles, setLocalArticles],
	);

	return (
		<ThemeContext.Provider value={themeContextValue}>
			<LocalArticles.Provider value={localArticlesContextValue}>
				<Router>
					<Routes>
						<Route path="" element={<Layout />}>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/my-articles" element={<MyArticles />} />
							<Route exact path="/new" element={<New />} />
						</Route>
					</Routes>
				</Router>
			</LocalArticles.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
