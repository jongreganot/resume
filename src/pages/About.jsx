import React from "react"
import { enter } from "../behaviors/animation";
import businessImg from "../images/business-picture.jpg";
import "../styles/my-utilities.scss";
import "../styles/about.scss";

class About extends React.Component {
    componentDidMount() {
        enter();
    }

    render () {
        return (
            <div className="d-flex flex-column h-90">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row h-30">
                        <div>
                            <img src={businessImg} className="h-100 img-fluid animate-this"></img>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-column justify-content-between ps-4 py-2 h-100">
                                <p className="mb-0 fs-normal animate-this">Fullstack Software Developer</p>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row align-items-center gap-2 mb-2 animate-this">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt-fill icon" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>
                                        <p className="fs-normal mb-0">Castillo Residence, P1 San Jose Rd., Talamban, 6000 Cebu</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-2 animate-this">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 384 512">
                                            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
                                        </svg>
                                        <p className="fs-normal mb-0">+63 956 831 8676</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default About;