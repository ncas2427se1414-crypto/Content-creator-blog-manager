function BlogDetail({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{post.title}</h2>

        <p>
          <strong>Author:</strong> {post.author}
        </p>

        <p>
          <strong>Status:</strong> {post.status}
        </p>

        <hr />

        <p>{post.content}</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;