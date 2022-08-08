import { useState } from "react";

function PostForm() {
  // const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    body: "",
    likes: 0,
  });

  function handleSubmit(
    // e
    ) {
    // e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newPost) => console.log(newPost));
      }
      // else {
      //   response.json().then((errorData) => setErrors(errorData.errors));
      // }
    });

    setFormData("");
  }

  function refresh() {
    window.location.reload();
  }

  function twoFn() {
    handleSubmit();

    refresh();
  }

  function handleChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  }

  return (
    <>
      {/* <Navbar/> */}

      <form onSubmit={twoFn} className="my-5 text-center">
        <h1 className="text-center">Write An Article</h1>
        <div>
          <input
            className="form-control btn text-start my-4 w-50  border border-danger py-3"
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <textarea
            className="form-control btn text-start my-4 w-50  border border-danger py-3"
            id="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter blog content"
          />
        </div>
        <div>
          <input
            className="form-control btn text-start my-4 w-50  border border-danger py-3"
            type="text"
            id="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image url.."
          />
        </div>

        {/* <div>
          <input
          className="form-control btn text-start my-4 w-50 d-none  border border-danger py-3 d"
            type="number"
            id="likes"
            value={parseInt(0)}
            onChange={handleChange}
            placeholder="0 likes"
          />
        </div> */}

        <button
          className="form-control btn btn-danger my-4 w-50 py-3"
          type="submit"
        >
          New Post
        </button>
      </form>
    </>
  );
}

export default PostForm;
