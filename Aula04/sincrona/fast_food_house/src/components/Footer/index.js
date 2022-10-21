import './styles.css';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className="footer_container_home">
            <img src={logo} alt="logo" className="logo_footer_home" />
        </footer>
    );
}