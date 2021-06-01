import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import UserRepos from "./components/UserRepos";
import UserStarred from "./components/UserStarred";
import { initialState, reducer } from "./store/reducer";


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <div className="container-fluid">
      <div className="row">
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/userinfo/:usuario" component={UserInfo}/>
            <Route path="/userrepos/:usuario" component={UserRepos}/>
            <Route path="/userstarred/:usuario" component={UserStarred}/>
            <Route path="/" component={Home}/>
          </Switch>
          
        </Router>
      </div>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
