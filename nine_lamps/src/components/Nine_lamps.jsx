import {useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";
import elec_on from '../img/electricity_on.png';
import elec_off from '../img/electricity_off.png';

export function Nine_lamps() {
    const [lampsState, setLampsState] = useState([false, false, false, false, false, false, false, false, false]);
    const [startStopTimer, setStartStopTimer] = useState(false);
    const [problemSolved, setProblemSolved] = useState(false);
    const [problemCouldntBeSolved, setProblemCouldntBeSolved] = useState(false);
    const [counter, setCounter] = useState(300);
    const [cookies, setCookie, removeCookie] = useCookies(['puzzle-solved']);

    //Todo How to handle reload?? __ save state to cookie every second? / save remaning time to cookie every few seconds to prevent reload abuse?
    //Todo load lampstate and time from cookie if cookie exists
    useEffect(() => {
        console.log(Object.keys(cookies).length === 0);

        // A cookie entry has been made
        if (Object.keys(cookies).length > 0) {

        }

    }, [])

    //Update Timer
    useEffect(() => {
        if (startStopTimer) {
            if (counter < 1) {
                setProblemCouldntBeSolved(true);
                setCookie('puzzle-solved', 'failure-'+lampsState.toString(), {path: '/'})
            }

            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }

    }, [counter, startStopTimer])

    useEffect(() => {
        //stop puzzle when arrays are equal
        if (arrayEquals(lampsState, [true, true, true, true, true, true, true, true, true])) {
            setStartStopTimer(false);
            setProblemSolved(true);

            //Save time here
            setCookie('puzzle-solved', 'success-'+(300-counter), {path: '/'})
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
        if (problemSolved || problemCouldntBeSolved) {
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
        if (!problemSolved && !problemCouldntBeSolved) {
            setLampsState([false, false, false, false, false, false, false, false, false])
        }
    }

    //Parse seconds to minutes with seconds
    function secondsToTime(e) {
        const h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');

        return m + ':' + s;
    }

    return (
        <div className="nine_lamps_content">
            <div>
                <div className="timer">Timer: {secondsToTime(counter)}</div>
            </div>

            <div className="row">
                <button
                    onClick={() => {
                        changeLampState(1)
                    }}
                    className={lampsState[0] ? 'active' : 'not-active'}>
                    {
                        lampsState[0] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button
                    onClick={() => {
                        changeLampState(2)
                    }}
                    className={lampsState[1] ? 'active' : 'not-active'}>
                    {
                        lampsState[1] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button onClick={() => {
                    changeLampState(3)
                }}
                        className={lampsState[2] ? 'active' : 'not-active'}>
                    {
                        lampsState[2] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
            </div>
            <div className="row">
                <button onClick={() => {
                    changeLampState(4)
                }}
                        className={lampsState[3] ? 'active' : 'not-active'}>
                    {
                        lampsState[3] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button onClick={() => {
                    changeLampState(5)
                }}
                        className={lampsState[4] ? 'active' : 'not-active'}>
                    {
                        lampsState[4] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button onClick={() => {
                    changeLampState(6)
                }}
                        className={lampsState[5] ? 'active' : 'not-active'}>
                    {
                        lampsState[5] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
            </div>
            <div className="row">
                <button onClick={() => {
                    changeLampState(7)
                }}
                        className={lampsState[6] ? 'active' : 'not-active'}>
                    {
                        lampsState[6] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button onClick={() => {
                    changeLampState(8)
                }}
                        className={lampsState[7] ? 'active' : 'not-active'}>
                    {
                        lampsState[7] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
                </button>
                <button onClick={() => {
                    changeLampState(9)
                }}
                        className={lampsState[8] ? 'active' : 'not-active'}>
                    {
                        lampsState[8] ?
                            <img src={elec_on} alt="electricity off"/> :
                            <img src={elec_off} alt="electricity off"/>
                    }
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
