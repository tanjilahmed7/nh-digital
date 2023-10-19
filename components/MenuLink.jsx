import Link from 'next/link';

const MenuLink = ({ id, navLinks }) => {
	// Check if navLinks and its nested properties exist
	const menuItems = navLinks?.menu?.menuItems?.nodes || [];

	return (
		<ul className="collapse" id={id}>
			{menuItems.map((navLink) => (
				<li key={navLink.id}>
					<Link href={navLink.url}>{navLink.label}</Link>
				</li>
			))}
		</ul>
	);
};

export default MenuLink;
