function StatsCards({ posts }) {
  const published = posts.filter(
    (post) => post.status === "Published"
  ).length;

  const drafts = posts.filter(
    (post) => post.status === "Draft"
  ).length;

  return (
    <div className="stats">
      <div className="card">
        <h2>{posts.length}</h2>
        <p>Total Posts</p>
      </div>

      <div className="card">
        <h2>{drafts}</h2>
        <p>Drafts</p>
      </div>

      <div className="card">
        <h2>{published}</h2>
        <p>Published</p>
      </div>
    </div>
  );
}

export default StatsCards;