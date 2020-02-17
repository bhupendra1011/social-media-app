import React from "react";
import { userContext } from "../App";

function Post({ image, user, content }) {
  const currentUser = React.useContext(userContext);
  const isCurrentUser = currentUser === user;
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
      <p>
        Posted by :{" "}
        <strong style={{ color: isCurrentUser && "green" }}>{user}</strong>
      </p>
    </>
  );
}

export default Post;
