import React from "react"
import ProjectItem from "../components/ProjectItem";
import { enter } from "../behaviors/animation";

class CorporateProject extends React.Component {
    componentDidMount() {
        this.props.navigateClick("Corporate Projects");
        enter();
    }

    render () {
        return (
            <div className="row row-cols-1 row-cols-md-3 overflow-y-scroll gap-5 py-5 px-2">
                <ProjectItem path="M448 32V43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v11c0 17.7-14.3 32-32 32s-32-14.3-32-32V245c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43V32c0-17.7 14.3-32 32-32s32 14.3 32 32zM576 256V245c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V32c0-17.7 14.3-32 32-32s32 14.3 32 32V43c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1v11c0 17.7-14.3 32-32 32s-32-14.3-32-32zM0 416c0-35.3 28.7-64 64-64H416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V416zm224 0v32H384V416H224zm288-64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32z"
                            title="Cassidy"
                            duration="Apr 2022 to Present"
                            type="E-commerce Website"
                            company="Merkle"
                            description="The website has over hundreds of thousands of users and is huge in Japan (and probably all over the world). They sell electronic cigarettes."
                            role="There are many teams in the project. I am part of the team that handles the api endpoints. Tracing, Documentation, Development, Logging, Integration is what I deal with on a daily basis."
                            techStack={["AWS Serverless Architecture", ".NET 6", "C#", "AWS Services (S3, DynamoDb, SQS, Lambda, API Gateway)"]} />
                <ProjectItem path="M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z"
                            title="Loke"
                            duration="December 2021 to Apr 2022"
                            type="Hospital Website"
                            company="CSAM Philippines Inc."
                            description="This website is being used in Sweden. It helps keep track of the patients records such as the medicines and dosages taken by the patients, recording the patients' overall health upon reception."
                            role="Build and maintain features in the system. Development is what I deal with on a daily basis."
                            techStack={["Angular", "C#", ".NET"]} />
                <ProjectItem path="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"
                            title="Halvor"
                            duration="Apr 2018 to Dec 2021"
                            type="Emergency Response Software"
                            company="CSAM Philippines Inc."
                            description="This software is used and bought by the government of Norway and is used to save lives."
                            role="Build and maintain features in the system. Documentation and Development is what I deal with on a daily basis."
                            techStack={[".NET 3.1", "C#", "WPF", "MSSQL"]} />
                <ProjectItem path="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                            title="Lynch"
                            duration="Sept 2015 to Apr 2018"
                            type="Internal Recruitment Website"
                            company="Accenture Philippines"
                            description="Since Accenture is so large that without this system in place, the people in-charge of fulfilling roles for the projects in our particular department would really have a hard time keeping track of who is available and who is in a project."
                            role="Build and maintain features in the system. I also got to lead a bit in this project. Development is what I deal with on a daily basis."
                            techStack={["Angularjs", "C#", ".NET", "ElasticSearch", "NServiceBus", "MSSQL", "AWS Bastion Servers"]} />
                <ProjectItem path="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                            title="Cornell"
                            duration="Apr 2015 to Sept 2018"
                            type="Internal Performance Rating Website"
                            company="Accenture Philippines"
                            description="This website is internally being used in Accenture to keep track of the employees' performance."
                            role="Build and maintain features in the system. Development of REST Apis is what I deal with on a daily basis."
                            techStack={[".NET Core", "C#", "MSSQL"]} />
                <ProjectItem path="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"
                            title="Cayden"
                            duration="Dec 2014 to Apr 2015"
                            type="ERP System"
                            company="NPAX Cebu Corporation"
                            description="This software is being used by manufacturing companies in Manila and Cebu to keep track of their Job Orders, Purchase Orders, and Purchase Receipts."
                            role="Build and maintain features in the system. Development and customer support is what I deal with on a daily basis."
                            techStack={["C#", ".NET", "EntityFramework (ORM)", "MSSQL"]} />
                <ProjectItem path="M64 0C46.3 0 32 14.3 32 32V96c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V378.4c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160H208V128h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H64zM96 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"
                            title="Lyonors"
                            duration="Aug 2012 to Dec 2014"
                            type="Payroll Software"
                            company="NPAX Cebu Corporation"
                            description="This software is being used by companies in Manila and Cebu to keep track of their employees' timekeeping, payroll and the employees' data itself. This is also being used by NPAX internally."
                            role="Build and maintain features in the system. Development and customer support is what I deal with on a daily basis."
                            techStack={["C#", ".NET", "Winforms", "MSSQL"]} />
                <ProjectItem path="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                            title="Gratianus"
                            duration="Oct 2011 - Aug 2012"
                            type="Underwater Surveillance Software"
                            company="Remote Technology Solutions"
                            description="This software is primarily built to record the events that are happening around the pipeline. This system integrates with a camera so the operator can see and record the events using the software."
                            role="Building the software. Development is what I deal with on a daily basis."
                            techStack={["C#", ".NET", "WPF", "MSSQL", "Telerik"]} />
            </div>
        )
    };
}

export default CorporateProject;