import React, { useState } from 'react';
import Heading from './Heading';
import { InputField } from './Input';
import Form from './Form';
import Section from './Section';

function Details(props) {

    const [formLabels, setformLabels] = useState({
        heading: '',
        orgLabel: ''
    })

    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const [org, setOrg] = useState('');
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [details, setDetails] = useState('');

    function showForm(heading, orgLabel) {

        setformLabels({
            heading: heading,
            orgLabel: orgLabel
        })

        props.toggleHidden();

    }

    function closeForm() {

        setEdit(false);

        setOrg('');
        setTitle('');
        setStartDate('');
        setEndDate('');
        setDetails('');

        props.toggleHidden();
    }

    function addEntry(entry) {

        props.entries.set(entry.id,entry);
        const updatedEntries = new Map(props.entries);

        localStorage.setItem('entries', JSON.stringify(Object.fromEntries(updatedEntries)));
        props.setEntries(updatedEntries);

    }

    function deleteEntry(entryId) {

        if (window.confirm('Are you sure?')) {

            props.entries.delete(entryId)
            const updatedEntries = new Map(props.entries);

            localStorage.setItem('entries', JSON.stringify(Object.fromEntries(updatedEntries)));
            props.setEntries(updatedEntries);

        }

    }

    function editEntry(entryId, section, orgLabel) {
        
        setEdit(true);

        let entry = props.entries.get(entryId);

        setId(entryId);
        setOrg(entry.org);
        setTitle(entry.title);
        setStartDate(entry.startDate);
        setEndDate(entry.endDate);
        setDetails(entry.details);

        showForm(section,orgLabel);

    }

    function handleChange(event) {
        
        switch(event.target.name) {
            case 'Institution' || 'Company' || 'Organisation':
                setOrg(event.target.value);
                break;
            case 'Title':
                setTitle(event.target.value);
                break;
            case 'Start Date':
                setStartDate(event.target.value);
                break;
            case 'End Date':
                setEndDate(event.target.value);
                break;
            case 'Details':
                setDetails(event.target.value);
                break;
            case 'Name':
                props.setName(event.target.value);
                localStorage.setItem('name',event.target.value);
                break;
            case 'Phone':
                props.setPhone(event.target.value);
                localStorage.setItem('phone',event.target.value);
                break;
            case 'Email':
                props.setEmail(event.target.value);
                localStorage.setItem('email',event.target.value);
                break;
            default:
        }

    }

    return (
        <div className="container flex flex-col flex-ai-c flex-jc-se">
            {props.hidden && 
                <Form 
                    add={addEntry} 
                    close={closeForm} 
                    edit={edit}
                    heading={formLabels.heading} 
                    orgLabel={formLabels.orgLabel} 
                    change={handleChange}
                    id={id}
                    org={org}
                    title={title}
                    startDate={startDate}
                    endDate={endDate}
                    details={details}
                />
            }
            <Heading text="Make-a-CV"/>
            <div className="input flex flex-col flex-jc-sb">
                <InputField label="Name" change={handleChange} value={props.name}/>
                <InputField label="Phone" change={handleChange} value={props.phone}/>
                <InputField label="Email" change={handleChange} value={props.email}/>
            </div>
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={props.entries} heading="Education" orgLabel="Institution" />
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={props.entries} heading="Work Experience" orgLabel="Company" />
            <Section showForm={showForm} edit={editEntry} delete={deleteEntry} entries={props.entries} heading="Extra-curricular" orgLabel="Organisation" />
        </div>
    )
}

export default Details;