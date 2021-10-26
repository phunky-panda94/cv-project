function Section(props) {
    return (
        <div className="section flex flex-col flex-jc-sb">
            <SectionHeading add={props.add} text={props.heading} org={props.org}/>
            <Box entries={props.entries}/>
        </div>
    )
}

function SectionHeading(props) {


    return (
        <div className="section-heading flex flex-jc-sb flex-ai-c">
            <h2>{props.text}</h2>
            <span className="material-icons" onClick={() => props.add(props.text, props.org)}>add</span>
        </div>
    )
}

function Box(props) {

    let entries = []

    if (props.entries != null) {
        for (let entry of props.entries.values()) {
            entries.push(
                <Entry key={entry.id} org={entry.org} title={entry.title} date={entry.date} />
            )
        }
    }

    return (
        <div key={Date.now()} className="box">
            {entries}
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