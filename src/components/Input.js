function Input() {
    return (
        <div className="input flex flex-col flex-jc-sb">
            <InputField label="Name" />
            <InputField label="Email" />
            <InputField label="Phone Number" />
        </div>
    )
}

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

export default Input;