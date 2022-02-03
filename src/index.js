//import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
//create react component

const App = function() {
    const submit = 'Submit b';
    return (
        <div>
            <label htmlFor="name" className='label' >Enter text</label>
            <input type='text' id='name' />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{submit}</button>
        </div>
    );
};
// take it and show on screen

ReactDOM.render(<App />, document.getElementById('root'));
