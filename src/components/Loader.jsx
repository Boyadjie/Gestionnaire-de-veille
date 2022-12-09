import '@sass/content/loader.scss';

import React from 'react';

const Loader = () => {
	return (
		<div id="loader">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200px"
				height="200px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid">
				<rect x="13" y="13" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="39" y="13" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.125s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="65" y="13" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.25s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="13" y="39" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.875s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="65" y="39" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.375s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="13" y="65" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.75s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="39" y="65" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.625s"
						calcMode="discrete"
					/>
				</rect>
				<rect x="65" y="65" width="22" height="22" fill="#408bbd">
					<animate
						attributeName="fill"
						values="#333;#408bbd;#408bbd"
						keyTimes="0;0.125;1"
						dur="1s"
						repeatCount="indefinite"
						begin="0.5s"
						calcMode="discrete"
					/>
				</rect>
			</svg>
		</div>
	);
};

export default Loader;
