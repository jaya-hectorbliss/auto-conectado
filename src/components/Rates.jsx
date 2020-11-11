import '../assets/styles/Rates.css';
import GeneralButton from './GeneralButton';

const Rates = () => {
    return ( 
        <div className='rates'>
            <p className='title'>EN UN PLAN DE USO:</p>
            <form className='plans'>
                <div>
                    <input type="radio" id="ecologico" name="ecologico" value="ecologico" />
                    <label htmlFor="male">ECOLOGICO</label>
                    <p>Menos de 500 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="normal" name="normal" value="normal" />
                    <label htmlFor="male">NORMAL</label>
                    <p>Entre 500 y 1200 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="intensivo" name="intensivo" value="intensivo" />
                    <label htmlFor="male">INTENSIVO</label>
                    <p>Entre 1200 y 1600 km al mes</p>
                </div>
            </form>
            <p>No te preocupes si despues quieres cambiar de plan de uso, lo puedes cambiar cuando lo requieras.</p>
            <div className='tarifa'>
                <p className='title'>TU TARIFA ES DE:</p>
                <p className='tarifa-total'>$30 USD</p>
                <p className='mensuales'>mensuales</p>
            </div>
            <div className='ahorro'>
                <p>Comparado con un seguro tradicional tendrás un ahorro aproximado de:</p>
                <p>$140 mensuales</p>
            </div>
            <div>
                <p className='title'>QUE TE INCLUYE</p>
                <table>
                        <tr>
                            <th>COBERTURA</th>
                            <th>SUMA ASEGURADA</th>
                            <th>DEDUCIBLE</th>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    Perdida total por robo o daño
                                    <button>¿Qué cubre?</button>
                                </div>
                            </td>
                            <td>$100</td>
                            <td>10% de la suma asegurada</td>
                        </tr>
                </table>
            </div>
            <GeneralButton />
        </div>
     );
}
 
export default Rates;