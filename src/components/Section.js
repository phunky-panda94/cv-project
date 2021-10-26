function Section(props) {
    
    return (
        <div className="section flex flex-col flex-jc-sb">
            <SectionHeading add={props.add} text={props.heading} org={props.org}/>
            <Box section={props.heading} delete={props.delete} entries={props.entries}/>
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
                <Entry key={entry.id} entryKey={entry.id} delete={props.delete} section={props.section} org={entry.org} title={entry.title} date={entry.date} />
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
        <div className="entry flex flex-ai-c">
            <span className="entry-box">{props.org}</span>
            <span className="entry-box">{props.title}</span>
            <span className="entry-box flex flex-jc-c">{props.date}</span>
            <div className="flex flex-jc-fe flex-ai-c">
                <span className="material-icons">edit</span>
                <span className="material-icons" onClick={() => props.delete(props.entryKey)}>delete</span>
            </div>
        </div>
    )
}

export default Section;