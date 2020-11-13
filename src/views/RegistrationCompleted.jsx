import GeneralButton from "../components/GeneralButton";
import Header from "../components/Header";

import '../assets/styles/RegistrationCompleted.css';

const RegistrationCompleted = () => {
    return ( 
        <div className='Container completed'>
            <Header />
            <h3>¡Felicidades ya cuentas con tu seguro por kilómetro!</h3>
            <p>Recuerda que es indispensable que descargues la app ingresando con tu correo electronico y la siguiente contraseña XXXXXX, que tambien te hemos enviado al correo.</p>
            <p>Deberas cargar por primera vez la foto del odometro de tu auto en la aplicacion.</p>
            <button>Descargar póliza</button>
            <GeneralButton text='Cerrar' route='/' nolink/>
        </div>
     );
}
 
export default RegistrationCompleted;