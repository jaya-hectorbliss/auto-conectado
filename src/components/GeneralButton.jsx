import { Link } from 'react-router-dom';
import '../assets/styles/GeneralButton.css';

const GeneralButton = ({route, back, text, nolink}) => {
    return ( 
        <div className='general-button'>
            <Link to={route}><button className='btn'>{text}</button></Link>
            {
                !nolink && <Link to={back}><span class="fa fa-angle-left"></span> Regresar</Link>
            }
        </div>
     );
}
 
export default GeneralButton;