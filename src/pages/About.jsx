import React from "react"
import { enter } from "../behaviors/animation";
import SkillBar from "../components/SkillBar";
import "../styles/about.scss";
import WorkExperienceItem from "../components/WorkExperienceItem";

class About extends React.Component {
    componentDidMount() {
        this.props.navigateClick("About");
        enter();
    }

    render () {
        return (
            <div className="d-flex flex-column h-90 overflow-y-scroll">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        {/* LEFT */}
                        <div className="d-flex flex-column col-lg-5 col-12">
                            <div className="d-flex flex-row justify-content-lg-start justify-content-center pe-lg-0 pe-5">
                                <img src={this.props.businessImg} className="img-fluid profile-picture animate-this"></img>
                            </div>
                            <div className="py-2 d-lg-none d-block mt-3">
                                <p className="mb-0 fs-title-4 fw-bold animate-this">JOSHUA ELI C. REGANOT</p>
                                <p className="mb-0 fs-normal text-center pe-5 mb-1 text-seconday animate-this">Fullstack Web Developer</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-4 mb-3 mt-5 animate-this">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 384 512">
                                    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
                                </svg>
                                <p className="fs-small mb-0">+63 956 831 8676</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-4 mb-3 animate-this">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope-fill icon" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                </svg>
                                <p className="fs-small mb-0">joshuareganot@gmail.com</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-4 mb-3 animate-this">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt-fill icon" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                                <p className="fs-small mb-0">Castillo Cmpd., P1 San Jose Rd., Talamban, Cebu</p>
                            </div>

                            <div className="mt-4 mb-2">
                                <p className="fs-extra-large fw-bold mb-0 animate-this">EDUCATION</p>
                                <p className="fs-normal fw-bold mt-2 mb-0 animate-this">Bachelor of IT</p>
                                <p className="fs-small fw-300 mb-0 animate-this">University of San Carlos</p>
                                <p className="fs-small mb-0 animate-this">2008 - 2012</p>
                            </div>

                            <div className="mt-5">
                                <p className="fs-extra-large fw-bold mb-0 animate-this">SKILLS</p>
                                <div className="d-flex flex-row w-90 mt-2 animate-this">
                                    {/* LEFT */}
                                    <div className="col-6 pe-4">
                                        <div className="mb-4">
                                            <p className="fs-small">C#</p>
                                            <SkillBar percentage="100" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">.NET Core</p>
                                            <SkillBar percentage="80" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">AWS</p>
                                            <SkillBar percentage="80" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">Nodejs</p>
                                            <SkillBar percentage="30" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">Laravel</p>
                                            <SkillBar percentage="30" />
                                        </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className="col-6 ps-2 pe-2">
                                        <div className="mb-4">
                                            <p className="fs-small">EntityFramework</p>
                                            <SkillBar percentage="80" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">MSSQL</p>
                                            <SkillBar percentage="80" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">React</p>
                                            <SkillBar percentage="80" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">Expressjs</p>
                                            <SkillBar percentage="30" />
                                        </div>
                                        <div className="mb-4">
                                            <p className="fs-small">Embeddedjs</p>
                                            <SkillBar percentage="30" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 mb-2">
                                <p className="fs-extra-large fw-bold mb-0 animate-this">CERTIFICATIONS</p>
                                <p className="fs-normal fw-300 mt-2 mb-0 animate-this">AWS Solutions Architect Associate (SAAC03)</p>
                                <a className="fs-small text-decoration-none color-link fw-bold animate-this" href="https://www.credly.com/badges/7e4f9155-3846-4272-82b2-3eefb880050d/public_url" target="_blank">See Credly Badge</a>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-7">
                            <div className="pt-2 pb-4 mb-5 d-lg-block d-none">
                                <p className="mb-0 fs-title-4 fw-bold animate-this">JOSHUA ELI C. REGANOT</p>
                                <p className="mb-0 fs-normal ps-4 mb-1 text-seconday animate-this">Fullstack Web Developer</p>
                                <div className="border-bottom w-50 mt-4 animate-this"></div>
                            </div>
                            <div className="mt-5">
                                <p className="fs-extra-large fw-bold mt-4 mb-3 animate-this">PROFILE</p>
                                <p className="mb-0 fs-small w-50 animate-this">Software developer with over 12 years of professional C# .NET
                                    experience. I'm always looking for ways to improve myself everyday
                                    to be the best developer that I can be.
                                </p>
                            </div>
                            <div className="mt-5">
                                <p className="fs-extra-large fw-bold mt-4 mb-3 animate-this">WORK EXPERIENCE</p>
                                <div className="d-flex flex-column">
                                    <WorkExperienceItem addFillerHeight={false}
                                                        duration="Apr 2022 - Present"
                                                        company="Merkle"
                                                        jobTitle="Software Developer"
                                                        experience="This is when I took interest in the AWS Cloud Platform since I was working daily with AWS Serverless Architecture Services." />
                                    <WorkExperienceItem addFillerHeight={true}
                                                        duration="Apr 2018 - Apr 2022"
                                                        company="CSAM Philippines"
                                                        jobTitle="Software Developer"
                                                        experience="This is when I found the most meaning in software development because we were developing Healthcare Products." />
                                    <WorkExperienceItem addFillerHeight={true}
                                                        duration="Apr 2015 - Apr 2018"
                                                        company="Accenture"
                                                        jobTitle="Software Developer"
                                                        experience="This is when I got exposed to fullstack web development." />
                                    <WorkExperienceItem addFillerHeight={true}
                                                        duration="Aug 2012 - Apr 2015"
                                                        company="NPAX Cebu Corporation"
                                                        jobTitle="Junior Developer"
                                                        experience="This is when I learned how to deal with clients because I was sent to Manila to train the clients on how to use our system." />
                                    <WorkExperienceItem addFillerHeight={true}
                                                        duration="Oct 2011 - Aug 2012"
                                                        company="Remote Technology Solutions"
                                                        jobTitle="Intern Developer"
                                                        experience="This is the company with the most interesting software project that I have been on." />
                                    <WorkExperienceItem addFillerHeight={true}
                                                        isPointStart={true} />
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