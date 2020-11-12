import '../assets/styles/Header.css';
import logo from '../assets/AutoConectado_ajustado.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className='header'>
            <img src={logo} alt='logo-auto-conectado' />
            <Link to='/'><button>Nueva cotización</button></Link>
        </div>
     );
}
 
export default Header;