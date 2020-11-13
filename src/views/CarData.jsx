import CarForm from "../components/CarForm";
import GeneralButton from "../components/GeneralButton";
import Header from "../components/Header";
import '../assets/styles/CarData.css';
import QuoteSummary from "../components/QuoteSummary";
import ProgressBar from "../components/ProgressBar";

const CarData = () => {
    return ( 
        <div className='car-data'>
            <Header />
            <QuoteSummary />
            <ProgressBar done="30"/>
            <h4>REQUERIMOS ALGUNOS DATOS DE TU AUTO</h4>
            <CarForm />
        </div>
     );
}
 
export default CarData;