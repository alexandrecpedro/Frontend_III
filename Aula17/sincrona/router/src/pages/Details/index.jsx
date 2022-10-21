// import Button from '../../components/Button';
import './styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Details() {
    // BUTTON FUNCTION
    // const fillState = () => {
    //     alert('Filling state');
    // }

    const { id } = useParams();

    // Initalizing a state variable
    const [product, setProduct] = useState({});

    const getDetailsProduct = async () => {
        try {
            const { data } = await api.get(`/details/${id}`);
            setProduct(data.detail);
        } catch (error) {}
    }

    useEffect(()=> {
        getDetailsProduct();
    }, []);

    // Formatting currency
    // const format = new Intl.NumberFormat('pt-BR', {
    //     style: 'currency',
    //     currency: 'BRL'
    // });

    return (
        <>
            <h1>{product.name}</h1>
            <img width={200} src={product.img} alt='product' />
            <h2>{product.price}</h2>
            <h3>{product.manufacturer}</h3>
            <h3>{product.description}</h3>
            {/* <Button title='Press Details' handleFunction={fillState} /> */}
        </>
    )
  }