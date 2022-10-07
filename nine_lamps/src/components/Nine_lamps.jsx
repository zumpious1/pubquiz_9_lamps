import {useEffect, useRef, useState} from "react";
import Timer from "./Timer";
import {useCookies} from "react-cookie";

export function Nine_lamps() {
    const [lampsState, setLampsState] = useState([false, false, false, false, false, false, false, false, false]);
    const [startStopTimer, setStartStopTimer] = useState(false);
    const [problemSolved, setProblemSolved] = useState(false)

    const [cookies, setCookie, removeCookie] = useCookies(['puzzle-solved']);

    //Todo get timer value from child and prevent more input after timer ran up
    //Todo save states to cookies if times up
    //Todo Load last set of lamps if times from cookie after reload
    //Create a time reference
    const timeRef = useRef();

    useEffect(() => {
        //stop puzzle when array are equal
        if (arrayEquals(lampsState, [true, true, true, true, true, true, true, true, true])) {
            setStartStopTimer(false);
            setProblemSolved(true);

            //Save time here
            setCookie('puzzle-solved', 'success', {path: '/'})
        }

    }, [lampsState]);

    //Compare arrays
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    //Toggle lampState of given lamp and their direct neighbours
    const changeLampState = function (lamp) {
        if (problemSolved) {
            return;
        }

        if (!startStopTimer) {
            setStartStopTimer(true);
        }
        switch (lamp) {
            case (1):
                setLampsState([!lampsState[0], !lampsState[1], lampsState[2], !lampsState[3], lampsState[4], lampsState[5], lampsState[6], lampsState[7], lampsState[8]]);
                break;
            case(2):
                setLampsState([!lampsState[0], !lampsState[1], !lampsState[2], lampsState[3], !lampsState[4], lampsState[5], lampsState[6], lampsState[7], lampsState[8]]);
                break;
            case(3):
                setLampsState([lampsState[0], !lampsState[1], !lampsState[2], lampsState[3], lampsState[4], !lampsState[5], lampsState[6], lampsState[7], lampsState[8]]);
                break;
            case(4):
                setLampsState([!lampsState[0], lampsState[1], lampsState[2], !lampsState[3], !lampsState[4], lampsState[5], !lampsState[6], lampsState[7], lampsState[8]]);
                break;
            case(5):
                setLampsState([lampsState[0], !lampsState[1], lampsState[2], !lampsState[3], !lampsState[4], !lampsState[5], lampsState[6], !lampsState[7], lampsState[8]]);
                break;
            case(6):
                setLampsState([lampsState[0], lampsState[1], !lampsState[2], lampsState[3], !lampsState[4], !lampsState[5], lampsState[6], lampsState[7], !lampsState[8]]);
                break;
            case(7):
                setLampsState([lampsState[0], lampsState[1], lampsState[2], !lampsState[3], lampsState[4], lampsState[5], !lampsState[6], !lampsState[7], lampsState[8]]);
                break;
            case(8):
                setLampsState([lampsState[0], lampsState[1], lampsState[2], lampsState[3], !lampsState[4], lampsState[5], !lampsState[6], !lampsState[7], !lampsState[8]]);
                break;
            case(9):
                setLampsState([lampsState[0], lampsState[1], lampsState[2], lampsState[3], lampsState[4], !lampsState[5], lampsState[6], !lampsState[7], !lampsState[8]]);
                break;
        }
    }

    //Reset lamps to start position
    const resetLampstates = function () {

        if (!problemSolved) {
            setLampsState([false, false, false, false, false, false, false, false, false])
        }
    }

    return (
        <div className="nine_lamps_content">

            <div className="row">
                <Timer startStopTimer={startStopTimer}/>
            </div>

            <div className="row">
                <button onClick={() => {
                    changeLampState(1)
                }}
                        className={lampsState[0] ? 'active' : 'not-active'}>
                    1
                </button>
                <button onClick={() => {
                    changeLampState(2)
                }}
                        className={lampsState[1] ? 'active' : 'not-active'}>
                    2
                </button>
                <button onClick={() => {
                    changeLampState(3)
                }}
                        className={lampsState[2] ? 'active' : 'not-active'}>
                    3
                </button>
            </div>
            <div className="row">
                <button onClick={() => {
                    changeLampState(4)
                }}
                        className={lampsState[3] ? 'active' : 'not-active'}>
                    4
                </button>
                <button onClick={() => {
                    changeLampState(5)
                }}
                        className={lampsState[4] ? 'active' : 'not-active'}>
                    5
                </button>
                <button onClick={() => {
                    changeLampState(6)
                }}
                        className={lampsState[5] ? 'active' : 'not-active'}>
                    6
                </button>
            </div>
            <div className="row">
                <button onClick={() => {
                    changeLampState(7)
                }}
                        className={lampsState[6] ? 'active' : 'not-active'}>
                    7
                </button>
                <button onClick={() => {
                    changeLampState(8)
                }}
                        className={lampsState[7] ? 'active' : 'not-active'}>
                    8
                </button>
                <button onClick={() => {
                    changeLampState(9)
                }}
                        className={lampsState[8] ? 'active' : 'not-active'}>
                    9
                </button>
            </div>

            <div className="reset">
                <button onClick={resetLampstates}>
                    Zurücksetzen
                </button>
            </div>
        </div>
    );
}

export default Nine_lamps;
