import '../assets/styles/QuoteSummary.css';

const QuoteSummary = () => {
    return ( 
        <div className='quote-summary'>
            <div>
                <p>TU TARIFA ES DE:</p>
                <p>$35 USD mensuales</p>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>PARA TU:</td>
                            <td>NISSAN VERSA 2015</td>
                        </tr>
                        <tr>
                            <td>EN LA CIUDAD:</td>
                            <td>QUITO</td>
                        </tr>
                        <tr>
                            <td>PLAN DE USO:</td>
                            <td>NORMAL</td>
                        </tr>
                    </tbody>
                </table>
                <a href='/'>Editar</a>
            </div>
        </div>
     );
}
 
export default QuoteSummary;