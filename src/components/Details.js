import Box from './Box';
import Heading from './Heading';
import SectionHeading from './SectionHeading';
import InputField from './InputField';

function Details() {
    return (
        <div className="border container flex flex-col flex-ai-c flex-jc-se">
            <Heading text="Make-A-CV" />
            <InputField label="Name"/>
            <InputField label="Email"/>
            <InputField label="Phone Number"/>
            <SectionHeading text="Education"/>
            <Box/>
            <SectionHeading text="Work Experience"/>
            <Box/>
            <SectionHeading text="Extra-curricular"/>
            <Box/>
        </div>
    )
}

export default Details;