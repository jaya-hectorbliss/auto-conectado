import '../assets/styles/Main.css';
import logo from '../assets/logo-autoconectado-sesa-recorte.png';
import MainForm from "../components/MainForm";

const Main = () => {
    return ( 
        <div className='main'>
            <div className='logo-container'>
                <img src={logo} alt='logo-auto-conectado' />
                <p>TU SEGURO POR KILOMETRO QUE PREMIA TU BUENA CONDUCCIÓN</p>
                <a href='/'>Ver más</a>
            </div> 
            <MainForm />
        </div>
     );
}
 
export default Main;