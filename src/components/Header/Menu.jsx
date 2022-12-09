import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<NavLink exact="true" to="/">
				Accueil
			</NavLink>
			<NavLink exact="true" to="/my-articles">
				My Articles
			</NavLink>
			<NavLink exact="true" to="/new">
				Add New Article
			</NavLink>
		</nav>
	);
};

export default Menu;
