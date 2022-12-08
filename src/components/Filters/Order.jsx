import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { orderByDate } from '../../functions/FilterArticles';

const Order = ({ fetchedArticlesList, setArticlesList }) => {
	const [ordered, setOrdered] = useState(false);

	const handleOrder = () => {
		setOrdered(!ordered);
		if (!ordered) {
			setArticlesList(orderByDate(fetchedArticlesList, 'desc'));
		} else {
			setArticlesList(orderByDate(fetchedArticlesList, 'asc'));
		}
	};

	const handleReset = () => {
		setArticlesList(fetchedArticlesList);
	};
	return (
		<div>
			<button type="button" onClick={handleOrder}>
				{ordered && <span>Order By oldest</span>}
				{!ordered && <span>Order By latest</span>}
			</button>
			<button type="button" onClick={handleReset}>
				reset
			</button>
		</div>
	);
};

Order.propTypes = {
	fetchedArticlesList: PropTypes.instanceOf(Array).isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Order;
