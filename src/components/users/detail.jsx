import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Detail(params) {
    const [booksList, setBooksList] = useState([]);

    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    useEffect(() => {
        Axios.get('/user', {
            headers: {
                "Authorization": "bearer " + userToken.token,
            },
        }).then((response) => {
            setBooksList(response.data.books);
            console.log(response.data);
        })
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className=" mx-md-4 px-md-4 py-4 mt-md-4" >
                    <h2 className='card-header font-weight-bold '>User List</h2>

                    <div className="row">
                        <div className="col-12 text-right">
                            {/* <Link to={{ pathname: `/add-movie` }} className="btn btn-success mt-2 "><i className="fas fa-plus"></i> Add</Link> */}
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table mx-0 px-2 table-hover table-dark">
                            <thead>
                                <tr className='m-0 p-0 shadow-sm myTableHead' >
                                    <th scope="col">S.N.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    {/* 
                                    <th scope="col" className="text-center">View</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booksList.map((val, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{++i}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.contact}</td>
                                                <td>{val.address}</td>
                                                {/* <td>{new Date(val.releaseDate).toISOString().slice(0, 19).replace('T', ' ')}</td> */}
                                                {/* <td className="text-center bg-transparent table-borderless bg-dark "></td> */}
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
};