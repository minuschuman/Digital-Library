import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";

export default function Detail() {
    const { _id } = useParams();
    const [book, setBook] = useState([]);//useState(movies[showId-1])
    useEffect(() => {
        Axios.get(`/books/${_id}`).then((response) => {
            setBook(response.data)
        })
    }, [_id]);
    return (
        <>
            <div className="container-fluid">
                {
                    <>
                        name:{book.name}<br />
                        isbn
                        author
                        price
                    </>
                    // Object.entries(book).map(([index, value], i) => {
                    //     return (
                    //         <div key={i}>
                    //             {index}
                    //         </div>
                    //     )
                    // })
                }
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid col-md-6 align-middle" src={Axios.defaults.baseURL + "../" + book.bookFile} alt={book.name} />
                    </div>
                    <div className="col-8">
                        <h1>{book.name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
