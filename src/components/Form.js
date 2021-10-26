import InputField from './InputField';

function Form(props) {

    function handleSubmit(event) {
        event.preventDefault();

        let entry = {
            id: String(Date.now()),
            org: event.target.elements[props.org].value,
            title: event.target.elements['Title'].value,
            date: `${event.target.elements['Start Date'].value} - ${event.target.elements['End Date'].value}`
        }

        save(props.heading,entry);

        // close and reset form
        props.close();
        event.target.reset();
        
    }

    function save(key,value) {

        let entries;

        if (localStorage.getItem(key) == null) {
            entries = new Map()
            entries.set(value.id,value)
        } else {
            entries = new Map(Object.entries(JSON.parse(localStorage.getItem(key))));
            entries.set(value.id,value)
        }

        localStorage.setItem(key,JSON.stringify(Object.fromEntries(entries)));

    }

    return (
        <div className="form flex flex-col flex-jc-c flex-ai-c">
            <Close close={props.close}/>
            <form className="form-input flex flex-col flex-jc-sb flex-ai-c" onSubmit={handleSubmit}>
                <FormHeading text={props.heading} />
                <InputField type="text" label={props.org} />
                <InputField type="text" label="Title" />
                <InputField type="date" label="Start Date" />
                <InputField type="date" label="End Date" />
                <FormButtons />
            </form>
        </div>
    )
}

function FormHeading(props) {
    return (
        <div className="form-div flex flex-jc-c">
            <div className="form-heading">{props.text}</div>
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