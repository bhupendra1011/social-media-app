import React from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, user, content, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }
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
        <br />
        {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
      </p>
    </>
  );
}

export default Post;
