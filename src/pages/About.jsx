import React from "react"
import { enter } from "../behaviors/animation";

class About extends React.Component {
    componentDidMount() {
        enter();
    }

    render () {
        return (
            <div className="d-flex flex-column h-100">
                <div className="d-flex flex-column">
                    <p className="mb-0 fs-normal animate-this">Fullstack Web Developer / Cebu / Freelance</p>
                </div>
            </div>
        )
    };
}

export default About;