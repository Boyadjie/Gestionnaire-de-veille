import Layout from '@component/Layout';
import Favorites from '@component/pages/Favorites';
import Home from '@component/pages/Home';
import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ThemeContext from './contexts/ThemeContext';

function App() {
	const [theme, setTheme] = useState('theme-light');
	const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

	return (
		<ThemeContext.Provider value={themeContextValue}>
			<Router>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/favoris" element={<Favorites />} />
					</Route>
				</Routes>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;
