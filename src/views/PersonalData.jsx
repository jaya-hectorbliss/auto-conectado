import Header from "../components/Header";
import PersonalDataForm from "../components/PersonalDataForm";
import QuoteSummary from "../components/QuoteSummary";
import ProgressBar from "../components/ProgressBar";

const PersonalData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <ProgressBar done="50"/>
            <h4>REQUERIMOS ALGUNOS DATOS PERSONALES</h4>
            <PersonalDataForm />
        </div>
     );
}
 
export default PersonalData;