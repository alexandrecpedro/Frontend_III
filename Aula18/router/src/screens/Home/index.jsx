import './styles.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [cep, setCep] = useState('');

    useEffect(() => {
        
    }, []);
    

    return (
        <div className='container'>
            <input 
                type='text'
                placeholder='Enter your CEP'
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                maxLength={8}
            />
            <Link to={`/details/${cep}`} >
                <button>Search</button>
            </Link>
        </div>
    );
}