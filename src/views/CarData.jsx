import CarForm from "../components/CarForm";
import GeneralButton from "../components/GeneralButton";
import Header from "../components/Header";
import QuoteSummary from "../components/QuoteSummary";

const CarData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <h1>Datos del auto</h1>
            <CarForm />
            <GeneralButton />
        </div>
     );
}
 
export default CarData;