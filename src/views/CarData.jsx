import CarForm from "../components/CarForm";
import GeneralButton from "../components/GeneralButton";
import Header from "../components/Header";
import '../assets/styles/CarData.css';
import QuoteSummary from "../components/QuoteSummary";

const CarData = () => {
    return ( 
        <div className='car-data'>
            <Header />
            <QuoteSummary />
            <h4>REQUERIMOS ALGUNOS DATOS DE TU AUTO</h4>
            <CarForm />
            <GeneralButton />
        </div>
     );
}
 
export default CarData;