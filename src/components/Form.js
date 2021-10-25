import InputField from './InputField';

function Form(props) {
    return (
        <div className="form flex flex-col flex-jc-c flex-ai-c">
            <form className="form-input flex flex-col flex-jc-sb flex-ai-c">
                <FormHeading text={props.heading} />
                <InputField type="text" label={props.org} />
                <InputField type="text" label={props.title} />
                <InputField type="date" label={props.startDate} />
                <InputField type="date" label={props.endDate} />
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

function FormButtons() {
    return (
        <div className="form-div flex flex-jc-fe">
            <button type="submit">Add</button>
            <button type="button">Discard</button>
        </div>
    )
}

export default Form;