import '@sass/content/filters/order.scss';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { orderByDate } from '../../functions/FilterArticles';

const Order = ({ fetchedArticlesList, articlesList, setArticlesList }) => {
	const [ordered, setOrdered] = useState(false);

	const handleOrder = () => {
		setOrdered(!ordered);
		if (!ordered) {
			setArticlesList(orderByDate(articlesList, 'desc'));
		} else {
			setArticlesList(orderByDate(articlesList, 'asc'));
		}
	};

	const handleReset = () => {
		setArticlesList(fetchedArticlesList);
	};
	return (
		<div className="order">
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
	articlesList: PropTypes.instanceOf(Array).isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Order;
