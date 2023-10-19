'use client';

import { useEffect } from 'react';
import Cursor from '../utils/cursor';
import { useIsClient } from '../hooks/useIsClient';

const CursorEffect = ({ children }) => {
	useEffect(() => {
		const cursor = new Cursor(document.querySelector('.cursor'));
		const button = document.querySelectorAll('button, a');

		button.forEach((button) => {
			button.addEventListener('mouseenter', () => cursor.enter());
			button.addEventListener('mouseleave', () => cursor.leave());
		});
	}, []);

	return <>{children}</>;
};

export default CursorEffect;
