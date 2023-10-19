'use client';
import React from 'react';
import Link from 'next/link';

const SocialShare = ({ tags }) => {
	const handleShare = (e, platform) => {
		e.preventDefault();
		const shareText = 'Check this out!'; // The text you want to share
		const shareUrl = window.location.href; // Getting current page URL
		console.log(shareUrl);
		let shareFullUrl = '';

		switch (platform) {
			case 'facebook':
				shareFullUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					shareUrl
				)}&text=${encodeURIComponent(shareText)}`;
				break;
			case 'linkedin':
				shareFullUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
					shareUrl
				)}&title=${encodeURIComponent(shareText)}`;
				break;
			case 'twitter':
				shareFullUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
					shareUrl
				)}&text=${encodeURIComponent(shareText)}`;
				break;
			default:
				break;
		}

		window.open(shareFullUrl, '_blank', 'noopener,noreferrer');
	};

	return (
		<div className="row justify-content-center">
			<div className="col-lg-8">
				<div className="row g-4">
					<div className="col-lg-6">
						<div className="social-share">
							<p>Share on</p>
							<ul className="social-media">
								<li>
									<button
										type="button"
										onClick={(e) => handleShare(e, 'linkedin')}
										aria-label="Share on linkedin"
									>
										<svg
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.91659 5.25H0.583252V12.8333H2.91659V5.25Z"
												fill="white"
											/>
											<path
												d="M1.74992 2.91683C2.39425 2.91683 2.91659 2.3945 2.91659 1.75016C2.91659 1.10583 2.39425 0.583496 1.74992 0.583496C1.10559 0.583496 0.583252 1.10583 0.583252 1.75016C0.583252 2.3945 1.10559 2.91683 1.74992 2.91683Z"
												fill="white"
											/>
											<path
												d="M10.3542 4.6665C9.89544 4.66778 9.44293 4.77494 9.03046 4.97995C8.61799 5.18497 8.25623 5.48255 7.97222 5.85045V5.18778H5.25V12.8332H7.97222V7.96792C7.97222 7.59925 8.11562 7.24568 8.37088 6.98499C8.62614 6.7243 8.97234 6.57785 9.33333 6.57785C9.69432 6.57785 10.0405 6.7243 10.2958 6.98499C10.551 7.24568 10.6944 7.59925 10.6944 7.96792V12.8332H13.4167V7.79416C13.4167 6.96466 13.094 6.16912 12.5197 5.58257C11.9454 4.99602 11.1664 4.6665 10.3542 4.6665Z"
												fill="white"
											/>
										</svg>
									</button>
								</li>
								<li>
									<button
										type="button"
										onClick={(e) => handleShare(e, 'facebook')}
										aria-label="Share on facebook"
									>
										<svg
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.37639 7.05361V13.1074C5.37639 13.1892 5.44457 13.2711 5.54001 13.2711H7.78974C7.87155 13.2711 7.95336 13.2029 7.95336 13.1074V6.94453H9.57589C9.6577 6.94453 9.72587 6.87636 9.73951 6.79455L9.87586 4.95386C9.88949 4.85842 9.80768 4.77661 9.71224 4.77661H7.93972V3.46767C7.93972 3.15407 8.18515 2.90865 8.49875 2.90865H9.75314C9.83495 2.90865 9.91676 2.84047 9.91676 2.74503V0.904339C9.91676 0.822531 9.84859 0.740723 9.75314 0.740723H7.62612C6.38536 0.740723 5.37639 1.74969 5.37639 2.99045V4.77661H4.25834C4.17654 4.77661 4.09473 4.84478 4.09473 4.94022V6.79455C4.09473 6.87636 4.1629 6.95817 4.25834 6.95817H5.37639V7.05361Z"
												fill="white"
											/>
										</svg>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<ul className="tags">
							{tags &&
								tags.map((tag, index) => <li key={index}>{tag.name}</li>)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialShare;
