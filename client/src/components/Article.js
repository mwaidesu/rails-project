// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Article({post}) {
//   const id = useParams();

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(`/posts/${id}`)
//       .then((r) => r.json())
//       .then(setPosts);
//     console.log(posts);
//   }, []);


//   return (
//     <div>
//       <div className="container-fluid mx-5">
//         <div className="row mx-5">
//           <div className="shadow p-4 m-5 bg-white rounded w-50 col align-self-center text-start">
//             <div>
//               <img
//                 src={post.image}
//                 alt={post.title + "image"}
//                 class="img-fluid card-image"
//               />
//             </div>

//             <div>
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Article;
