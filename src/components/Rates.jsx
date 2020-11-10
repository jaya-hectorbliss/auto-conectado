const Rates = () => {
    return ( 
        <div>
            <div>
                <p>Tu tarifa es de:</p>
                <p>$30 USD</p>
                <p>mensuales</p>
            </div>
            <form className='flex'>
                <div className='flex-column'>
                    <input type="radio" id="ecologico" name="ecologico" value="ecologico" />
                    <label for="male">ECOLOGICO</label>
                    <p>Menos de 500 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="normal" name="normal" value="normal" />
                    <label for="male">NORMAL</label>
                    <p>Entre 500 y 1200 km al mes</p>
                </div>
                <div>
                    <input type="radio" id="intensivo" name="intensivo" value="intensivo" />
                    <label for="male">INTENSIVO</label>
                    <p>Entre 1200 y 1600 km al mes</p>
                </div>
            </form>
            <p>No te preocupes si despues quieres cambiar de plan de uso, lo puedes cambiar cuando lo requieras.</p>
            <p>Comparado con un seguro tradicional tendrás un ahorro aproximado de:</p>
            <div>
                <p>QUE TE INCLUYE</p>
                <table>
                    <tr>
                        <th>COBERTURA</th>
                        <th>SUMA ASEGURADA</th>
                        <th>DEDUCIBLE</th>
                    </tr>
                    <tr>
                        <td>
                            Perdida total por robo o daño
                            <button>¿Qué cubre?</button>
                        </td>
                        <td>$100</td>
                        <td>10% de la suma asegurada</td>
                    </tr>
                </table>
            </div>
            <button>Continuar</button>
        </div>
     );
}
 
export default Rates;