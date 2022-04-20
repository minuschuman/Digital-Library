import React, { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import styled from "styled-components"

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import Login from "./components/Login";
import Test from "./components/test";
// // import Header from "./components/Nav";
import CideNav from "./components/CideNav";

// import Book from "./components/books/detail"
// import Addbook from "./components/books/add"
// import Editbook from "./components/books/edit"

// import User from "./components/users/detail"
// import Adduser from "./components/users/add"
// import Edituser from "./components/users/edit"

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// const Main = styled.main`
//     position: relative;
//     overflow: hidden;
//     overflow-y: auto;
//     height:100vh;
//     transition: all .15s;
//     padding: 0 20px;
//     margin-left: ${(props) => (props.expanded ? 240 : 64)}px;
// `;

// function App() {
//   const [toggle, setToggle] = useState(false);
//   const token = getToken();
//   return (
//     <>
//       <Router>
//         {token ? (
//           <>
//             <CideNav setToken={token} onToggle={setToggle} />
//             <Main expanded={toggle}>
//               <Switch>
//                 <Route path="/" element={<Navigate replace to="/dashboard" />} />
//                 <Route path="book" element={<Book />} />
//                 <Route path="book/add" element={<Addbook />} />
//                 <Route path="book/edit" element={<Editbook />} />
//                 <Route path="user" element={<User />} />
//                 <Route path="user/add" element={<Adduser />} />
//                 <Route path="user/edit" element={<Edituser />} />
//                 <Route path="/*" element={<Test />} />
//               </Switch>
//             </Main>
//           </>
//         ) : (
//           <Switch>
//             <Route path="/" element={<Login setToken={setToken} />} />
//             <Route path="/*" element={<Test />} />
//           </Switch>
//         )}
//       </Router>
//     </>
//   );
// }

// export default App;


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
