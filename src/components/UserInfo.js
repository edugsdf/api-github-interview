import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from 'react-router-dom';
import { AuthContext } from "../App";
import { busca } from "../apiOpen";
import Header from "./Header";

export default function UserInfo() {

  const { state } = useContext(AuthContext);
  const { usuario } = useParams();
  const [infos, setInfos] = useState({});

  useEffect(() => {
      busca(`${usuario}`, setInfos)
  }, [usuario]);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }  

  return (
    <div className="row">
      <Header />
      <div className="mt-1">
        <img src={infos.avatar_url} className="rounded-circle" width="200" alt="Avatar" />
      </div>
      <div className="mt-1">
      <p>{infos.name} | {infos.public_repos} Repos </p>
      <p>{infos.bio}</p>
      </div>

    </div>
  );
}