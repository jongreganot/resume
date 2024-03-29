import React from "react"

const FillerLine = (props) => {
    return (
        <div style={{height: "80px"}} className="d-md-flex d-none flex-row gap-3">
            <div className="col-5 d-flex flex-row align-items-end justify-content-end">
                <p className={`mb-0 text-end fs-small fw-bold ${props.timePointLeft ? "animate-this" : ""}`}>{props.timePointLeft}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="timeline-line h-87 animate-this"></div>
                <div className="timeline-point animate-this"></div>
            </div>
            <div className="col-5 d-flex flex-row align-items-end">
                <p className={`mb-0 fs-small fw-bold ${props.timePointRight ? "animate-this" : ""}`}>{props.timePointRight}</p>
            </div>
        </div>
    )
};

export default FillerLine;