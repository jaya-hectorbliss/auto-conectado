import '../assets/styles/Rates.css';
import GeneralButton from './GeneralButton';
import PlanDetailsTable from './PlanDetailsTable';

const Rates = () => {
    return ( 
        <div className='container rates'>
            <p className='title'>EN UN PLAN DE USO:</p>
            <form className='plans'>
                <div>
                    <input type="radio" id="ecologico" name="plan" value="ecologico" />
                    <label htmlFor="male">ECOLOGICO</label>
                    <p>Menos de 500 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="normal" name="plan" value="normal" />
                    <label htmlFor="male">NORMAL</label>
                    <p>Entre 500 y 1200 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="intensivo" name="plan" value="intensivo" />
                    <label htmlFor="male">INTENSIVO</label>
                    <p>Entre 1200 y 1600 km al mes</p>
                </div>
            </form>
            <p className='p-info'>No te preocupes si despues quieres cambiar de plan de uso, lo puedes cambiar cuando lo requieras.</p>
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
                <PlanDetailsTable />
            </div>
            <GeneralButton text='Continuar' route='/datos-auto' back='/'/>
        </div>
     );
}
 
export default Rates;