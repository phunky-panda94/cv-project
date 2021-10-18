function InputField(props) {
    return (
        <div className="field">
            <label for={props.label}>
                <span>{props.label}</span>
                <input type="text" name={props.label}></input>
            </label>
        </div>
    )
}

export default InputField;