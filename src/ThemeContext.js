import { createContext } from 'react';

const ThemeContext = createContext({
	theme: 'theme-light',
	setTheme: () => {},
});

export default ThemeContext;
