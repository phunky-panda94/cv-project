function SectionHeading(props) {
    return(
        <div className="section-heading flex flex-jc-sb flex-ai-c">
            {props.text}
            <span className="material-icons">add</span>
        </div>
    )
}

export default SectionHeading;