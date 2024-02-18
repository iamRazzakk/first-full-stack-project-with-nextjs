async function getAllPost() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogData = await result.json();
  return blogData;
}

export default getAllPost;
