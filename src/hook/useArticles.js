import { useEffect, useState } from 'react';

export default function useArticles(searchInput) {
	const [articles, setArticles] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const resp = await fetch(
					`https://dev.to/api/articles?tag=${searchInput.toLowerCase()}`,
				);
				const data = await resp.json();
				setArticles(data);
				setIsLoading(false);
			} catch (err) {
				setError(err);
				setIsLoading(false);
			}
		})();
	}, []);

	return {
		isLoading,
		articles,
		error,
	};
}
