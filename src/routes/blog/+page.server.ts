import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// Fetch the static json list
	const response = await fetch('/api/blogs.json');
	const blogs = await response.json();

	return {
		blogs
	};
};
