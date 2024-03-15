import React from "react"

const WorkExperienceItem = (props) => {
    return (
        <div>
            <div style={{height: "50px"}} className={`${props.addFillerHeight ? "d-flex" : "d-none"} flex-row`}>
                <div className="d-flex flex-column align-items-center col-1">
                    <div className="timeline-line h-87 animate-this"></div>
                    <div className="timeline-point animate-this"></div>
                </div>
            </div>
            <div className={`${props.isPointStart ? "d-none" : "d-flex"} flex-row gap-2`}>
                <div className="d-flex flex-column align-items-center col-1">
                    <div className={`timeline-point animate-this  ${props.addFillerHeight ? "d-none" : "d-block"}`}></div>
                    <div className="timeline-line h-100 animate-this"></div>
                </div>
                <div>
                    <p className="mb-0 fs-small color-secondary animate-this">{props.duration}</p>
                    <p className="mb-0 fs-extra-small color-secondary animate-this">{props.company}</p>
                    <p className="mb-0 fs-small fw-300 animate-this">{props.jobTitle}</p>
                    <div className="emphasis-border animate-this">
                        <p className="ps-3 mb-0 fs-small mt-1 w-75">{props.experience}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WorkExperienceItem;