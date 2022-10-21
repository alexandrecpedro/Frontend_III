import './styles.css';

import { Link } from 'react-router-dom';

export default function Initial() {
    return (
        <div>
            <h1>Initial</h1>
            {/* Anchor is not necessary and breaks the SPA (Single-page application) concept */}
            <Link to="/home">HOME</Link><br/>
            <Link to="/details">DETAILS</Link>
        </div>
    )
}