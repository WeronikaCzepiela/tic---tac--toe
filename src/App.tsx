import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Bottom} from './components/Bottom/Bottom'
import {Middle} from "./components/Middle/Middle";

function App() {
    return (
        <div className="App">
            <Header/>
            <Middle/>
            <Bottom/>
        </div>
    );
}

export default App;
