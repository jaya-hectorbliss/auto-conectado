import '../assets/styles/PersonalDataForm.css';
import GeneralButton from "./GeneralButton";

const PersonalDataForm = () => {
    return ( 
        <div className='Container'>
            <form className='data-form personal'>
                <label htmlFor='personal-id'>Numero de indentificación personal</label>
                <input type='text' name='personal-id' />
                <label htmlFor='name'>Nombres</label>
                <input type='text' name='name' />
                <div>
                    <div>
                        <label htmlFor='ap-paterno'>Apellido paterno</label>
                        <input type='text' name='ap-paterno' />
                    </div>
                    <div>
                        <label htmlFor='ap-materno'>Apellido materno</label>
                        <input type='text' name='ap-materno' />
                    </div>
                </div>
                <label htmlFor='address'>Dirección</label>
                <input type='text' name='address' />
                <label htmlFor='email'>Correo electrónico</label>
                <input type='text' name='email' />
                <label htmlFor='phone'>Número telefónico</label>
                <input type='text' name='phone' />
            </form>
            <GeneralButton text='Continuar' route='/datos-de-pago' back='/datos-auto' />
        </div>
     );
}
 
export default PersonalDataForm;