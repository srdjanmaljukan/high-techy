import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import {toast} from "react-toastify";
import { useUpdateProductMutation, useGetProductDetailsQuery } from "../../slices/productsApiSlice";

function ProductEditScreen() {

    const {id: productId} = useParams();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState("");

    const {data: product, isLoading, refetch, error} = useGetProductDetailsQuery();

    console.log(product);

    return (
        <div>ProductEditScreen</div>
    )
}

export default ProductEditScreen;