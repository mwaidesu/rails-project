function PostCard({ post }) {

  
  function handleDelete() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((response) => {
      console.log("Item was deleted!");
    });
    alert("Reload")
  }
  return (
    // <div className=" card mx-4 text-start my-4 p-4 ">
    <div className="container-fluid">
      <div className="row">
        <div className="shadow p-4 m-5 bg-white rounded w-50 col align-self-center text-start">
          <div>
            <img
              src={post.image}
              alt={post.title + "image"}
              class="img-fluid card-image"
            />
          </div>

          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>

          <div>
            <button className="btn btn-danger mx-2 p-2" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn-secondary mx-2 p-2">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
