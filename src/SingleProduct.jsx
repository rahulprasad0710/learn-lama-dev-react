import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const [product, setproduct] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        const URL = `https://fakestoreapi.com/products/${id}`;
        const controller = new AbortController();
        const callAPIfn = async () => {
            try {
                const { data } = await axios.get(URL, {
                    signal: controller.signal,
                });
                console.log(data);
                setproduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        callAPIfn();
        return () => {
            controller.abort();
        };
    }, [id]);
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setId(2)}>
                2
            </button>
            <button className='btn btn-primary' onClick={() => setId(3)}>
                3
            </button>
            <button className='btn btn-primary' onClick={() => setId(5)}>
                5
            </button>
            {product && (
                <>
                    <h3>{product.title}</h3>
                </>
            )}
        </div>
    );
};

export default SingleProduct;
