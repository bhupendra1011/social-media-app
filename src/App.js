import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = React.createContext();
export const PostContext = React.createContext({
  posts: []
});

function App() {
  const [user, setUser] = React.useState("");
  //const [posts, setPosts] = React.useState([]);
  const initialPostsState = React.useContext(PostContext);
  // dispatch fn is optimized so we dont have to worry about using callback hook
  const [state, dispatch] = React.useReducer(postReducer, initialPostsState);

  // below fn was re creating new instance of handleAddPost every time a state was changing
  // function handleAddPost(post) {
  //   setPosts([post, ...posts]);
  // }
  // using React.useCallback ref
  // const handleAddPost = React.useCallback(
  //   post => {
  //     setPosts([post, ...posts]);
  //   },
  //   [posts]
  // );

  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />

        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
