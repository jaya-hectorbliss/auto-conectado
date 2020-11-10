const QuoteSummary = () => {
    return ( 
        <div className='flex'>
            <div>
                <p>TU TARIFA ES DE:</p>
                <p>$35 USD mensuales</p>
            </div>
            <div>
                <table>
                    <tr>
                        <td>PARA TU:</td>
                        <td>CARRITO</td>
                    </tr>
                    <tr>
                        <td>EN LA CIUDAD:</td>
                        <td>AQUI</td>
                    </tr>
                    <tr>
                        <td>PLAN DE USO:</td>
                        <td>NORMAL</td>
                    </tr>
                </table>
                <a href='/'>Editar</a>
            </div>
        </div>
     );
}
 
export default QuoteSummary;