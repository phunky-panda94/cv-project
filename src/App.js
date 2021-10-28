import './styles/style.css';
import React, { useState } from 'react';
import Details from './components/Details';
import Display from './components/Display';

function App() {

    let storedEntries;
    let storedName = localStorage.getItem('name');
    let storedPhone = localStorage.getItem('phone');
    let storedEmail = localStorage.getItem('email');

    if (localStorage.getItem('entries') != null) {
        storedEntries = new Map(Object.entries(JSON.parse(localStorage.getItem('entries'))));
    } else {
        storedEntries = new Map();
    }

    const [modalHidden, setModalHidden] = useState(false);
    const [name, setName] = useState(storedName != null ? storedName : '');
    const [phone, setPhone] = useState(storedPhone != null ? storedPhone : '');
    const [email, setEmail] = useState(storedEmail != null ? storedEmail : '');
    const [entries, setEntries] = useState(storedEntries);
  
    function toggleHidden() {
        modalHidden ? setModalHidden(false) : setModalHidden(true);
    }

    return (
        <div className="flex flex-wrap flex-jc-se">
            {modalHidden && <div className="modal flex flex-jc-c flex-ai-c"></div>}
            <Details 
                toggleHidden={toggleHidden} 
                hidden={modalHidden} 
                entries={entries} 
                setEntries={setEntries} 
                setName={setName}
                setPhone={setPhone}
                setEmail={setEmail}
            />
            <Display 
                toggleHidden={toggleHidden} 
                hidden={modalHidden} 
                entries={entries} 
                name={name}
                phone={phone}
                email={email}
            />
        </div>
  );
}

export default App;
