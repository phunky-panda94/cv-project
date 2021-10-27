export function InputField(props) {
    return (
        <div>
            <label htmlFor={props.label}>
                <span>{props.label}</span>
                {props.required ? <input type={props.type} name={props.label} required></input> :
                <input type={props.type} name={props.label}></input>}
            </label>
        </div>
    )
}

export function TextArea(props) {
    return (
        <div>
            <label className="flex flex-jc-fs" htmlFor={props.label}>
                <span>{props.label}</span>
                <textarea name={props.label}></textarea>
            </label>
        </div>
    )
}