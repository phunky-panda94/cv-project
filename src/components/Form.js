import InputField from './InputField';

function Form(props) {
    return (
        <div className="form flex flex-jc-c ">
            <div className="form-input flex flex-col flex-jc-se">
                <h3>{props.heading}</h3>
                <InputField type="text" label={props.org} />
                <InputField type="text" label={props.title} />
                <InputField type="date" label={props.startDate} />
                <InputField type="date" label={props.endDate} />
            </div>
        </div>
    )
}

export default Form;