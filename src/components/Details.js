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

    const [entries, setEntries] = useState(() => {
        if (localStorage.getItem('entries') != null) {
            return new Map(Object.entries(JSON.parse(localStorage.getItem('entries'))));
        } else {
            return new Map();
        }
    });

    function handleAdd(heading, org) {
        setFormDetails({
            heading: heading,
            org: org
        })

        props.toggleHidden();
    }

    function handleDelete(entryId) {
        entries.delete(entryId)
        const updatedEntries = new Map(entries);

        localStorage.setItem('entries', JSON.stringify(Object.fromEntries(updatedEntries)));
        setEntries(updatedEntries);
    }

    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            {props.hidden && <Form close={props.toggleHidden} heading={formDetails.heading} org={formDetails.org} />}
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" />
                <InputField label="Phone" />
                <InputField label="Email" />
            </div>
            <Section add={handleAdd} delete={handleDelete} entries={entries} heading="Education" org="Institution" />
            <Section add={handleAdd} entries={entries} heading="Work Experience" org="Company" />
            <Section add={handleAdd} entries={entries} heading="Extra-curricular" org="Organisation" />
        </div>
    )
}

export default Details;