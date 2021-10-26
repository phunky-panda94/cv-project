import './styles/style.css';
import React, { useState } from 'react';
import Details from './components/Details';
import Display from './components/Display';

function App() {

    const [modalHidden, setmodalHidden] = useState(false);
  
    function toggleHidden() {
        modalHidden ? setmodalHidden(false) : setmodalHidden(true);
    }

    return (
    <div className="flex flex-wrap flex-jc-se">
        {modalHidden && <div className="modal flex flex-jc-c flex-ai-c"></div>}
        <Details toggleHidden={toggleHidden} hidden={modalHidden} />
        <Display toggleHidden={toggleHidden} hidden={modalHidden} />
    </div>
  );
}

export default App;
