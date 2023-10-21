import React from "react";

const Header = ({ user }) => {
  if (!user) {
    return (
      <div className="header">
        <h1>IDEABOX</h1>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="headMid">
        <h1>IDEABOX</h1>
      </div>
      <div className="headRight">
        <p>{user.name}</p>
        <img src={user.picture} alt="profile" className="headerImage" />
      </div>
    </div>
  );
};

export default Header;
