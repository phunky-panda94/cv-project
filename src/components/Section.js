function Section(props) {
    
    return (
        <div className="section flex flex-col flex-jc-sb">
            <SectionHeading showForm={props.showForm} text={props.heading} orgLabel={props.orgLabel}/>
            <Box section={props.heading} edit={props.edit} delete={props.delete} entries={props.entries} orgLabel={props.orgLabel}/>
        </div>
    )
}

function SectionHeading(props) {
    return (
        <div className="section-heading flex flex-jc-sb flex-ai-c">
            <h2>{props.text}</h2>
            <span className="material-icons" onClick={() => props.showForm(props.text, props.orgLabel)}>add</span>
        </div>
    )
}

function Box(props) {

    let entries = []

    if (props.entries != null) {

        for (let entry of props.entries.values()) {
            
            if (entry.section === props.section) {
                entries.push(
                    <Entry 
                        key={entry.id} 
                        entryKey={entry.id} 
                        edit={props.edit} 
                        delete={props.delete} 
                        section={props.section} 
                        org={entry.org} 
                        title={entry.title} 
                        date={formatDates(entry.startDate, entry.endDate)} 
                        orgLabel={props.orgLabel}
                    />
                )
            }

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
                <span className="material-icons" onClick={() => props.edit(props.entryKey, props.section, props.orgLabel)}>edit</span>
                <span className="material-icons" onClick={() => props.delete(props.entryKey)}>delete</span>
            </div>
        </div>
    )
}

function formatDates(startDate, endDate) {

    let today = new Date();
    let formattedToday = `${today.toDateString().split(' ')[1]} ${today.toDateString().split(' ')[3]}`

    let fullStartDate = new Date(startDate);
    let formattedStartDate = `${fullStartDate.toDateString().split(' ')[1]} ${fullStartDate.toDateString().split(' ')[3]}`

    let fullEndDate = new Date(endDate);
    let formattedEndDate = `${fullEndDate.toDateString().split(' ')[1]} ${fullEndDate.toDateString().split(' ')[3]}`

    if (formattedEndDate === formattedToday) {
        formattedEndDate = 'Current';
    }

    return `${formattedStartDate} - ${formattedEndDate}`;

}

export default Section;