import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Home = () => {
    const [products, setproducts] = useState([]);
    const URL = "https://fakestoreapi.com/products";

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        console.log(cancelToken);
        const callAPIfn = async () => {
            try {
                const { data } = await axios.get(URL);
                console.log(data);
                setproducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        callAPIfn();
        return () => {
            cancelToken.cancel();
        };
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {products?.map((product) => (
                    <div key={product.id} className='col-lg-2'>
                        <Link to={`/product/${product.id}`}>
                            <div className='product border border-info m-2'>
                                <h6>{product.title}</h6>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='row'>
                <SingleProduct />
            </div>
        </div>
    );
};

export default Home;
