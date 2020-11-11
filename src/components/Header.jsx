import '../assets/styles/Header.css';
import logo from '../assets/AutoConectado_ajustado.png';

const Header = () => {
    return ( 
        <div className='header'>
            <img src={logo} alt='logo-auto-conectado' />
            <button>Nueva cotización</button>
        </div>
     );
}
 
export default Header;