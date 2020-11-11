import QuoteSummary from "../components/QuoteSummary";

const { default: GeneralButton } = require("../components/GeneralButton")
const { default: Header } = require("../components/Header")
const { default: PaymentForm } = require("../components/PaymentForm")

const PaymentData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <PaymentForm />
            <GeneralButton />
        </div>
     );
}
 
export default PaymentData;