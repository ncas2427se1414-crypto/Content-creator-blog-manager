import { useState } from "react";

function BlogForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      author,
      content,
      status,
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setAuthor("");
    setContent("");
    setStatus("Draft");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Draft</option>
        <option>Published</option>
      </select>

      <button type="submit">
        Save Blog
      </button>
    </form>
  );
}

export default BlogForm;