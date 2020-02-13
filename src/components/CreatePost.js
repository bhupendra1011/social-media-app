import React from "react";

function CreatePost() {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  function handlePostSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="Add post text"
          onChange={e => setContent(e.target.value)}
        />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <button>Submit</button>
      </form>
      <p> {content}</p>
      {image && (
        <img
          alt="post-img"
          style={{ width: 200, height: 100, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        />
      )}
    </div>
  );
}
export default CreatePost;
