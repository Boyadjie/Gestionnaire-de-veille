import { createContext } from 'react';

import maListe from '../data/maListe.json';

const LocalArticles = createContext({
	localArticles: [...maListe],
	setLocalArticles: () => {},
});

export default LocalArticles;
