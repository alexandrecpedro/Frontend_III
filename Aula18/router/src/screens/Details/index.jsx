import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api'

export default function Details() {
    const { cep } = useParams();
    const [address, setAddress] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataCEP();
    }, []);

    const getDataCEP = async () => {
        try {
            const { data } = await api.get(`/${cep}/json`); 
            console.log(data);
            setAddress(data);
        } catch (error) {
            alert(`Error while searching CEP ${error}`);
        }
        setLoading(false);
    }

    if (loading) {
        return <h1>Loading</h1>
    } else if (!address.localidade ) {
        return <h1>Invalid CEP</h1>
    }

    return (
        <>
            <h1>Details Screen - { cep }</h1>
            <h2>Street: {address.logradouro ? address.logradouro : "Street not found"}</h2>
            <h3>Neighborhood: {address.bairro ? address.bairro : "Neighborhood not found"}</h3>
            <h3>Locale: {address.localidade} - {address.uf}</h3>
            <button onClick={getDataCEP}>Search</button>
        </>
    );
  }