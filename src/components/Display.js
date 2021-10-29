import Heading from './Heading';
import Section, { SectionHeading } from './Section';

function Display(props) {
    return (
        <div className="border container flex flex-col flex-ai-c flex-jc-se">
            <Heading text={props.name} />
            <div className="form-div flex flex-row flex-ai-c flex-jc-se">
                <SectionHeading text={props.phone} />
                <SectionHeading text={props.email} />
            </div>
            <Section type="display" entries={props.entries} heading="Education" />
            <Section type="display" entries={props.entries} heading="Work Experience" />
            <Section type="display" entries={props.entries} heading="Extra-curricular" />   
        </div>
    )
}

export default Display;