import { revalidateTag } from 'next/cache';
export async function POST(request) {
	const payload = await request.json({
		type: 'application/json',
	});
	if (payload.action_type === 'update' || payload.action_type === 'create') {
        revalidateTag('cms');
        console.log('CMS cache invalidated');
	}
	return new Response(null, { status: 204 });
}
