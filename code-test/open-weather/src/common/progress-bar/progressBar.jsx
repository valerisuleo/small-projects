import React from "react";
import Filler from "./filler";
import "./progressBar.scss";

const ProgressBar = (props) => {
    const { percentage } = props;
    return (
        <div className="progress-barz">
            <Filler percentage={percentage}></Filler>
        </div>
    );
};

export default ProgressBar;
