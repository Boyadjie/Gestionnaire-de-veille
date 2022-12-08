import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<NavLink exact="true" to="/">
				Accueil
			</NavLink>
			<NavLink exact="true" to="/mes-articles">
				Mes Articles
			</NavLink>
		</nav>
	);
};

export default Menu;
