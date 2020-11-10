import {BrowserRouter as Router, Route} from 'react-router-dom';
import CarData from '../views/CarData';
import Main from "../views/Main";
import Plans from "../views/Plans";

const Routes = () => {
    return ( 
        <Router>
            <Route exact path='/' component={Main} />
            <Route exact path='/planes' component={Plans} />
            <Route exact path='/datos-auto' component={CarData} />
        </Router>
     );
}
 
export default Routes;