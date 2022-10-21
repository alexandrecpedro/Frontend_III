import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import api from '../../services/brazilCEPapi';

const BrazilCEPAPI = () => {
    const [endereco, setEndereco] = useState({});
    const { cep } = useParams;

    useEffect(() => {
        if (cep) {
            handleSubmit({ cep });
        }
    }, [cep]);

    const handleSubmit = async ({ cep }) => {
        try {
            const response = await api.get(`${cep}`);
            setEndereco(response.data);
        } catch (error) {
            Swal.fire({
                title: 'Oops',
                icon: 'error',
                text: 'CEP not found or servidor error!'
            });
        }
    };

    return (
        <>
            <main>
                <Link to='/'>Go to ViaCEP</Link>
                <div className='col-md-4 col-sm-6 my-3 container text-center'>
                    <h2>Search a CEP</h2>
                    <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
                        <Form>
                            <Field
                                type='text' 
                                name='cep' 
                                id='cep' 
                                placeholder='Enter your CEP' 
                                className='form-control my-3'
                                required
                            /> 
                            <button type='submit' className='btn btn-primary'>Search</button>
                        </Form>
                    </Formik>
                    { endereco.cep && (
                        <ul className='list-group my-3'>
                            <li><Link to={`/${endereco.cep}`}>Take a look at ViaCEP</Link></li>
                            <li>{endereco.cep}</li>
                            <li>{endereco.state}</li>
                            <li>{endereco.city}</li>
                            <li>{endereco.neighborhood}</li>
                            <li>{endereco.street}</li>
                        </ul>
                    )}
                </div>
            </main>
        </>
    );
}

export default BrazilCEPAPI;