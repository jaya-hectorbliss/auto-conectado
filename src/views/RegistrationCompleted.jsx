const { default: GeneralButton } = require("../components/GeneralButton")
const { default: Header } = require("../components/Header")

const RegistrationCompleted = () => {
    return ( 
        <div className='container'>
            <Header />
            <h4>¡Felicidades ya cuentas con tu seguro por kilómetro!</h4>
            <p>Recuerda que es indispensable que descargues la app ingresando con tu correo electronico y la siguiente contraseña XXXXXX, que tambien te hemos enviado al correo.</p>
            <p>Deberas cargar por primera vez la foto del odometro de tu auto en la aplicacion.</p>
            <button>Descarga póliza</button>
            <GeneralButton text='Cerrar' route='/' nolink/>
        </div>
     );
}
 
export default RegistrationCompleted;