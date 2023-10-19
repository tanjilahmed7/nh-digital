'use client';

import { useState } from 'react';
import ContactForm from './contactForm';
import { useIsClient } from '../hooks/useIsClient';
const ContactUs = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const isClient = useIsClient();

	const handleCollapsed = () => {
		setIsCollapsed(!isCollapsed);
	};

	if (!isClient) {
		return null;
	}

	return (
		<section className="contact-us">
			<div
				className={`panel ${isCollapsed ? 'collapsed' : ''}`}
				data-toggle="collapse"
				onClick={handleCollapsed}
			>
				<div className="container">
					<span>
						Let&apos;s talk about your project
						<span className="icon">
							<svg
								width="18"
								height="10"
								viewBox="0 0 18 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.334 8.85417L9.00065 3.64262e-07L0.667316 8.80167L1.83898 10L9.00065 2.42167L16.1357 10L17.334 8.85417Z"
									fill="white"
								/>
							</svg>
						</span>
					</span>
				</div>
			</div>
			<div className={`panel-body nh-collapse ${!isCollapsed ? 'show' : ''}`}>
				<div className="container">
					<div className="content">
						<div className="row gy-5 gy-lg-0 justify-content-between">
							<div className="col-lg-5">
								<h2 data-aos="fade-up" data-aos-delay="200">
									Discuss your project
								</h2>
								<span data-aos="fade-up" data-aos-delay="300">
									Want results-based marketing solutions?
								</span>
								<span data-aos="fade-up" data-aos-delay="400">
									We don’t make false promises!
								</span>
								<p data-aos="fade-up" data-aos-delay="500">
									We implement practical marketing strategies to help you grow
									organically, meet all KPI targets, improve ROI for paid social
									media ads, generate more leads and sales, and do our best to
									meet all campaign objectives.
								</p>
							</div>
							<div className="col-lg-6">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
