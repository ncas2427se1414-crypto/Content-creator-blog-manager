function BlogList({ posts, setPosts }) {
  const deletePost = (id) => {
    const updatedPosts = posts.filter(
      (post) => post.id !== id
    );

    setPosts(updatedPosts);
  };

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>

      {posts.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>

            <p>
              <strong>Author:</strong> {post.author}
            </p>

            <p>
              <strong>Status:</strong> {post.status}
            </p>

            <p>{post.content}</p>

            <button
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;