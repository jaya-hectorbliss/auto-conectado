const { default: GeneralButton } = require("../components/GeneralButton")
const { default: Header } = require("../components/Header")

const RegistrationCompleted = () => {
    return ( 
        <div>
            <Header />
            <p>¡Felicidades ya cuentas con tu seguro por kilómetro!</p>
            <p>Recuerda que es indispensable que descargues la app ingresando con tu correo electronico y la siguiente contraseña XXXXXX, que tambien te hemos enviado al correo.</p>
            <p>Deberas cargar por primera vez la foto del odometro de tu auto en la aplicacion.</p>
            <button>Descarga póliza</button>
            <GeneralButton />
        </div>
     );
}
 
export default RegistrationCompleted;