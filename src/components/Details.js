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

    const educationEntries = [{
        org: 'ABC University',
        title: 'Bachelor of Science',
        date:'Jan 2019 - Mar 2023'
    }]

    const workEntries = [{
        org: 'CompanyA',
        title: 'Manager',
        date: 'Apr 2015 - Apr 2023'
    }]

    const extraEntries = [{
        org: 'Church',
        title: 'Pastor',
        date: 'Apr 2014 - Current'
    }]

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