import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormAddArticle = ({ children, handleAddArticle }) => {
	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const inputErrors = [];
		const valuesToVerify = {};
		const urlRegexp = new RegExp(
			/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
		);
		const dateRexexp = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/gm);
		const tagsToVerify = [];
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		for (let i = 0; i < event.target.length - 1; i += 1) {
			const input = event.target[i];
			if (input.name === 'tags') {
				const value = input.value.replace('\n', '');
				valuesToVerify[input.name] = value.split(',');
			} else {
				valuesToVerify[input.name] = input.value;
			}
		}

		// Form validation
		if (valuesToVerify.articleLink === '') {
			setErrors([...errors, 'The field "Article Link" Must not be empty !']);
			inputErrors.push('The field "Article Link" Must not be empty !');
		} else if (!valuesToVerify.articleLink.match(urlRegexp)) {
			setErrors([...errors, 'The field "Article Link" Must be an URL !']);
			inputErrors.push('The field "Article Link" Must be an URL !');
		}

		if (valuesToVerify.title === '') {
			setErrors([...errors, 'The field "Title" Must not be empty !']);
			inputErrors.push('The field "Title" Must not be empty !');
		} else if (valuesToVerify.title.length < 3) {
			setErrors([
				...errors,
				'The field "title" Must contain at least 3 characters !',
			]);
			inputErrors.push('The field "title" Must contain at least 3 characters !');
		}

		if (valuesToVerify.author === '') {
			setErrors([...errors, 'The field "Author" Must not be empty !']);
			inputErrors.push('The field "Author" Must not be empty !');
		} else if (valuesToVerify.author.length < 2) {
			setErrors([
				...errors,
				'The field "Author" Must contain at least 2 characters !',
			]);
			inputErrors.push('The field "Author" Must contain at least 2 characters !');
		}

		if (!valuesToVerify.imageLink.match(urlRegexp)) {
			setErrors([...errors, 'The field "Image Link" Must be an URL !']);
			inputErrors.push('The field "Image Link" Must be an URL !');
		}

		if (!valuesToVerify.publishDate.match(dateRexexp)) {
			setErrors([...errors, 'The field "Punlished Date" Must be a date !']);
			inputErrors.push('The field "Punlished Date" Must be a date !');
		}

		valuesToVerify.description =
			valuesToVerify.description.length > 87
				? `${valuesToVerify.description.substring(0, 87)}...`
				: valuesToVerify.description;

		if (valuesToVerify.tags.length > 0) {
			valuesToVerify.tags.forEach((tag, id) => {
				if (tag.length >= 3 && tag.length < 15) {
					tagsToVerify[id] = tag;
				}
			});
		}
		valuesToVerify.tags = tagsToVerify;

		if (inputErrors.length === 0 && inputErrors.length === 0) {
			const publishDate = new Date(valuesToVerify.publishDate);
			const readableDate = `${monthNames[publishDate.getMonth()]
				} ${publishDate.getDate()}`;

			const verifiedValues = {
				title: valuesToVerify.title,
				description: valuesToVerify.description,
				readable_publish_date: readableDate,
				url: valuesToVerify.articleLink,
				cover_image: valuesToVerify.imageLink,
				social_image: valuesToVerify.imageLink,
				published_at: valuesToVerify.publishDate,
				tag_list: valuesToVerify.tags,
				user: {
					name: valuesToVerify.author,
				},
			};

			handleAddArticle(verifiedValues);
		}
	};
	return (
		<>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<div>
					<div>
						<input
							type="text"
							name="articleLink"
							placeholder="Article Link"
							required
						/>
					</div>
					<div>
						<input type="text" name="imageLink" placeholder="Image Link" />
					</div>
					<div>
						<input type="text" name="title" placeholder="Title" required />
					</div>
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
					<label htmlFor="publishDate">
						Published date:
						<input
							type="datetime-local"
							name="publishDate"
							id="publishDate"
							required
						/>
					</label>
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
			{errors && (
				<div className="form-errors">
					{errors.map((error) => (
						<p key={error}>{error}</p>
					))}
				</div>
			)}
		</>
	);
};

FormAddArticle.propTypes = {
	children: PropTypes.node.isRequired,
	handleAddArticle: PropTypes.func.isRequired,
};

export default FormAddArticle;
