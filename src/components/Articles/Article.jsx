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
		cover_image: coverImg,
	} = article;

	const formatedDate = publicationDate.substr(0, 10);

	return (
		<article>
			<a href={url}>
				<div className="card">
					<div className="coverImg">
						{coverImg && <img src={coverImg} alt={`${title} Cover.`} />}
					</div>
					<div className="content">
						<div className="meta">
							<p>
								Created by <strong>{user.name}</strong> the {formatedDate}
							</p>
						</div>
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
						<div>
							{tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</a>
		</article>
	);
};

Article.propTypes = {
	article: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
