const CarForm = () => {
    return ( 
        <form className='flex-column'>
            <label for='placa'>Número de placa</label>
            <input type='text' name='placa' />
            <label for='serie'>Número de serie</label>
            <input type='text' name='serie' />
            <label for='motor'>Número de motor</label>
            <input type='text' name='motor' />
        </form>
     );
}
 
export default CarForm;