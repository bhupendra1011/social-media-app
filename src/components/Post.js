import React from "react";

function Post({ image, user, content }) {
  return (
    <>
      <p> {content}</p>
      {image && (
        <img
          alt="post-img"
          style={{ width: 200, height: 100, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>Posted by : {user}</p>
    </>
  );
}

export default Post;
