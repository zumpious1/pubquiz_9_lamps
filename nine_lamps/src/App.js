import './App.css';
import Nine_lamps from "./components/Nine_lamps";
import {useEffect, useState} from "react";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <Nine_lamps />
            </div>
        </div>

    );
}

export default App;
