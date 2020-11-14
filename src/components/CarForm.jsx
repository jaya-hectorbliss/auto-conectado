import { useEffect, useState } from "react";
import GeneralButton from "./GeneralButton";
import Loading from './Loading';
import {db} from '../assets/firebase';

const style={
    cont: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        color: '#00d1ce',
        width: '3rem'
    }

}

const CarForm = () => {
    const [plates, setPlates] = useState();
    const [enteredPlates, setEnteredPlates] = useState();
    const [found, setFound] = useState();
    const [data, setData] = useState();
    console.log(data)

    const getPlates = () => {
        let plates = db.collection('plates');
        plates.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setPlates(docs);
        });
    }

    useEffect(() => {
        getPlates();
    }, [])

    const findPlates = (e) => {
        e.preventDefault();
        if(plates.find(p => p.plates === enteredPlates)) {
            const x = plates.find(p => p.plates === enteredPlates)
            setData({...data, plates: x.plates, motorNumber: x.motorNumber, serialNumber: x.serialNumber})
            setFound(true)
        } else {
            setData({...data, plates: enteredPlates})
            setFound(false);
        }
        
    }

    return ( 
        <>
        {
            plates ? 
            <div className='Container'>
            <form className='data-form'>
                <label htmlFor='placa'>Número de placa</label>
                <div style={style.cont}>
                    <input type='text' name='placa' onChange={(e) => setEnteredPlates(e.target.value)}/>
                    <i className="fa fa-search" onClick={findPlates} style={style.icon}></i>
                </div>
                {
                    found === true ? 
                    <>
                        <label htmlFor='serie'>Número de serie</label>
                        <input type='text' name='serie' value={data.serialNumber}/>
                        <label htmlFor='motor'>Número de motor</label>
                        <input type='text' name='motor' value={data.motorNumber}/>
                    </>
                    :
                    <>
                        <label htmlFor='serie'>Número de serie</label>
                        <input type='text' name='serie' onChange={e=> setData({...data, serialNumber: e.target.value})}/>
                        <label htmlFor='motor'>Número de motor</label>
                        <input type='text' name='motor' onChange={e=> setData({...data, motorNumber: e.target.value})}/>
                    </>
                }
            </form>
            <GeneralButton text='Continuar' route='/datos-personales' back='/planes'/>
        </div>
        : <Loading />
    }
        </>
     );
}
 
export default CarForm;