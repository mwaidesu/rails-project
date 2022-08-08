
// import {useParams } from 'react-router-dom';


function PostCard({ post, 
  
  // onUpdatePost 

}) {
  const { title, id, image, likes, body } = post;

  

  function handleLikeClick(
    // e
    )
     {
    // e.preventDefault();

    fetch(`/posts/${post.id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(likes));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  
  function handleDelete() {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log("Item was deleted!");
    });
  }

  function refresh() {
    window.location.reload();
  }

  function twoFn() {
    handleDelete();

    refresh();
  }  
  
  function anotherFn() {
    handleLikeClick();

    refresh();
  }



  

  return (
    // <div className=" card mx-4 text-start my-4 p-4 ">
    <div className="container-fluid mx-5">
      <div className="row mx-5">
        <div className="shadow p-4 m-5 bg-white rounded w-50 col align-self-center text-start">
          <div>
            <img
              src={image}
              alt={title + "image"}
              class="img-fluid card-image"
            />
          </div>

          {/* <Link onClick={()=> history.push(`/posts/${post.id}`)}> */}
          <div className="text-dark">
            <h2 className="">{title}</h2>
            <p>{body}</p>
          </div>
          {/* </Link> */}

          <div>

            <button className="btn btn-danger mx-2 p-2" onClick={twoFn}>
              Delete
            </button>
            {/* <button className="btn btn-secondary mx-2 p-2">Edit</button> */}
            <button className="btn btn-secondary mx-2 p-2" onClick={anotherFn}>{likes} Likes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
