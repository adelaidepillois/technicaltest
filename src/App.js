import React, {Component} from 'react';
import Forms from "./components/Forms";
import Cards from "./components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>Magic the Gathering</h1>
            <Forms/>
            <Cards/>
        </div>
    );
}


export default App;
