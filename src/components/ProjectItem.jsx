import React from "react"
import "../styles/project-item.scss";
import Icon from "./Icon";

const ProjectItem = (props) => {
    let halfPoint = Math.round(props.techStack.length / 2);
    return (
        <div className="d-flex flex-row justify-content-center project-item py-5 px-3 animate-this">
            <div className="col-2 d-md-flex d-none flex-row justify-content-center">
                <Icon iconClass="project-icon" path={props.path} />
            </div>
            <div className="ps-3 col-md-10 col-12">
                <p className={`mb-0 fs-large fw-bold ${props.type ? "": "color-primary"}`}>{props.title}</p>
                <p className={`mb-0 fs-small fw-300 color-secondary ${props.duration ? "d-block": "d-none"}`}>{props.duration}</p>
                <p className={`mb-0 fs-small color-primary fw-300 ${props.type ? "d-block": "d-none"}`}>{props.type}</p>
                <div className={`mt-3 mb-3 ${props.company ? "d-block": "d-none"}`}>
                    <p className="mb-1 fs-small fw-bold">Company</p>
                    <p className="mb-0 fs-small">{props.company}</p>
                </div>
                <div className="mt-3 mb-3">
                    <p className="mb-1 fs-small fw-bold">Description</p>
                    <p className="mb-0 fs-small">{props.description}</p>
                </div>
                <div className={`mt-3 mb-3 ${props.role ? "d-block": "d-none"}`}>
                    <p className="mb-1 fs-small fw-bold">Role in the project</p>
                    <p className="mb-0 fs-small">{props.role}</p>
                </div>
                {/* <div className="broken-line w-75"></div> */}
                <div className="mt-3">
                    <p className="mb-1 fs-small fw-bold">Technology Stack</p>
                    <div className="d-flex flex-row">
                        <div className="col-6">
                            <ul>
                            {
                                props.techStack.map((ts, index) => {
                                    if (index >= halfPoint) return;
                                    else {
                                        return (
                                            <li key={`ts-${index}`}><p className="mb-0 fs-small">{ts}</p></li>
                                        )
                                    }
                                })
                            }
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                            {
                                props.techStack.map((ts, index) => {
                                    if (index < halfPoint) return;
                                    else {
                                        return (
                                            <li key={`ts-${index}`}><p className="mb-0 fs-small">{ts}</p></li>
                                        )
                                    }
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={`mt-3 mb-3 ${props.link ? "d-block": "d-none"}`}>
                    <p className="mb-1 fs-small fw-bold">Project Link</p>
                    <a className="text-decoration-none color-link" href={props.link} target="_blank">
                        <p className="mb-0 fs-small">{props.link}</p>
                    </a>
                </div>
            </div>
        </div>
  )
};

export default ProjectItem;