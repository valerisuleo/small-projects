import React from "react";
import "./progressBar.scss";

const Filler = (props) => {
    const { percentage } = props;
    let classes = percentage < 0 ? "filler hide" : "filler";
    return <div className={classes} style={{ width: `${percentage}%` }}></div>;
};

export default Filler;
