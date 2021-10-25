function InputField(props) {
    return (
        <div className="field">
            <label htmlFor={props.label}>
                <span>{props.label}</span>
                <input type={props.type} name={props.label}></input>
            </label>
        </div>
    )
}

export default InputField;