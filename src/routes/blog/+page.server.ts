import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// Fetch the static json list
	const response = await fetch('/api/blogs.json');
	const blogs = await response.json();

	// Sort blogs by date (latest first)
	blogs.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		blogs
	};
};
