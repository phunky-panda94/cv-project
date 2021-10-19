import Heading from './Heading';
import Input from './Input';
import Section from './Section';

function Details() {
    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            <Heading text="Make-a-CV"/>
            <Input />
            <Section heading="Education"/>
            <Section heading="Work Experience"/>
            <Section heading="Extra-curricular"/>
        </div>
    )
}

export default Details;