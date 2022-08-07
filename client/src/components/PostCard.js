

function PostCard({ post }) {
  return (
    <div className="border border-danger mx-4 btn text-start my-4 w-50  border border-danger py-3">
      <div>
        <img src={post.image} alt={post.title + "image"} class="img-fluid card-image"  />
      </div>


      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}



export default PostCard;