import QuoteSummary from "../components/QuoteSummary";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";
import ProgressBar from "../components/ProgressBar";

const PaymentData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <ProgressBar done="100"/>
            <h4>SOLO FALTA TU INFORMACIÓN DE PAGO</h4>
            <PaymentForm />
        </div>
     );
}
 
export default PaymentData;