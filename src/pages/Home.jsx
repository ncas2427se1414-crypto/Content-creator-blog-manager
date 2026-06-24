import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

function Home() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <Navbar />

      <Hero />

      <StatsCards posts={posts} />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <BlogForm posts={posts} setPosts={setPosts} />

      <BlogList
        posts={posts}
        setPosts={setPosts}
        searchTerm={searchTerm}
      />

      <Footer />
    </>
  );
}

export default Home;