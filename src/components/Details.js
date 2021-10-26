import React, { useState } from 'react';
import Heading from './Heading';
import InputField from './InputField';
import Form from './Form';
import Section from './Section';

function Details() {

    const [formHidden, setFormHidden] = useState(false);
    const [formDetails, setFormDetails] = useState({
        heading: '',
        org: ''
    })

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

    function toggleHidden() {
        formHidden ? setFormHidden(false) : setFormHidden(true);
    }

    function handleClick(heading, org) {
        
        setFormDetails({
            heading: heading,
            org: org
        })

        toggleHidden();

    }

    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            {formHidden && <div className="modal flex flex-jc-c flex-ai-c">
                <Form close={toggleHidden} heading={formDetails.heading} org={formDetails.org} />
            </div>}
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" />
                <InputField label="Phone" />
                <InputField label="Email" />
            </div>
            <Section add={handleClick} entries={educationEntries} heading="Education" org="Institution" />
            <Section add={handleClick} entries={workEntries} heading="Work Experience" org="Company" />
            <Section add={handleClick} entries={extraEntries} heading="Extra-curricular" org="Organisation" />
        </div>
    )
}

export default Details;