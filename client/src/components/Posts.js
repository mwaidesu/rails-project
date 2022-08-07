import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);


//   const displayedposts = posts.filter(
//     (post) => selectedCategory === "All" || post.category === selectedCategory
//   );

  return (
    <>
      <section>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}

export default Posts;
