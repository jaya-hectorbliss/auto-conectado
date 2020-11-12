import QuoteSummary from "../components/QuoteSummary";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";

const PaymentData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <h4>SOLO FALTA TU INFORMACIÓN DE PAGO</h4>
            <PaymentForm />
        </div>
     );
}
 
export default PaymentData;