import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Detail(params) {
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        Axios.get('/books').then((response) => {
            setBooksList(response.data.books);
        })

    }, []);

    return (
        <div className="mx-md-4 px-md-4 py-4 mt-2">
            <h2 className='card-header font-weight-bold '>Add Comming Soon</h2>
            <div className="container-fluid my-3">
                <section >
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                {
                                    booksList.map((val) =>
                                        <div className="col-md-3 px-3 my-1 my-md-3" key={val._id}>
                                            <div className="card h-100">
                                                <div className="pt-3 pb-4 text-center h-100">
                                                    <div className="poster-frame-holder mb-2">
                                                        <span className="poster-frame-holder d-inline-block align-middle"></span>
                                                        <img className="img-fluid col-md-6 align-middle" src={Axios.defaults.baseURL + ".." + val.bookFile} alt={val.name} />
                                                    </div>
                                                    <div className="trailer-frame-holder">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </section>
            </div>
        </div>
    )
};