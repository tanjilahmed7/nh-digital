import LeadershipSlider from './leadershipSlider';

// leaders data
const leaders = [
	{
		id: 0,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 1,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 2,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 3,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 4,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 5,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 6,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 7,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 8,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
	{
		id: 9,
		name: 'Affan Chowdhury',
		designation: 'Co-founder and CEO',
		bio: '“Quis nulla velit volutpat et leo aliquam porttitor ullamcorper tellus lorem ipsom.”',
		img: {
			src: '/images/leadership/01.png',
			width: 300,
			height: 300,
		},
	},
];

const Leadership = ({ data }) => {
	const { title, subtitle, leadership } = data || {};
	return (
		<section className="leadership section">
			<div className="container">
				<div className="section-header">
					<h2>{title}</h2>
					<p>{subtitle}</p>
				</div>
				<LeadershipSlider leaders={leadership} />
			</div>
		</section>
	);
};

export default Leadership;
