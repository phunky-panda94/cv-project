import { InputField, TextArea } from './Input';

function Form(props) {

    function handleSubmit(event) {
        
        event.preventDefault();
        
        let id;
        let endDate;

        props.edit ? id = props.id : id = String(Date.now());
        props.current ? endDate = 'Current' : endDate = event.target.elements['End Date'].value; 

        let entry = {
            id: id,
            section: props.heading,
            org: event.target.elements[props.orgLabel].value,
            title: event.target.elements['Title'].value,
            startDate: event.target.elements['Start Date'].value,
            endDate: endDate,
            details: event.target.elements['Details'].value
        }
        
        props.add(entry);

        props.close();
        
    }
    
    return (
        <div className="form flex flex-col flex-jc-c flex-ai-c">
            <Close close={props.close}/>
            <form className="form-input flex flex-col flex-jc-sb flex-ai-c" onSubmit={handleSubmit}>
                <FormHeading text={props.heading} />
                <InputField type="text" label={props.orgLabel} change={props.change} value={props.org} required={true} />
                <InputField type="text" label="Title" change={props.change} value={props.title} required={false} />
                <InputField type="date" label="Start Date" change={props.change} value={props.startDate} required={true} />
                <InputField type="date" label="End Date" change={props.change} value={props.endDate} required={true} disabled={props.current} onCheck={props.onCheck} />
                <TextArea label="Details" value={props.details} change={props.change}/>
                <FormButtons edit={props.edit} cancel={props.close} />
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

function FormButtons(props) {
    return (
        <div className="form-div flex flex-jc-fe">
            <button type="submit">{props.edit ? 'Save changes' : 'Add'}</button>
            <button type="button" onClick={props.cancel}>{props.edit ? 'Dischard changes' : 'Cancel'}</button>
        </div>
    )
}

export default Form;