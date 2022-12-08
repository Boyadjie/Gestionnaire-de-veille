import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { orderByDate } from '../../functions/FilterArticles';

const Order = ({ articlesList, setArticlesList }) => {
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
		setArticlesList(articlesList);
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
	articlesList: PropTypes.instanceOf(Array).isRequired,
	setArticlesList: PropTypes.func.isRequired,
};

export default Order;
