import '../assets/styles/MainForm.css';

const MainForm = () => {
    return ( 
        <form className='main-form'>
            <select name="car" id="car">
                <option disabled selected>Marca</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Modelo</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Año</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <select name="car" id="car">
                <option disabled selected>Ciudad</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <button>COTIZAR</button>
        </form>
     );
}
 
export default MainForm;