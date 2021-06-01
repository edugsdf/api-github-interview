import React, { useContext, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function Header() {

  const { dispatch } = useContext(AuthContext);
  const nameForm = useRef(null)
  let history = useHistory();
  const { usuario } = useParams();


  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  }

  const handleOnSubmit = (e) => {
    const form = nameForm.current

    e.preventDefault();
    history.push(`/userinfo/${form['txtuser'].value}`)
  }  

  return (
    <>
      <div className="row">
        <div>
          <button onClick={()=> handleLogout()} type="button" className="btn btn-danger btn-lg float-end">Logout</button>        
        </div>

        <div className="row">
        <div className="form-group w-75">
          <form ref={nameForm} onSubmit={handleOnSubmit}>
          <div className="input-group mb-2">
            <input name="txtuser" id="txtuser" className="form-control input-sm" type="text" placeholder="digite o usuário para pesquisar..." /> 
            <div className="input-group-append"> &nbsp;
            <button type="submit" className="btn btn-primary btn-l">Pesquisar</button>
            </div>
            </div>
          </form>
          </div>
        </div>
        <div className="row">
          <div>
          {
            usuario != null
            ? <div>
                <Link to={`/userrepos/${usuario}`}><button type="button" href="/home" className="btn btn-outline-primary">Repos</button></Link>
                &nbsp;
                <Link to={`/userstarred/${usuario}`}><button type="button" className="btn btn-outline-secondary">Starred</button></Link>
              </div>
            : <div></div>
          }
          </div>
        </div>
      </div>
    </>
  );
}