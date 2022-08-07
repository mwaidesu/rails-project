import { useState} from "react"
import { useNavigate } from "react-router";


function PostForm() {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    body: "",
  });

//   const [blog, setBlog] = useState([]);
//   function addPost(e) {
//     const post = e.target.value;
//     console.log(post);
//     setBlog([...blog, post]);
//   }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newPost) => console.log(newPost));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });

    navigate('/')
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
    
      <form onSubmit={handleSubmit} className="my-5 text-center">
      <h1 className = "text-center">Write An Article</h1>
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

        <button className="form-control btn btn-danger my-4 w-50 py-3" type="submit" >New Post</button>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}



export default PostForm;