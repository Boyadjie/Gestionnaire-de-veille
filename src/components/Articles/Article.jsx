import unknow from '@image/unknow.png';
import PropTypes from 'prop-types';
import React from 'react';

const Article = ({ article }) => {
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
						<img src={user.profile_image_90} alt={`${user.name} Profile`} />
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
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	article: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
