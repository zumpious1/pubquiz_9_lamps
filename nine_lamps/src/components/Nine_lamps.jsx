import {useEffect, useState} from "react";

export function Nine_lamps() {
    const [lampsState, setLampsState] = useState([false, false, false, false, false, false, false, false, false]);

    useEffect(() => {
        console.log('lampsState:  ', lampsState);
    }, [lampsState]);

    const changeLampState = function(lamp) {
        console.log('lamp from changeLampState: ', lamp);

        //Array starts at 0
        console.log('lampstate[lamp-1]: ', lampsState[lamp]);

        //Click lamp is turned on
        if (lampsState[lamp-1]) {
            console.log('clicked lamp was turned on')

        } else {
            console.log('clicked lamp was turned off')
            //Handle lamp state change if lamp was turned off
            switch(lamp){
                case (1):
                    setLampsState([true, true, false, true, false, false, false, false, false])
            }
        }




    }

    return (
        <div className="nine_lamps_content">
            <div className="row">
                <button onClick={() => {changeLampState(1)}}>1</button>
                <button onClick={() => {changeLampState(2)}}>2</button>
                <button onClick={() => {changeLampState(3)}}>3</button>
            </div>
            <div className="row">
                <button onClick={() => {changeLampState(4)}}>4</button>
                <button onClick={() => {changeLampState(5)}}>5</button>
                <button onClick={() => {changeLampState(6)}}>6</button>
            </div>
            <div className="row">
                <button onClick={() => {changeLampState(7)}}>7</button>
                <button onClick={() => {changeLampState(8)}}>8</button>
                <button onClick={() => {changeLampState(9)}}>9</button>
            </div>
        </div>
    );
}

export default Nine_lamps;
