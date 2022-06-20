import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Dashboard(params) {
    const [getCountBook, setCountBook] = useState([]);
    const [getCountUser, setCountUser] = useState([]);
    const [getCountPending, setCountPending] = useState([]);

    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    useEffect(() => {
        Axios.get('/books').then((response) => {
            setCountBook(response.data.count)
        })
    }, [])

    useEffect(() => {
        Axios.get('/user', {
            headers: {
                "Authorization": "bearer " + userToken.token,
            },
        }).then((response) => {
            setCountUser(response.data.count)
        })
    }, [userToken.token])

    useEffect(() => {
        Axios.get('/orders/pending', {
            headers: {
                "Authorization": "bearer " + userToken.token,
            },
        }).then((response) => {
            setCountPending(response.data.orders.length)
        })
    }, [userToken.token])



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Books</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {getCountBook}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            users</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{getCountUser}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Pending</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {getCountPending}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Earnings (Monthly)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};
