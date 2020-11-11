import GeneralButton from "../components/GeneralButton";
import Header from "../components/Header";
import PersonalDataForm from "../components/PersonalDataForm";
import QuoteSummary from "../components/QuoteSummary";

const PersonalData = () => {
    return ( 
        <div>
            <Header />
            <QuoteSummary />
            <PersonalDataForm />
            <GeneralButton />
        </div>
     );
}
 
export default PersonalData;