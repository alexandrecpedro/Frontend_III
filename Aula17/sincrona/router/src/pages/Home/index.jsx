// import Button from '../../components/Button';
import './styles.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import ProductItem from '../../components/ProductItem';

export default function Home() {

    // DATA FROM BACKEND
    const [products, setProducts] = useState([]);

    // BUTTON FUNCTION
    // const requestAPI = () => {
    //     alert('Requesting data');
    // }

    useEffect(() => {
        getApiData();
    }, []);
    
    const getApiData = async () => {
        try {
            const { data } = await api.get(`/product`);
            setProducts(data.products);
        } catch (error) {}
    }
    
    // const getDetails = async () => {
    //     try {
    //         const { data } = await api.get("/details/3");
    //         console.log(data.detail);
    //     } catch (error) {}
    // }

    return (
        <>
            <h1>Products</h1>
            {/* <Button title='Press Home' handleFunction={requestAPI}/> */}
            <ul style={{ listStyle: 'none' }}>
                {
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </ul>
        </>
    )
}