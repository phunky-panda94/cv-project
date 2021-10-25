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
            <Section add={handleClick} heading="Education" org="Institution" />
            <Section add={handleClick} heading="Work Experience" org="Company" />
            <Section add={handleClick} heading="Extra-curricular" org="Organisation" />
        </div>
    )
}

export default Details;