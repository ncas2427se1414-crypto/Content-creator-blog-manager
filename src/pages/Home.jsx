import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/Footer";

function Home() {
  const [posts, setPosts] = useState(() => {
    const savedPosts =
      localStorage.getItem("posts");

    return savedPosts
      ? JSON.parse(savedPosts)
      : [];
  });

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editingPost, setEditingPost] =
    useState(null);

  const [selectedPost, setSelectedPost] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);

  return (
    <>
      <Navbar />

      <Hero />

      <StatsCards posts={posts} />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />
      </div>

      <BlogForm
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />

      <BlogList
        posts={posts}
        setPosts={setPosts}
        searchTerm={searchTerm}
        setEditingPost={
          setEditingPost
        }
        setSelectedPost={
          setSelectedPost
        }
      />

      <BlogDetail
        post={selectedPost}
        onClose={() =>
          setSelectedPost(null)
        }
      />

      <Footer />
    </>
  );
}

export default Home;