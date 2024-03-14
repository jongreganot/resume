import React from "react"
import "../styles/layout.scss";
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route,
    Navigate
  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DelayLink from "../components/DelayLink";
import businessImg from "../images/business-picture.jpg";

class Layout extends React.Component {
    state = {
        currentLink: "Home"
    }

    navigateClick = (clickedLink) => {
        this.setState({
            currentLink: clickedLink
        });
    }

    render () {
        return (
            <Router>
                <div className="main-background p-5">
                    <div className="mask"></div>
                    <div className="d-flex flex-row position-relative px-5 h-100">
                        <div className="col-2 d-flex flex-column justify-content-start align-items-start">
                            <p className="mb-0 fs-normal">
                                Joshua Reganot 
                                <span className="color-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle-fill circle-top-icon" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8"/>
                                    </svg>
                                </span>
                            </p>
                            <div className="border-left side-line mt-5"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin contact-icon mt-4 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram contact-icon mt-4 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256" className="contact-icon mt-4 cursor-pointer">
                                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M1,9c-0.552,0 -1,0.448 -1,1v14.11523c0,6.161 4.68298,11.51624 10.83398,11.86523c5.897,0.334 10.91389,-3.80408 11.96289,-9.33008c0.57,0.77 1.14937,1.48558 1.73438,2.14258l-3.5293,14.97852c-0.069,0.298 0.00045,0.60861 0.18945,0.84961c0.191,0.238 0.47916,0.37891 0.78516,0.37891h5.11914c0.464,0 0.8637,-0.31267 0.9707,-0.76367c0.621,-2.621 1.59456,-6.72817 2.47656,-10.45117l0.91016,0.52734c2.165,1.121 4.36187,1.6875 6.54688,1.6875c7.192,0 12.926,-6.359 11.875,-13.75c-0.696,-4.896 -4.46092,-8.93166 -9.29492,-9.97266c-5.629,-1.213 -11.05472,1.6718 -13.38672,6.4668c0,0 -0.2588,0.57444 -0.4668,1.14844c-1.65,-2.846 -2.61895,-5.7985 -3.12695,-7.9375c-0.185,-0.78 -0.46214,-2.1922 -0.49414,-2.2832c-0.139,-0.403 -0.51636,-0.67187 -0.94336,-0.67187h-5.16211c-0.552,0 -1,0.448 -1,1v14.30078c0,2.349 -1.71278,4.44974 -4.05078,4.67773c-2.682,0.262 -4.94922,-1.84852 -4.94922,-4.47852v-14.5c0,-0.552 -0.448,-1 -1,-1zM38,19c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.225,0 -4.28647,-1.34172 -5.73047,-2.51172c0.527,-2.225 0.88072,-3.71523 0.88672,-3.74023c0.568,-2.207 2.56075,-3.74805 4.84375,-3.74805z"></path></g></g>
                            </svg>
                            <div className="border-left side-line mt-4"></div>
                        </div>
                        <div className="col-10 d-flex flex-column">
                            <div className="d-flex flex-column h-100">
                                <nav className="position-relative">
                                    <div className="d-flex flex-row justify-content-between">
                                        <ul className="nav me-auto fs-small fw-bold">
                                            <DelayLink linkName="Home" currentLink={this.state.currentLink} navigateClick={this.navigateClick} />
                                            <DelayLink linkName="About" currentLink={this.state.currentLink} navigateClick={this.navigateClick} />
                                            
                                            <a href="#" className="nav-item resume-link text-decoration-none pe-5 text-uppercase">Projects</a>
                                            <a href="#" className="nav-item resume-link text-decoration-none text-uppercase">Contact</a>
                                        </ul>
                                        <p className="mb-0 fs-normal">joshuareganot@gmail.com</p>
                                    </div>
                                </nav>
                                <div style={{height: "10%"}}></div>
                                <Routes>
                                    <Route path="/resume" element={<Navigate replace to="/resume/home" />} />
                                    <Route exact
                                            path="/resume/home"
                                            element={<Home />}></Route>
                                    <Route exact
                                            path="/resume/about"
                                            element={<About businessImg={businessImg} navigateClick={this.navigateClick} />}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    };
}

export default Layout;