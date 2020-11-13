import { FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';
import '../assets/styles/PaymentForm.css';
import GeneralButton from "./GeneralButton";
import PersonalDataForm from './PersonalDataForm';

const useStyles = makeStyles({
    radio: {
        width: '20%',
    }
});

const PaymentForm = () => {
    const classes = useStyles();
    const [radioValue, setRadioValue] = useState('');
    console.log(radioValue)

    const handleChange = (event) => {
        setRadioValue(event.target.value);
    };

    return ( 
        <div className='Container'>
            <form className='data-form payment'>
                <label htmlFor='card-name'>Nombre del tarjetahabiente</label>
                <input type='text' name='card-name' />
                <label htmlFor='card-number'>Número de tarjeta de crédito</label>
                <input type='text' name='card-number' />
                <label htmlFor='exp-date'>Fecha de vencimiento</label>
                <input type='text' name='exp-date' />
                <label htmlFor='cvv'>CVV</label>
                <input type='text' name='cvv' />
                <p>¿Quieres usar los mismos datos para tu factura?</p>
                <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Si" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {radioValue === 'yes' && 
                 <div className='payment-data'>
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
                <div>
                    <div>
                        <label htmlFor='address'>Dirección</label>
                        <input type='text' name='address' />
                    </div>
                    <div>
                        <label htmlFor='ciudad'>Ciudad</label>
                        <input type='text' name='ciudad' />
                    </div>
                </div>
                <label htmlFor='email'>Correo electrónico</label>
                <input type='text' name='email' />
                <label htmlFor='phone'>Número telefónico</label>
                <input type='text' name='phone' />
                 </div>
                }
            </form>
            <GeneralButton text='Continuar' route='/registro-completado' back='/datos-personales' />
        </div>
     );
}
 
export default PaymentForm;