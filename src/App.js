import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export const userContext = React.createContext();

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  // below fn was re creating new instance of handleAddPost every time a state was changing
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

  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <userContext.Provider value={user}>
      <Header user={user} setUser={setUser} />

      <CreatePost
        user={user}
        setPosts={setPosts}
        handleAddPost={handleAddPost}
      />
      <PostList posts={posts} />
    </userContext.Provider>
  );
}

export default App;
