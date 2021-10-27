import { InputField, TextArea } from './Input';

function Form(props) {

    function handleSubmit(event) {
        
        event.preventDefault();
        
        let entry = {
            id: String(Date.now()),
            section: props.heading,
            org: event.target.elements[props.org].value,
            title: event.target.elements['Title'].value,
            date: formatDates(event.target.elements['Start Date'].value, event.target.elements['End Date'].value),
            details: event.target.elements['Details'].value
        }
        
        props.add(entry);

        // close and reset form
        props.close();
        event.target.reset();
        
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

    return (
        <div className="form flex flex-col flex-jc-c flex-ai-c">
            <Close close={props.close}/>
            <form className="form-input flex flex-col flex-jc-sb flex-ai-c" onSubmit={handleSubmit}>
                <FormHeading text={props.heading} />
                <InputField type="text" label={props.org} required={true} />
                <InputField type="text" label="Title" required={false} />
                <InputField type="date" label="Start Date" required={true} />
                <InputField type="date" label="End Date" required={true} />
                <TextArea label="Details" />
                <FormButtons />
            </form>
        </div>
    )
    
}

function FormHeading(props) {
    return (
        <div className="form-div flex flex-jc-c">
            <div className="form-heading">Add {props.text}</div>
        </div>
    )
}

function Close(props) {
    return (
        <div className="form-div flex flex-jc-fe">
            <span className="material-icons" onClick={props.close}>close</span>
        </div>
    )
}

function FormButtons() {
    return (
        <div className="form-div flex flex-jc-fe">
            <button type="submit">Add</button>
            <button type="button">Discard</button>
        </div>
    )
}

export default Form;