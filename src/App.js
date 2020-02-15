import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const fnCount = new Set();

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  // below fn was creating new instance of handleAddPost every time a state was changing
  // function handleAddPost(post) {
  //   setPosts([post, ...posts]);
  // }
  // using React.useCallback ref
  const handleAddPost = React.useCallback(
    post => {
      setPosts([post, ...posts]);
    },
    [posts]
  );
  fnCount.add(handleAddPost);
  console.log(fnCount);

  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <>
      <Header user={user} setUser={setUser} />
      {counter}
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
        +
      </button>
      <CreatePost
        user={user}
        setPosts={setPosts}
        handleAddPost={handleAddPost}
      />
      <PostList posts={posts} />
    </>
  );
}

export default App;
