import React from "react";

import { PostContext } from "../App";

function CreatePost({ user, setPosts, handleAddPost }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handlePostSubmit(e) {
    e.preventDefault();
    const post = { user, content, image, id: Date.now() };

    dispatch({ type: "ADD_POST", payload: { post } });
    // handleAddPost(post);
    // using callback from App to add post
    // setPosts(prevPosts => [post, ...prevPosts]);
    // clearing input fields
    setContent("");
    imageInputRef.current.value = "";
  }
  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={content}
          placeholder="Add post text"
          onChange={e => setContent(e.target.value)}
        />
        <input
          ref={imageInputRef}
          type="file"
          onChange={e => setImage(e.target.files[0])}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CreatePost;
