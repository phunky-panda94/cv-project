function Section(props) {
    return (
        <div className="section flex flex-col flex-jc-sb">
            <SectionHeading text={props.heading}/>
            <Box />
        </div>
    )
}

function SectionHeading(props) {
    return (
        <div className="section-heading flex flex-jc-sb flex-ai-c">
            <h2>{props.text}</h2>
            <span className="material-icons">add</span>
        </div>
    )
}

function Box() {
    return (
        <div className="box">
            <Entry org="ABC University" title="Bachelor of Science" date="Mar 2021" />
        </div>
    )
}

function Entry(props) {
    return (
        <div className="border entry flex flex-jc-sb flex-ai-c">
            <span>{props.org}</span>
            <span>{props.title}</span>
            <span>{props.date}</span>
            <div>
                <span className="material-icons">edit</span>
                <span className="material-icons">delete</span>
            </div>
        </div>
    )
}

export default Section;