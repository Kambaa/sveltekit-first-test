async function getPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	console.log(response);
	return response.json();
}

export async function load() {
	return {
		posts: await getPosts()
	};
}
