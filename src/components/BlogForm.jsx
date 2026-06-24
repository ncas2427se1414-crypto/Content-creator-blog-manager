import { useState, useEffect } from "react";

function BlogForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setAuthor(editingPost.author);
      setContent(editingPost.content);
      setStatus(editingPost.status);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id
          ? {
              ...post,
              title,
              author,
              content,
              status
            }
          : post
      );

      setPosts(updatedPosts);
      setEditingPost(null);
    } else {
      const newPost = {
        id: Date.now(),
        title,
        author,
        content,
        status
      };

      setPosts([...posts, newPost]);
    }

    setTitle("");
    setAuthor("");
    setContent("");
    setStatus("Draft");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>
        {editingPost
          ? "Edit Blog"
          : "Create Blog"}
      </h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) =>
          setAuthor(e.target.value)
        }
        required
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        required
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Draft</option>
        <option>Published</option>
      </select>

      <button type="submit">
        {editingPost
          ? "Update Blog"
          : "Save Blog"}
      </button>
    </form>
  );
}

export default BlogForm;