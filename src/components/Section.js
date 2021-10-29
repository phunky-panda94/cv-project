export default function Section(props) {
    return (
        <div className="section flex flex-col flex-jc-sb">
            <SectionHeading type={props.type} showForm={props.showForm} text={props.heading} orgLabel={props.orgLabel}/>
            <Box type={props.type} section={props.heading} edit={props.edit} delete={props.delete} entries={props.entries} orgLabel={props.orgLabel}/>
        </div>
    )
}

export function SectionHeading(props) {
    return (
        <div className="section-heading flex flex-jc-sb flex-ai-c">
            {props.text}
            {props.type === 'details' && <span className="material-icons" onClick={() => props.showForm(props.text, props.orgLabel)}>add</span>}
        </div>
    )
}

export function Box(props) {

    let entries = []

    if (props.entries != null) {

        for (let entry of props.entries.values()) {
            
            if (entry.section === props.section) {
                
                if (props.type === 'details') {
                
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

                } else {

                    entries.push(
                        <DisplayEntry 
                            key={entry.id} 
                            entryKey={entry.id} 
                            org={entry.org} 
                            title={entry.title}
                            details={entry.details} 
                            date={formatDates(entry.startDate, entry.endDate)} 
                        />
                    )

                }

            }

        }

    }
    
    return (
        <div key={Date.now()} className={props.type+'-box'}>
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

function DisplayEntry(props) {
    return (
        <div className="display-entry flex flex-col">
            <h4>{props.title}</h4>
            <div className="flex flex-row flex-jc-sb">
                <i>{props.org}</i>
                <i>{props.date}</i>
            </div>
            {props.details !== '' && props.details.split('\n').map(line => <li key={props.entryKey}>{line}</li>)}
        </div>
    )
}

function formatDates(startDate, endDate) {

    let fullStartDate = new Date(startDate);
    let formattedStartDate = `${fullStartDate.toDateString().split(' ')[1]} ${fullStartDate.toDateString().split(' ')[3]}`

    let fullEndDate;
    let formattedEndDate;

    if (endDate === 'Current') {
        formattedEndDate = endDate;
    } else {
        fullEndDate = new Date(endDate);
        formattedEndDate = `${fullEndDate.toDateString().split(' ')[1]} ${fullEndDate.toDateString().split(' ')[3]}`
    }

    return `${formattedStartDate} - ${formattedEndDate}`;

}