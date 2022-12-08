import unknow from '@image/unknow.png';
import PropTypes from 'prop-types';
import React from 'react';

const Article = ({ article, deleteArticle }) => {
	const {
		title,
		description,
		url,
		user,
		tag_list: tags,
		published_at: publicationDate,
		readable_publish_date: readablePublicationDate,
		social_image: coverImg,
	} = article;

	const date = new Date(publicationDate);
	const formatedDate = `${readablePublicationDate} ${date.getFullYear()}`;

	const handleDelete = (event, id) => {
		event.preventDefault();
		deleteArticle(id);
	};

	return (
		<article>
			<div className="card">
				<div className="coverImg">
					<a href={url}>
						{coverImg && <img src={coverImg} alt={`${title} Cover.`} />}
						{!coverImg && <img src={unknow} alt={`${title} Cover.`} />}
					</a>
				</div>
				<div className="content">
					<div className="tags">
						{tags.map((tag) => (
							<span key={tag} className="tag">
								{tag}
							</span>
						))}
					</div>
					<div>
						<a href={url}>
							<h3>{title}</h3>
						</a>
						<p className="description">{description}</p>
					</div>
					<div className="user">
						{user.profile_image_90 && (
							<img
								src={user.profile_image_90}
								alt={`${user.name} Profile`}
							/>
						)}
						<div>
							<p>
								By
								<a href={`https://dev.to/${user.username}`}>
									<strong>{user.name}</strong>
								</a>
							</p>
							<p>{formatedDate}</p>
						</div>
					</div>

					{deleteArticle != null && (
						<button
							type="button"
							className="delete-article"
							onClick={(e) => handleDelete(e, article.id)}>
							<svg
								width="261"
								height="261"
								viewBox="0 0 261 261"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M206.625 43.5H168.562L157.688 32.625H103.312L92.4375 43.5H54.375V65.25H206.625M65.25 206.625C65.25 212.393 67.5415 217.926 71.6204 222.005C75.6993 226.083 81.2315 228.375 87 228.375H174C179.768 228.375 185.301 226.083 189.38 222.005C193.458 217.926 195.75 212.393 195.75 206.625V76.125H65.25V206.625Z" />
							</svg>
						</button>
					)}
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	article: PropTypes.instanceOf(Object).isRequired,
	deleteArticle: PropTypes.func,
};

Article.defaultProps = {
	deleteArticle: null,
};

export default Article;
