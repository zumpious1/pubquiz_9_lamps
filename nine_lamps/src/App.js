import './App.css';
import Nine_lamps from "./components/Nine_lamps";
import Header from "./components/Header";
import {CookiesProvider} from 'react-cookie';


function App() {

    //Todo stop app, when timer finished
    //Todo Save timer to coockie
    //Todo Save winner to cookie and winner time
    //Todo Save state to cookie when timer ran up

    return (
        <CookiesProvider>
            <div>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <Nine_lamps/>
                </div>
            </div>
        </CookiesProvider>
    );
}

export default App;
