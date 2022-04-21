import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Dashboard from "./Dashboard"
import ErrorPage from "./ErrorPage";

import Book from "./books/detail"
import Addbook from "./books/add"
import Editbook from "./books/edit"

import User from "./users/detail"
import Adduser from "./users/add"
import Edituser from "./users/edit"

export default function WebRouter(params) {
    return (
        <>
            <Switch>
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="book" element={<Book />} />
                <Route path="book/add" element={<Addbook />} />
                <Route path="book/edit" element={<Editbook />} />
                <Route path="user" element={<User />} />
                <Route path="user/add" element={<Adduser />} />
                <Route path="user/edit" element={<Edituser />} />
                <Route path="/*" element={<ErrorPage />} />
            </Switch>
        </>
    );
}
