import {useEffect, useState} from "react";

export function Timer(startStopTimerProps) {
    const [counter, setCounter] = useState(300);
    const [startStopTimer, setStartStopTimer] = useState(false);

    useEffect(() => {

        if (startStopTimerProps.startStopTimer) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }

    }, [counter, startStopTimerProps])

    //Parse seconds to minutes with seconds
    function secondsToTime(e){
        const h = Math.floor(e / 3600).toString().padStart(2,'0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');

        return m + ':' + s;
        //return `${h}:${m}:${s}`;
    }

    //Timer
    return (
        <div>
            <div className="timer">Timer: {secondsToTime(counter)}</div>
        </div>
    );
}

export default Timer;
