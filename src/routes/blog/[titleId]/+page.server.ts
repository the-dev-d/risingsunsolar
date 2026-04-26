import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

// export const entries: EntryGenerator = async () => {

// 	const fs = await import('fs/promises');
// 	const path = await import('path');

// 	try {
// 		const filePath = path.join(process.cwd(), 'static', 'api', 'blogs.json');
// 		const data = await fs.readFile(filePath, 'utf-8');
// 		const blogs = JSON.parse(data);

// 		return blogs
// 			.filter((b: any) => b.title && b.title !== '=====')
// 			.map((b: any) => ({ titleId: b.titleId }));
// 	} catch (e) {
// 		console.error("Failed to load entries", e);
// 		return [];
// 	}
// };

export const load: PageServerLoad = async ({ params, fetch }) => {
	// Fetch the list to find the UUID
	const listRes = await fetch('/api/blogs.json');
	const blogs = await listRes.json();

	const blogMeta = blogs.find((b: any) => b.titleId === params.titleId);

	if (!blogMeta) {
		error(404, 'Blog not found');
	}

	// Fetch the specific blog's full data
	const blogRes = await fetch(`/api/${blogMeta.id}.json`);
	const blog = await blogRes.json();

	return {
		blog
	};
};
