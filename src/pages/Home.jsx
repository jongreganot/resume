import React from "react"
import { enter } from "../behaviors/animation";

class Home extends React.Component {
    componentDidMount() {
        enter();
    }
    
    render () {
        return (
            <div className="d-flex flex-column h-100">
                <div style={{height: "10%"}}></div>
                <div className="d-flex flex-column">
                    <p className="mb-0 fs-normal animate-this">Fullstack Software Developer</p>
                    <p className="mb-0 fs-title animate-this">Joshua</p>
                    <p className="mb-5 fs-title animate-this">Reganot 
                        <span className="color-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle-fill circle-main-icon" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        </span>
                    </p>
                    <div className="mt-5 pt-2 fs-small color-secondary animate-this">
                        <p className="mb-0 fst-italic">C# / .NET / EntityFramework (ORM) / MSSQL</p>
                        <p className="mb-0 fst-italic">React / Javascript / CSS (SASS, BOOTSTRAP) / HTML / JQUERY</p>
                        <p className="mb-0 fst-italic">AWS (Arichitect Associate Certified)</p>
                        <p className="mb-0 fst-italic">Currently Learning: Laravel (ORM) / Docker</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;