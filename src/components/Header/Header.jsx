import '@sass/content/header.scss';

import Menu from '@component/Header/Menu';
import moon from '@image/icons/moon.svg';
import sun from '@image/icons/sun.svg';
import logo from '@image/logo.svg';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import ThemeContext from '../../ThemeContext';

const Header = ({ children }) => {
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
			<div className="bottom">{children}</div>
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

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
