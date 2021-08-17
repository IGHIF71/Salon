import React from 'react';
import {render} from 'react-dom'

export default function App(){

    
    return(<h1>Fuck react</h1>);
    
}

const appDiv = document.getElementById("main");
render(<App />, appDiv);