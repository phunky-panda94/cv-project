import Heading from './Heading';
import InputField from './InputField';
import Form from './Form';
import Section from './Section';

function Details() {
    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            <div className="modal flex flex-jc-c flex-ai-c">
                <Form heading="Add Education" org="Institution" title="Title" startDate="Start Date" endDate="End Date"/>
            </div>
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" />
                <InputField label="Phone" />
                <InputField label="Email" />
            </div>
            <Section heading="Education"/>
            <Section heading="Work Experience"/>
            <Section heading="Extra-curricular"/>
        </div>
    )
}

export default Details;