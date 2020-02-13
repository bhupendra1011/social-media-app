import React from "react";
function Header({ user, setUser }) {
  return (
    <div>
      <h2>Welcome {user}</h2>
      <button onClick={() => setUser("")}>LogOut</button>
    </div>
  );
}
export default Header;
