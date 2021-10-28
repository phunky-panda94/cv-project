import Heading from './Heading';
import Section from './Section';

function Display(props) {
    return (
        <div className="border container flex flex-col flex-ai-c flex-jc-c">
            <Heading text={props.name} />
            <div className="input flex flex-row flex-ai-c flex-jc-sa">
                <h3>{props.phone}</h3>
                <h3>{props.email}</h3>
            </div>
            <div className="section">
                <h2>Education</h2>
            </div>
            <div className="section">
                <h2>Work Experience</h2>
            </div>
            <div className="section">
                <h2>Extra-curricular</h2>
            </div>    
        </div>
    )
}

export default Display;