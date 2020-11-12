import '../assets/styles/PlanDetailsTable.css';

const PlanDetailsTable = () => {
    return ( 
        <div className='plan-details-table'>
            <p className='title'>QUE TE INCLUYE:</p>
            <table>
                <thead>
                    <tr>
                        <th>COBERTURA</th>
                        <th>SUMA ASEGURADA</th>
                        <th>DEDUCIBLE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <span>Perdida total por robo o daño</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button className='btn-suma-asegurada'><span class="fa fa-angle-up"></span></button>
                                <span>$10,000</span>
                                <button className='btn-suma-asegurada'><span class="fa fa-angle-down"></span></button>
                            </div>
                        </td>
                        <td>10% de la suma asegurada</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>Robo parcial o accidente</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>Monto del siniestro</td>
                        <td>El máximo entre 10% del siniestro, 1% de la suma asegurada o $250</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>Responsabilidad Civil</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>$20,000</td>
                        <td>Sin deducible</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>Pago de colegiatura</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>$10,000</td>
                        <td>Sin deducible</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>Gastos Médicos Ocupantes</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>$5,000 por ocupante</td>
                        <td>Sin deducible</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>Asistencia vial y asistencia legal</span>
                                <button className='btn-cobertura'>¿Qué cubre?</button>
                            </div>
                        </td>
                        <td>Incluido</td>
                        <td>Sin deducible</td>
                    </tr>
                </tbody>
            </table>
            <p className='terms'>*Coberturas sujetas a las especificaciones en las condiciones generales de la póliza.</p>
        </div>
     );
}
 
export default PlanDetailsTable;