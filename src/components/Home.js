import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../App";
import Header from "./Header";

export default function Home({ match }) {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const { avatar_url, name, public_repos, followers, following } = state.user

  return (
      <div className="row">
        <Header />
        <div>
          <div className="content">
          <h2>User logged, {name}</h2>
          <div className="mt-1">
            <img src={avatar_url} className="rounded-circle" width="200" alt="Avatar" />
          </div>
          <ul>
            <li>{public_repos} Repos</li>
            <li>{followers} Followers</li>
            <li>{following} Following</li>
          </ul>
          </div>
        </div>
      </div>
  );
}


