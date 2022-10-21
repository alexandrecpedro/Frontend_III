import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/ViaCEPapi';

const ViaCEP = () => {
    
    const [endereco, setEndereco] = useState({});
    const { cep } = useParams();

    useEffect(() => {
        if (cep) {
            handleSubmit({ cep });
        }
    }, [cep]);

    const handleSubmit = async ({ cep }) => {
        try {
            const response = await api.get(`${cep}/json`);
            setEndereco(response.data);
        } catch (error) {
            Swal.fire({
                title: 'Oops',
                icon: 'error',
                text: 'CEP was not found or servidor error!'
            });
            
        }
    }

    return (
        <>
            <main>
                <Link to='/brazilapi'> Go to BrazilAPI</Link>
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
                            <li><Link to={`/brazilapi/${endereco.cep}`}>See localization with BrazilAPI</Link></li>
                            <li>{endereco.cep}</li>
                            <li>{endereco.logradouro}</li>
                            <li>{endereco.complemento}</li>
                            <li>{endereco.bairro}</li>
                            <li>{endereco.localidade}</li>
                            <li>{endereco.uf}</li>
                        </ul>
                    )}
                </div>
            </main>
        </>
    )
}

export default ViaCEP;