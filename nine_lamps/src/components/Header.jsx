import {useEffect, useState} from "react";

export function Header() {

    return (
        <div>
            <div className="heading">
                <h1> WG QUIZ </h1>
            </div>
            <div className="ruleset">
                <p>
                    Für die Bearbeitung habt ihr <span className="bold">5 min</span> Zeit. Für die richtige Lösung
                    bekommt ihr <span className="bold">2 Punkte</span>.
                </p>
                <p>
                    Ihr habt so viele Versuche wie ihr mögt.
                    <span className="bold"> Eure Zeit läuft sobald die erste Laterne beleuchtet wird.</span>
                </p>
                <p>
                    Bei korrekter Lösung kann sich ein <span className="bold">Extrapunkt</span> verdient werden.
                    Dafür müsst ihr nach Ablauf der Rätselrunde eure Lösung nochmal vor der ganzen Gruppe präsentieren.
                </p>
            </div>
        </div>

    );
}

export default Header;
