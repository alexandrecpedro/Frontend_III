import './styles.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className='header_container_home'>
            <img src={logo} alt='logo' className='logo_header_home' />
            <ul className='header_list_home'>
                <li className='header_item_home'>Home</li>
                <li className='header_item_home'>Sobre</li>
                <li className='header_item_home'>Contato</li>
            </ul>
        </header>
    );
}