import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function Posts(
//   {
//   onUpdatePost
// }
) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <>
      <section>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <PostCard key={post.id} post={post}
          //  onUpdatePost={onUpdatePost}
            />
        ))}

        
      </section>
    </>
  );
}

export default Posts;
