import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/MainForm.css';
import {db} from '../assets/firebase';

const MainForm = () => {
    const [vehicles, setVehicles] = useState();
    const [vehicleSelected, setVehicleSelected] = useState();
    console.log(`vehicle selected: ${vehicleSelected}`)
    const [models, setModels] = useState();
    console.log(models)
    const [modelSelected, setModelSelected] = useState();
    console.log(`model: ${modelSelected}`)
    const [years, setYears] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [cities, setCities] = useState();
    const [selectedCity, setSelectedCity] = useState();

    const getVehicles = () => {
        let vehicle = db.collection('vehicles');
        vehicle.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setVehicles(docs);
        });
    }
    const getModels = async () => {
        vehicleSelected && db.collection('vehicles').doc(vehicleSelected).collection('models')
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => docs.push({...doc.data(), id: doc.id}))
            return setModels(docs);
    })
    }
    const getCities = () => {
        const cities = db.collection('cities');
        cities.onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => docs.push({...doc.data(), id: doc.id}))
                setCities(docs);
        })
    }

    useEffect(() => {
        getVehicles();
        getModels();
        getCities();
    }, []);

    return ( 
        <form className='main-form'>
            <select name="car" id="car" onChange={(e)=>setVehicleSelected(e.target.value)}>
                <option disabled selected>Marca</option>
                {vehicles &&
                    vehicles.map((vehicle, index) => <option value={vehicle.id} key={index}>{vehicle.brand}</option>)
                }
            </select>
            <select name="model" id="model" onChange={(e)=>setModelSelected(e.target.value)}>
                <option disabled selected>Modelo</option>
                {models &&
                    vehicles.map((model,index) => <option value={model.id} key={index}>{model.model}</option>)
                }
            </select>
            <select name="year" id="year" onChange={(e)=>setSelectedYear(e.target.value)}>
                <option disabled selected>Año</option>
                {years &&
                    years.map((year,index) => <option value={year.id} key={index}>{year.year}</option>)
                }
            </select>
            <select name="city" id="city" onChange={e=> setSelectedCity(e.target.value)}>
                <option disabled selected>Ciudad</option>
                {cities &&
                    cities.map(city => <option value={city.city}>{city.city}</option>)
                }
            </select>
            <Link to='/planes'><button>COTIZAR</button></Link>
        </form>
     );
}
 
export default MainForm;