import Header from "./Header";

const PaymentForm = () => {
    return ( 
        <div>
            <form className='data-form'>
                <label htmlFor='card-name'>Nombre del tarjetahabiente</label>
                <input type='text' name='card-name' />
                <label htmlFor='card-number'>Número de tarjeta de crédito</label>
                <input type='text' name='card-number' />
                <label htmlFor='exp-date'>Fecha de vencimiento</label>
                <input type='text' name='exp-date' />
                <label htmlFor='cvv'>CVV</label>
                <input type='text' name='cvv' />
                <p>¿Quieres usar los mismos datos para tu factura?</p>
                <div className='flex'>
                    <input type="radio" id="yes" name="yes" value="yes" />
                    <label htmlFor="yes">Si</label>
                    <input type="radio" id="no" name="no" value="no" />
                    <label htmlFor="male">No</label>
                </div>
            </form>
        </div>
     );
}
 
export default PaymentForm;