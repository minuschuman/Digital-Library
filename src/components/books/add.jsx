import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Add(params) {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    const [name, setName] = useState("");
    const [iSBN, setISBN] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [publication, setPublication] = useState("");
    const [edition, setEdition] = useState("");
    const [sendUpData, setSendUpData] = useState([]);
    const ref = useRef();

    const submit = (e) => {
        e.preventDefault();
        if (!name || !selectedFile) {
            alert("Any field can't be blank");
        } else {
            const formData = new FormData();
            formData.append("bookFile", selectedFile);
            formData.append("name", name);
            formData.append("isbn", iSBN);
            formData.append("author", author);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("publication", publication);
            formData.append("edition", edition);
            Axios.post('/books', formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    "Authorization": "bearer " + userToken.token,
                },


            }).then(() => {
                // window.location.reload(false);
                navigate("/book/detail")
            }, [])
                .catch((err) => { console.log(err) });
            setSendUpData([...sendUpData, { name: name }]);
            ref.current.value = "";
        }
    };
    return (
        <div className="">
            {/* <h2 className='card-header font-weight-bold '>Add Book</h2> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="text-ligh-t col-md-6">
                        <form onSubmit={submit} method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <label>Book</label>
                                <input type="text" name="bookname" className="form-control" placeholder="" value={name} onChange={(e) => { setName(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>ISBN</label>
                                <input type="text" name="" className="form-control" placeholder="" value={iSBN} onChange={(e) => { setISBN(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" name="" className="form-control" placeholder="" value={author} onChange={(e) => { setAuthor(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" name="" className="form-control" placeholder="" value={price} onChange={(e) => { setPrice(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" name="" className="form-control" placeholder="" value={category} onChange={(e) => { setCategory(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>Publication</label>
                                <input type="text" name="" className="form-control" placeholder="" value={publication} onChange={(e) => { setPublication(e.target.value); }} />
                            </div>
                            <div className="form-group">
                                <label>Edition</label>
                                <input type="text" name="" className="form-control" placeholder="" value={edition} onChange={(e) => { setEdition(e.target.value); }} />
                            </div>
                            {/* <div className="form-group">
                                <label>Release Date</label>
                                <input type="Date" name="release" className="form-control" placeholder="Release Date" value={date} onChange={(e) => { setDate(e.target.value); }} />
                            </div> */}
                            <div className="form-group">
                                <label>Book File</label>
                                <input type="file" name="img" className="form-control" placeholder="Add img" ref={ref} onChange={changeHandler} />
                            </div>
                            <button className="btn btn-primary btn-block">add</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
};