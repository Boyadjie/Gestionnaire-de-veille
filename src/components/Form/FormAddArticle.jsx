import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormAddArticle = ({ children, handleAddArticle }) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const valuesToVerify = {};
		const verifiedValues = {};

		for (let i = 0; i < event.target.length - 1; i += 1) {
			const input = event.target[i];
			if (input.name === 'tags') {
				const value = input.value.replace('\n', '');
				valuesToVerify[input.name] = value.split(',');
			} else {
				valuesToVerify[input.name] = input.value;
			}
		}
		console.log(valuesToVerify);
		// Form validation

		if (errors.length === 0) {
			setValues(verifiedValues);
			handleAddArticle(values);
		}
	};
	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<div>
				<input
					type="url"
					name="articleLink"
					placeholder="Article Link"
					required
				/>
			</div>
			<div>
				<input type="url" name="imageLink" placeholder="Image Link" />
			</div>
			<div>
				<input type="text" name="title" placeholder="Title" required />
			</div>
			<div>
				<textarea
					cols="30"
					rows="10"
					name="description"
					placeholder="Description"
				/>
			</div>
			<div>
				<input type="text" name="author" placeholder="Author" required />
			</div>
			<div>
				<input type="datetime-local" name="punlishDate" required />
			</div>
			<div>
				<textarea
					cols="30"
					rows="10"
					name="tags"
					placeholder={`Tags :${'\n'}${'\n'}tag1,${'\n'}tag2,${'\n'}tag3,${'\n'}...`}
				/>
			</div>
			{children}
		</form>
	);
};

FormAddArticle.propTypes = {
	children: PropTypes.node.isRequired,
	handleAddArticle: PropTypes.func.isRequired,
};

export default FormAddArticle;
