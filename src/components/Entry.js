function Entry(props) {
    return (
        <div className="border entry flex flex-jc-sb">
            <span>ABC University</span>
            <span>Bachelor of Science</span>
            <span>Mar 2021</span>
            <div>
                <span className="material-icons">edit</span>
                <span className="material-icons">delete</span>
            </div>
        </div>
    )
}

export default Entry;