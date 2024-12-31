import React from 'react';
import { Link } from 'react-router-dom';
import Border from '../components/Border.jsx';
import CommandLinkLogo from '../images/logos/commandlink.png';
import SamsungLogo from '../images/logos/samsung.png';
import IPSDILogo from '../images/logos/ipsdi.png';
import UTLogo from '../images/logos/utexas.png';
import GTLogo from '../images/logos/gatech.png';

function About() {
    return (
        <>
            <div className="bg-first h-fit w-full">
                <div className="p-8">
                    {/* This Portion is for About Me */}
                    <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">About Me</h1>
                    <div className='w-fit mt-12 p-4 md:mx-12 scp text-white bg-second break-word rounded-xl'>
                        <p>
                            I am a Master's in Computer Science candidate with skills in data analytics and web development, eager to contribute and expand expertise in Software Development or Data Engineering roles.
                            In my role as an Engineer in the Manufacturing Industry, I frequently encountered repetitive data collection and manual processes integral to day-to-day operations.
                            Recognizing the inefficiencies, I delved into automation by learning Visual Basic and Batch scripting.
                            This progression led me to develop advanced automated monitoring scripts for alerts using FastAPI, as well as dashboards for process monitoring with Streamlit.
                            Combining engineering fundamentals with a strong grasp of computer science, I stand out in analytical problem-solving and creating optimal software solutions.
                            As a knowledge seeker, i'm constantly interested in learning and adapting to new technologies.
                            I'm enthusiastic about leveraging my competencies for innovation in challenging technical domains.
                        </p>
                    </div>

                    <Border />

                    {/* This Portion is for Work Experience */}
                    <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Work Experience</h1>
                    <div className="w-full">
                        <div className="flex flex-col md:grid grid-cols-12 w-full">

                        {/* New Work Experience */}
                        <div className="flex md:contents">
                            <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                <div className="h-full w-12 flex items-center justify-center">
                                <div className="h-full w-1 bg-second pointer-events-none"></div>
                                </div>
                                <div className="w-12 h-12 absolute top-1/2 -mt-6 rounded-full bg-second shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                                <img
                                    src={CommandLinkLogo}
                                    alt="CommandLink Logo"
                                    className="absolute top-0 left-0 h-full w-full object-cover"
                                />
                                </div>
                            </div>

                            <div className="bg-second col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                <h3 className="font-semibold text-lg scp">Full-Stack Software Engineer</h3>
                                <a
                                className="scp"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://i-psdi.org/"
                                >
                                CommandLink
                                </a>
                                <p className="leading-tight text-left w-full scp mb-3">Dec 2023 - Current</p>

                                <p className="leading-tight text-left w-full scp">
                                    <em>
                                        Technologies: FastAPI, Swagger, Docker, Terraform, GitHub Actions,
                                        LucidChart, Azure Resources, RabbitMQ, Laravel, Wazuh
                                    </em>
                                    <br />
                                    <br />
                                    {/* Main list for each project */}
                                    <strong>-- KnowledgeBase --</strong>
                                    <ul className="list-disc pl-5 mb-2">
                                        <li>
                                        Architected and deployed a Python FastAPI microservice bridging
                                        React JS with Azure storage/services
                                        </li>
                                        <li>
                                        Deployed the Docker image on Azure Container Apps with KeyVault for
                                        secure secrets
                                        </li>
                                        <li>
                                        Implemented Azure Cognitive Search with a vector database for advanced text
                                        plus vector search
                                        </li>
                                    </ul>
                                    <strong>-- Third-Party Integrations --</strong>
                                    <ul className="list-disc pl-5 mb-2">
                                        <li>
                                        Developed a ticket sync system between our internal platform and
                                        external tools like ServiceNow &amp; Jira
                                        </li>
                                        <li>Leveraged RabbitMQ for inbound and outbound ticket updates</li>
                                        <li>
                                        Automated database operations to keep statuses and references
                                        consistently in sync
                                        </li>
                                    </ul>
                                    <strong>-- Security Dashboard --</strong>
                                    <ul className="list-disc pl-5">
                                        <li>
                                        Migrated a legacy security dashboard from PHP Yii to Laravel for
                                        improved performance and maintainability
                                        </li>
                                        <li>Optimized FastAPI endpoints for Wazuh OpenSearch</li>
                                        <li>
                                        Achieved a 90% reduction in endpoint response times by tuning
                                        queries and logic
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            </div>

                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-second pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 absolute top-1/2 -mt-6 rounded-full bg-second shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={IPSDILogo} alt="International Public Safety Data Institute Logo" className="absolute top-0 left-0 h-full w-full object-cover"/>
                                    </div>
                                </div>
                                <div className="bg-second col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Full-Stack Software Engineer (Part-Time)
                                    </h3>
                                    <a className="scp" target="_blank" href="https://i-psdi.org/">
                                        International Public Safety Data Institute
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        July 2023 - Current
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        <em>Technologies: TypeScript, AWS (Lambda, S3, ECS), Kubernetes, Grafana, RabbitMQ, Sentry</em><br/>
                                        <ul class='list-disc pl-5'>
                                            <li>Non-profit organization dedicated to data-driven research for improvement on operational performance</li>
                                            <li>Developed data pipelines to normalize incoming fire department dispatch data for integration</li>
                                            <li>Debugged and optimized normalizer performance for NFORS Analytics platform</li>
                                            <li>Create detailed documentation pertaining to system architecture, data flow, functionality, and modification processes</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 absolute top-1/2 -mt-6 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={SamsungLogo} alt="Samsung Austin Semiconductor Logo" className="absolute top-4 left-0 h-fit w-fit object-cover"/>
                                    </div>
                                </div>
                                <div className="bg-third col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Engineer II
                                    </h3>
                                    <a className="scp" target="_blank" href="https://www.samsung.com/us/sas/">
                                        Samsung Austin Semiconductor, LLC.
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        June 2018 - Dec 2023
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        <em><strong>Process Engineer - PETEOS Films</strong></em>  :  Aug 2020 - Current<br />
                                        <em>Technologies:  Big Data, FastAPI, Python, Streamlit, VBA</em>
                                        <ul class='list-disc pl-5'>
                                            <li>Co-established Data Solutions subteam in department - tailored to automation of mundane tasks</li>
                                            <li>Developed FastAPI Jarvis functions to streamline floor technicians job duties</li>
                                            <li>Built Big Data cloud dashboards for efficient process monitoring, reducing TAT for decision making</li>
                                            <li>Reduced cost material usage by $400,000 per year using residual gas analysis of process cleans</li>
                                            <li>Increased wafers per hour throughput of process fleet with optimization of process deposition recipes</li>
                                            <li>Ensured rapid tool deployment for fast-expansion production ramps to meet customer demands</li>
                                            <li>Troubleshooting process trend shifts and equipment particle / sensor alarms for root cause analysis</li>
                                            <li>Mentoring for new process engineers and college interns</li>
                                        </ul>                                     
                                    </p>
                                    <br/>
                                    <p className="leading-tight text-left w-full scp">
                                        <em><strong>Shift Engineer - Lead</strong></em>  :  June 2018 - Aug 2020<br />
                                        <em>Technologies:  Batch Scripting, VBA</em>
                                        <ul class='list-disc pl-5'>
                                            <li>Developed VBA macro scripts to save 2.5 man-hours per day spent on repetitive, daily operations</li>
                                            <li>Created a batch file to quickly open necessary applications, webpages, and SOPs for shift teams</li>
                                            <li>Trained new hires on system proficiency and critical thinking for around the clock sustaining needs</li>
                                        </ul>                                     
                                    </p>
                                </div>
                            </div>


                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 absolute top-1/2 -mt-6 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={UTLogo} alt="University of Texas at Austin Logo" className="absolute top-1 left-0 h-full w-full object-cover"/>
                                    </div>
                                </div>
                                <div className="bg-third col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Engineering Tutor
                                    </h3>
                                    <a className="scp" target="_blank" href="https://www.utexas.edu/">
                                        University of Texas at Austin
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        Sep 2016 - May 2018
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        Provided aid to students in the following courses: <br />
                                        <ul class='list-disc pl-5'>
                                            <li>Dynamics</li>
                                            <li>Mechanics of Solids</li>
                                            <li>Statics</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>



                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 absolute top-1/2 -mt-6 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={SamsungLogo} alt="Samsung Austin Semiconductor Logo" className="absolute top-4 left-0 h-fit w-fit object-cover"/>
                                    </div>
                                </div>
                                <div className="bg-third col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Internship - Engineering
                                    </h3>
                                    <a className="scp" target="_blank" href="https://www.samsung.com/us/sas/">
                                        Samsung Austin Semiconductor, LLC.
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        Summers of 2016 & 2017
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        <ul class='list-disc pl-5'>
                                            <li>Led and managed contractors for fume hood installation project for safety improvement</li>
                                            <li>Improved equipment labeling with chemical compatibility verification to reduce deterioration</li>
                                            <li>Developed and analyzed incompatible sets of materials in pressure transducers to identify and prevent high-impact leaks and faults</li>
                                            <li>Standardized P&IDs for ease of use and physically verified all components included in diagrams</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Border />

                    {/* This Portion is for Education */}
                    <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Education</h1>
                    <div className="w-full">
                        <div className="flex flex-col md:grid grid-cols-12 w-full">

                            {/* New Education */}
                            <div className="flex md:contents">
                                <div className="col-start-11 col-end-13 md:mx-auto row-start-1 row-end-2 mr-6">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 relative -top-1/2 -mt-3 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={GTLogo} alt="Georgia Institute of Technology Logo" className="absolute top-2 left-2 h-8 w-8"/>
                                    </div>
                                </div>
                                <div className="bg-third col-start-2 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Master's of Science in Computer Science
                                    </h3>
                                    <a className="scp" target="_blank" href="https://omscs.gatech.edu/home">
                                        Georgia Institute of Technology
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        Jan 2022 - Dec 2024
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        GPA: 3.80 / 4.00<br />
                                        Machine Learning Specialization<br /><br />
                                        <em><strong>Coursework</strong></em>  :  <em>Click on a Course to View Coursework Project</em><br />
                                        <Link to={`/projects/card2`}>Data & Visual Analytics</Link><br />
                                        <Link to={`/projects/card3`}>Database System Concepts & Design</Link><br />
                                        <Link to={`/projects/card4`}>Computer Vision</Link><br />
                                        Artificial Intelligence, Ethics, & Society<br />
                                        <Link to={`/projects/card5`}>Game Artificial Intelligence</Link><br />
                                        Machine Learning<br />
                                        Machine Learning for Trading<br />
                                        Software Development Process<br />
                                        Natural Language Processing<br />
                                        Intro to Graduate Algorithms<br />
                                    </p>
                                </div>
                            </div>

                            {/* New Education */}
                            <div className="flex md:contents">
                                <div className="col-start-11 col-end-13 md:mx-auto row-start-2 row-end-3 mr-6">
                                    <div className="h-full w-12 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-12 h-12 relative -top-1/2 -mt-3 rounded-full bg-third shadow">
                                        <i className="fas fa-check-circle text-white"></i>
                                        <img src={UTLogo} alt="University of Texas at Austin Logo" className="absolute top-1 left-0 h-full w-full object-cover"/>
                                    </div>
                                </div>
                                <div className="bg-third col-start-2 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Bachelor's in Mechanical Engineering
                                    </h3>
                                    <a className="scp" target="_blank" href="https://www.me.utexas.edu/">
                                        University of Texas at Austin
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        Aug 2015 - June 2018
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        GPA:  3.83 / 4.00<br />
                                        Business Foundations Certificate Program
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About