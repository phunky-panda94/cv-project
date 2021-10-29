export function InputField(props) {
    return (
        <div>
            <label htmlFor={props.label}>
                <span>{props.label}</span>
                <input type={props.type} name={props.label} onChange={props.change} value={props.value} required={props.required} disabled={props.disabled}></input>
                {props.label === 'End Date' &&
                    <CheckBox text="Current" onCheck={props.onCheck}/>
                }
            </label>
        </div>
    )
}

export function CheckBox(props) {
    return (
        <div> 
            <label htmlFor={props.text}>
                <span></span>
                <input type="checkbox" name={props.text} onChange={props.onCheck}></input>
                <span>{props.text}</span>
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