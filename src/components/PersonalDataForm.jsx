import { useEffect, useState } from 'react';
import '../assets/styles/PersonalDataForm.css';
import GeneralButton from "./GeneralButton";
import {db} from '../assets/firebase';

const style={
    cont: {display: 'flex', alignItems: 'center'},
    icon: {color: '#00d1ce',width: '3rem'}
}

const PersonalDataForm = () => {
    const [nips, setNips] = useState();
    const [entNip, setEntNip] = useState();
    const [found, setFound] = useState();
    const [data, setData] = useState();
    console.log(data)

    const getNips = () => {
        let nips = db.collection('NIPs');
        nips.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => docs.push({...doc.data(), id: doc.id}));
            setNips(docs);
        });
    }
    useEffect(() => getNips(), [])

    const findNip = (e) => {
        e.preventDefault();
        if(nips.find(n => n.NIP === entNip)) {
            const x = nips.find(p => p.NIP === entNip)
            setData({...data, nip: x.NIP, firstName: x.firstName, lastName1: x.lastName1, lastName2: x.lastName2})
            setFound(true)
        } else {
            setData({...data, nip: entNip})
            setFound(false);
        }
    }

    return ( 
        <div className='Container'>
            <form className='data-form personal'>
                <label htmlFor='personal-id'>Numero de indentificación personal</label>
                <div style={style.cont}>
                    <input type='text' name='personal-id' onChange={(e) => setEntNip(e.target.value)}/>
                    <i className="fa fa-search" onClick={findNip} style={style.icon}></i>
                </div>
                {found ?
                    <><label htmlFor='name'>Nombres</label>
                    <input type='text' name='name' value={data.firstName}/>
                    <div>
                        <div>
                            <label htmlFor='ap-paterno'>Apellido paterno</label>
                            <input type='text' name='ap-paterno' value={data.lastName1}/>
                        </div>
                        <div>
                            <label htmlFor='ap-materno'>Apellido materno</label>
                            <input type='text' name='ap-materno' value={data.lastName2}/>
                        </div>
                    </div>
                    <label htmlFor='address'>Dirección</label>
                    <input type='text' name='address' onChange={e=> setData({...data, address: e.target.value})}/>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input type='text' name='email' onChange={e=> setData({...data, email: e.target.value})}/>
                    <label htmlFor='phone'>Número telefónico</label>
                    <input type='text' name='phone' onChange={e=> setData({...data, phone: e.target.value})}/></>
                    :
                    <><label htmlFor='name'>Nombres</label>
                    <input type='text' name='name' onChange={e=> setData({...data, firstName: e.target.value})}/>
                    <div>
                        <div>
                            <label htmlFor='ap-paterno'>Apellido paterno</label>
                            <input type='text' name='ap-paterno' onChange={e=> setData({...data, lastName1: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor='ap-materno'>Apellido materno</label>
                            <input type='text' name='ap-materno' onChange={e=> setData({...data, lastName2: e.target.value})}/>
                        </div>
                    </div>
                    <label htmlFor='address'>Dirección</label>
                    <input type='text' name='address' onChange={e=> setData({...data, address: e.target.value})}/>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input type='text' name='email' onChange={e=> setData({...data, email: e.target.value})}/>
                    <label htmlFor='phone'>Número telefónico</label>
                    <input type='text' name='phone' onChange={e=> setData({...data, phone: e.target.value})}/></>
                }
            </form>
            <GeneralButton text='Continuar' route='/datos-de-pago' back='/datos-auto' />
        </div>
     );
}
 
export default PersonalDataForm;