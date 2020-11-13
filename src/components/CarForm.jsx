import GeneralButton from "./GeneralButton";

const CarForm = () => {
    return ( 
        <div className='Container'>
            <form className='data-form'>
                <label htmlFor='placa'>Número de placa</label>
                <input type='text' name='placa' />
                <label htmlFor='serie'>Número de serie</label>
                <input type='text' name='serie' />
                <label htmlFor='motor'>Número de motor</label>
                <input type='text' name='motor' />
            </form>
            <GeneralButton text='Continuar' route='/datos-personales' back='/planes'/>
        </div>
     );
}
 
export default CarForm;