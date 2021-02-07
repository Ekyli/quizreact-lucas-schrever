import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score"> Votre score final est {score} / 10 ! </div>
        <button className="playBtn" onClick={playAgain}>
            Rejouez !
        </button>
    </div>
);

export default Result;