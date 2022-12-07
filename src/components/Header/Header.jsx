import '@sass/content/header.scss';

import Menu from '@component/Header/Menu';
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
				<Menu />
				{theme}
				<h1>Leave the code cleaner than you found it.</h1>
				<button
					type="button"
					className="themeSwitch"
					onClick={() => {
						changeTheme();
					}}>
					Switch Theme
				</button>
			</div>
			{children && <div className="bottom">{children}</div>}
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
