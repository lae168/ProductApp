// Editproduct.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApiClient from "../ApiClient";

function Editproduct() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [message, setMessage] = useState('');
    const [inputs, setInputs] = useState([]);
    const [fileimage, setPhoto] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', inputs.name);
        formData.append('description', inputs.description);
        formData.append('image', fileimage);
        try {
            const message = await ApiClient.updateProduct(id, formData);
            setMessage(message);
            setTimeout(() => {
                navigate('/productlist');
            }, 2000);
        } catch (error) {
            console.error("Error updating product:", error);
            // Handle error
        }
    }

    useEffect(() => {
        async function fetchProduct() {
            try {
                const product = await ApiClient.getProductById(id);
                setInputs(product);
            } catch (error) {
                console.error("Error fetching product:", error);
                // Handle error
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-4">
                        <h5 className="mb-4">Edit Product </h5>
                        <p className="text-success"><b>{message}</b></p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Title </label>
                                <div className="col-sm-9">
                                    <input type="text" value={inputs.name || ''} className="form-control" name="name" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Description </label>
                                <div className="col-sm-9">
                                    <input type="text" value={inputs.description || ''} className="form-control" name="description" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Image</label>
                                <div className="col-sm-9">
                                    <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
                                    <input type="file" className="form-control" onChange={(e) => setPhoto(e.target.files[0])} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3"></label>
                                <div className="col-sm-9">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Editproduct;
