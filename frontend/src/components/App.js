import React from 'react';

export default function App(){

    return(
        <h1>Testing React Code</h1>
    )
}

const appDiv = document.getElementById("main");
render (<App />, appDiv);