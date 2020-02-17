import React from "react";
import { userContext } from "../App";

function Post({ image, user, content }) {
  return (
    <userContext.Consumer>
      {currentUser => {
        const isCurent = currentUser === user;
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
              <strong style={{ color: isCurent && "green" }}>{user}</strong>
            </p>
          </>
        );
      }}
    </userContext.Consumer>
  );
}

export default Post;
