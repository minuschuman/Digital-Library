import React, { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import styled from "styled-components"

import WebRouter from "./components/WebRouter";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import SideNav from "./components/includes/SideNav";
import BreadCrumb from "./components/includes/BreadCrumb"

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
  const check = window.location.pathname.slice(1);
  const [selected, setSelected] = useState(check);
  return (
    <>
      <BrowserRouter>
        {token ? (
          <>
            <SideNav setToken={token} onToggle={setToggle} onSelect={setSelected} />
            <Main expanded={toggle}>
              <BreadCrumb url={selected} />
              <WebRouter />
            </Main>
          </>
        ) : (
          <Switch>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/*" element={<ErrorPage />} />
          </Switch>
        )}
      </BrowserRouter>
    </>
  )
};
