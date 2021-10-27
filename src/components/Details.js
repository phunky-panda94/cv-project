import React, { useState } from 'react';
import Heading from './Heading';
import { InputField } from './Input';
import Form from './Form';
import Section from './Section';

function Details(props) {

    const [formLabels, setformLabels] = useState({
        heading: '',
        org: ''
    })

    const [formDetails, setFormDetails] = useState({
        org: '',
        title: '',
        startDate: '',
        endDate: '',
        details: ''
    })

    const [entries, setEntries] = useState(() => {

        if (localStorage.getItem('entries') != null) {
            return new Map(Object.entries(JSON.parse(localStorage.getItem('entries'))));
        } else {
            return new Map();
        }

    })

    function showForm(heading, org) {

        setformLabels({
            heading: heading,
            org: org
        })

        props.toggleHidden();

    }

    function addEntry(entry) {

        entries.set(entry.id,entry);
        const updatedEntries = new Map(entries);

        localStorage.setItem('entries', JSON.stringify(Object.fromEntries(updatedEntries)));
        setEntries(updatedEntries);

    }

    function deleteEntry(entryId) {

        entries.delete(entryId)
        const updatedEntries = new Map(entries);

        localStorage.setItem('entries', JSON.stringify(Object.fromEntries(updatedEntries)));
        setEntries(updatedEntries);

    }

    // TODO: implement edit functionality
    function editEntry(entryId, section, org) {
        
        showForm(section,org);


    }

    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            {props.hidden && <Form add={addEntry} close={props.toggleHidden} heading={formLabels.heading} org={formLabels.org} />}
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" />
                <InputField label="Phone" />
                <InputField label="Email" />
            </div>
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={entries} heading="Education" org="Institution" />
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={entries} heading="Work Experience" org="Company" />
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={entries} heading="Extra-curricular" org="Organisation" />
        </div>
    )
}

export default Details;