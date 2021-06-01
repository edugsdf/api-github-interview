import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from 'react-router-dom';
import { AuthContext } from "../App";
import { busca } from "../apiOpen";
import Header from "./Header";

export default function UserStarred() {

  const { state } = useContext(AuthContext);
  const { usuario } = useParams();
  const [starreds, setStarred] = useState([]);

  useEffect(() => {
      busca(`${usuario}/starred`, setStarred)
  }, [usuario]);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }  

  return (
    <div className="row">
      <Header />
      <div className="mt-1">
      <h2>Repositories - starred</h2>
      <ul className="list-group">
      {
        starreds.map((info) => (
          <a href={info.html_url} target="_new">
          <li className="list-group-item"> {info.name} </li>
          </a>
        ))
      }
      </ul>        
      </div>

    </div>
  );
}