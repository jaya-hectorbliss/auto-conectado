import Header from "../components/Header";
import PersonalDataForm from "../components/PersonalDataForm";
import QuoteSummary from "../components/QuoteSummary";

const PersonalData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <h4>REQUERIMOS ALGUNOS DATOS PERSONALES</h4>
            <PersonalDataForm />
        </div>
     );
}
 
export default PersonalData;