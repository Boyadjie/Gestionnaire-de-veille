import '@sass/content/header.scss';

import Menu from '@component/Header/Menu';
import moon from '@image/icons/moon.svg';
import sun from '@image/icons/sun.svg';
import logo from '@image/logo.svg';
import React, { useContext } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		return theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
	};

	return (
		<header>
			<div className="top">
				<img className="logo" src={logo} alt="Emeric Logo" />
				<Menu />
			</div>
			<button
				type="button"
				className="themeSwitch"
				onClick={() => {
					changeTheme();
				}}>
				{theme === 'theme-light' && (
					<img src={moon} alt="Switch to dark theme." />
				)}
				{theme === 'theme-dark' && <img src={sun} alt="Switch to light theme." />}
			</button>
		</header>
	);
};

export default Header;
