export function InputField(props) {
    return (
        <div>
            <label htmlFor={props.label}>
                <span>{props.label}</span>
                <input type={props.type} name={props.label} onChange={props.change} value={props.value} required={props.required}></input>
            </label>
        </div>
    )
}

export function TextArea(props) {
    return (
        <div>
            <label className="flex flex-jc-fs" htmlFor={props.label}>
                <span>{props.label}</span>
                <textarea name={props.label} value={props.value} onChange={props.change}></textarea>
            </label>
        </div>
    )
}