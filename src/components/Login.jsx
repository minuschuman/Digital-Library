import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Axios from "axios";

import "../css/loginStyle.css";

async function loginUser(credentials) {
    return Axios.post(`user/login`, {
        email: credentials.email, password: credentials.password
    }).then((res) =>
        res.data
    ).catch(
        err => (
            console.log("err")
        )
    )
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password,
        });
        if (token.token !== false) {
            setToken(token);
            window.location.href = "/";
        }
        else {
            alert("Incorrect Password");
        }
    };
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: "2000" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand nav-link" rel="noreferrer" target="_blank" href="https://mdbootstrap.com/docs/standard/">
                            <strong>Digital Library</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                        </div>
                    </div>
                </nav>
            </header>

            <div id="intro" className="bg-image shadow-2-strong">
                <div className="mask d-flex align-items-center h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-md-8">
                                <form onSubmit={handleSubmit} className="bg-white  rounded-5 shadow-5-strong p-5">
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form1Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" htmlFor="form1Example1">Email address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form1Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" htmlFor="form1Example2">Password</label>
                                    </div>
                                    <div className="row mb-4 d-none">
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
                                                <label className="form-check-label" htmlFor="form1Example3">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col text-center">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <footer className="bg-dark text-center text-white">
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </>
    );
}

