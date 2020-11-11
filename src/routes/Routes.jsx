import {BrowserRouter as Router, Route} from 'react-router-dom';
import PersonalData from '../views/PersonalData';
import CarData from '../views/CarData';
import Main from "../views/Main";
import Plans from "../views/Plans";
import PaymentData from '../views/PaymentData';
import RegistrationCompleted from '../views/RegistrationCompleted';

const Routes = () => {
    return ( 
        <Router>
            <Route exact path='/' component={Main} />
            <Route exact path='/planes' component={Plans} />
            <Route exact path='/datos-auto' component={CarData} />
            <Route exact path='/datos-personales' component={PersonalData} />
            <Route exact path='/datos-de-pago' component={PaymentData} />
            <Route exact path='/registro-completado' component={RegistrationCompleted} />
        </Router>
     );
}
 
export default Routes;