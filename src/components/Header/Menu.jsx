import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact="true" to="/">
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink exact="true" to="/favoris">
						Favoris
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
