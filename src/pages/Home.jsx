import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

function Home() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Navbar />

      <Hero />

      <StatsCards posts={posts} />

      <BlogForm posts={posts} setPosts={setPosts} />

      <BlogList posts={posts} setPosts={setPosts} />

      <Footer />
    </>
  );
}

export default Home;