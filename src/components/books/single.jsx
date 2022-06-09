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
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid col-md-6 align-middle" src={Axios.defaults.baseURL + "../" + book.bookFile} alt={book.name} />
                    </div>
                    <div className="col-8">
                        <h1>name:{book.name}</h1>
                        <h1>author: {book.author}</h1>
                        <h1>price: {book.price}</h1>
                        <h1>isbn: {book.isbn}</h1>
                        <h1>category: {book.category}</h1>
                        <h1>edition: {book.edition}</h1>
                        <h1>publication: {book.publication}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
