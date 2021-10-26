import React, { useState } from 'react';
import Heading from './Heading';
import InputField from './InputField';
import Form from './Form';
import Section from './Section';

function Details(props) {

    const [formDetails, setFormDetails] = useState({
        heading: '',
        org: ''
    })

    // TODO: refactor to use state
    let educationEntries;
    let workEntries;
    let extraEntries;

    if (localStorage.getItem('Education') != null) {
        educationEntries = new Map(Object.entries(JSON.parse(localStorage.getItem('Education'))));
    } 
    
    if (localStorage.getItem('Work Experience') != null) {
        workEntries = new Map(Object.entries(JSON.parse(localStorage.getItem('Work Experience'))));
    }

    if (localStorage.getItem('Extra-curricular') != null) {
        extraEntries = new Map(Object.entries(JSON.parse(localStorage.getItem('Extra-curricular'))));
    }

    const [education, setEducation] = useState(educationEntries);
    const [work, setWork] = useState(workEntries);
    const [extra, setExtra] = useState(extraEntries);

    function handleAdd(heading, org) {
        setFormDetails({
            heading: heading,
            org: org
        })

        props.toggleHidden();
    }

    function handleEducation(entryId) {
        education.delete(entryId)
        const updatedEducation = new Map(education);

        localStorage.setItem('Education', JSON.stringify(Object.fromEntries(updatedEducation)));
        setEducation(updatedEducation);
    }

    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            {/* {formHidden && <div className="modal flex flex-jc-c flex-ai-c">
                <Form close={toggleHidden} heading={formDetails.heading} org={formDetails.org} />
            </div>} */}
            {props.hidden && <Form close={props.toggleHidden} heading={formDetails.heading} org={formDetails.org} />}
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" />
                <InputField label="Phone" />
                <InputField label="Email" />
            </div>
            <Section add={handleAdd} delete={handleEducation} entries={education} heading="Education" org="Institution" />
            <Section add={handleAdd} entries={work} heading="Work Experience" org="Company" />
            <Section add={handleAdd} entries={extra} heading="Extra-curricular" org="Organisation" />
        </div>
    )
}

export default Details;