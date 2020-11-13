import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/MainForm.css';
import {db} from '../firebase';

const MainForm = () => {
    const [vehicles, setVehicles] = useState();
    console.log(vehicles)

    const getVehicles = async () => {
        let vehicle = db.collection('vehicles');
        vehicle.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setVehicles(docs);
        });
    }

    useEffect(() => {
        getVehicles();
    }, []);

    return ( 
        <form className='main-form'>
            <select name="car" id="car">
                <option disabled selected>Marca</option>
                <option value="volvo">Volvo</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Modelo</option>
                <option value="volvo">Volvo</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Año</option>
                <option value="volvo">Volvo</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Ciudad</option>
                <option value="volvo">Volvo</option>
            </select>
            <Link to='/planes'><button>COTIZAR</button></Link>
        </form>
     );
}
 
export default MainForm;