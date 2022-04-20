import React, { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Login from "./components/Login";
import Test from "./components/test";
import CideNav from "./components/CideNav";
import WebRouter from "./components/WebRouter";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

const Main = styled.main`
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    height:100vh;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${(props) => (props.expanded ? 240 : 64)}px;
`;

export default function App(params) {
  const token = getToken();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        {token ? (
          <>
            <CideNav setToken={token} onToggle={setToggle} />
            <Main expanded={toggle}>
              <WebRouter />
            </Main>
          </>
        ) : (
          <Switch>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/*" element={<Test />} />
          </Switch>
        )}
      </BrowserRouter>
    </>
  )
};
