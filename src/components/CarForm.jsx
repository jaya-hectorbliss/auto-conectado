const CarForm = () => {
    return ( 
        <form className='data-form'>
            <label htmlFor='placa'>Número de placa</label>
            <input type='text' name='placa' />
            <label htmlFor='serie'>Número de serie</label>
            <input type='text' name='serie' />
            <label htmlFor='motor'>Número de motor</label>
            <input type='text' name='motor' />
        </form>
     );
}
 
export default CarForm;