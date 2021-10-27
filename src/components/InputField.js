function InputField(props) {
    return (
        <div className="field">
            <label htmlFor={props.label}>
                <span>{props.label}</span>
                {props.required ? <input type={props.type} name={props.label} required></input> :
                <input type={props.type} name={props.label}></input>}
            </label>
        </div>
    )
}

export default InputField;