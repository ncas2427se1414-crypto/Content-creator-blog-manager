function BlogList({
  posts,
  setPosts,
  searchTerm,
  setEditingPost,
  setSelectedPost
}) {
  const deletePost = (id) => {
    const updatedPosts = posts.filter(
      (post) => post.id !== id
    );

    setPosts(updatedPosts);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||
      post.author
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>

      {filteredPosts.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        filteredPosts.map((post) => (
          <div
            className="blog-card"
            key={post.id}
          >
            <h3>{post.title}</h3>

            <p>
              <strong>Author:</strong>
              {" "}{post.author}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}{post.status}
            </p>

            <p>
              {post.content.substring(
                0,
                100
              )}
              ...
            </p>

            <div className="btn-group">
              <button
                onClick={() =>
                  setEditingPost(post)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  setSelectedPost(post)
                }
              >
                Read More
              </button>

              <button
                onClick={() =>
                  deletePost(post.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;