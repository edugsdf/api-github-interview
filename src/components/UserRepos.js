import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from 'react-router-dom';
import { AuthContext } from "../App";
import { busca } from "../apiOpen";
import Header from "./Header";

export default function UserRepos() {

  const { state } = useContext(AuthContext);
  const { usuario } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
      busca(`${usuario}/repos`, setRepos)
  }, [usuario ]);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }  

  return (
    <div className="row">
      <Header />
      <div className="mt-1">
      <h2>Repositories</h2>
      <ul className="list-group">
      {
        repos.map((info) => (
          <a href={info.html_url} target="_new">
          <li key={info.node_id} className="list-group-item"> {info.name} </li>
          </a>
        ))
      }
      </ul>        
      </div>

    </div>
  );
}