import React from 'react'
import Border from '../components/Border.jsx'

function About() {
    return (
        <>
            <div className="bg-first h-fit w-full">
                <div className="p-8">
                    {/* This Portion is for About Me */}
                    <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">About Me</h1>
                    <div className='w-fit mt-12 p-4 md:mx-12 scp text-white bg-second break-word rounded-xl'>
                        <p>
                            During my career in the Manufacturing Industry as an Engineer, I noticed a plethora of repetitive data collection and actions being done to fulfill daily job duties.
                            This sprouted an interest in automation of tasks and led me into learning VBA / CMD scripts to start.
                            From there, I moved onto developing automated monitoring scripts to email / message alerts and generating dashboards for ease of process monitoring.
                            Now, halfway through a Masters of Computer Science, I am ready for a transition into Full Stack Development and/or Data Engineering.
                            With a unique blend of engineering principles and computer science knowledge, I excel at analytical problem-solving and developing efficient software solutions.
                            An intrigued, continuous learner, I am always curious about learning the latest technological trends.
                            Eager to apply these skills, I look forward to driving technical innovation and process improvements in challenging environments.
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
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-second pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-second shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-second col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Part-Time Full-Stack Developer
                                    </h3>
                                    <a className="scp" target="_blank" href="https://i-psdi.org/">
                                        International Public Safety Data Institute
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        July 2023 - Current
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        Develop, maintain, and optimize the NFORS Analytics platform<br/>
                                        Collaborate with cross-functional teams to implement and enhance analytics solutions<br/>
                                        Create detailed documentation pertaining to system architecture, data flow, functionality, and modification processes<br/>
                                        Address and troubleshoot issues without impacting live product<br/>
                                    </p>
                                </div>
                            </div>

                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-second pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-second shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-second col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        Engineer II
                                    </h3>
                                    <a className="scp" target="_blank" href="https://www.samsung.com/us/sas/">
                                        Samsung Austin Semiconductor, LLC.
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        June 2018 - Current
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        <em><strong>Process Engineer - Plasma Enhanced TEOS Films</strong></em>  :  Aug 2020 - Current<br />
                                        <ul class='list-disc pl-5'>
                                            <li>Co-ownership of data solutions in the department - supporting automation requests and representative for fab-wide applications</li>
                                            <li>Developed big data cloud dashboard using Python and Streamlit to aid department on process monitoring visualization</li>
                                            <br/>
                                            <li>Improved process marginality through standardization and recipe modifications across owned process groups</li>
                                            <li>Increased capacity throughput by reduction of process step times</li>
                                            <li>Reduced of raw materials usage in process for cost savings</li>
                                            <li>Troubleshooting process trend shifts and equipment particle / sensor alarms to determine root cause and address</li>
                                            <li>Mentoring for new process engineers and college interns</li>
                                        </ul>                                     
                                    </p>
                                    <br/>
                                    <p className="leading-tight text-left w-full scp">
                                        <em><strong>Shift Engineer - Lead</strong></em>  :  June 2018 - Aug 2020<br />
                                        <ul class='list-disc pl-5'>
                                            <li>Developed VBA macro scripts to save 2.5 man-hours per day spent on repetitive, daily operations</li>
                                            <li>Creatied a batch file to quickly open necessary applications, webpages, and SOPs for shift teams</li>
                                            <li>Trained new hires on system proficiency and critical thinking for around the clock sustaining needs</li>
                                        </ul>                                     
                                    </p>
                                </div>
                            </div>


                            {/* New Work Experience */}
                            <div className="flex md:contents">
                                <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
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
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-third shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
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
                                        Led and managed contractors for fume hood installation project for safety improvement<br />
                                        Improved equipment labeling with chemical compatibility verification to reduce deterioration<br />
                                        Developed and analyzed incompatible sets of materials in pressure transducers to identify and prevent high-impact leaks and faults<br />
                                        Standardized P&IDs for ease of use and physically verified all components included in diagrams
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
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-second pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 relative -top-1/2 -mt-3 rounded-full bg-second shadow text-center">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-second col-start-2 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-white">
                                    <h3 className="font-semibold text-lg scp">
                                        (Online) Master's in Computer Science
                                    </h3>
                                    <a className="scp" target="_blank" href="https://omscs.gatech.edu/home">
                                        Georgia Institute of Technology
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        Jan 2022 - Current (50% Completion)
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        GPA: 4.00 / 4.00<br />
                                        Machine Learning Specialization<br /><br />
                                        <em><strong>Coursework</strong></em>  :  <em>Click on Course to view Final Projects' Demos</em><br />
                                        [A] Data & Visual Analytics<br />
                                        [A] Database System Concepts & Design<br />
                                        [A] Computer Vision<br />
                                        [A] Artificial Intelligence, Ethics, & Society<br />
                                        [A] Game Artificial Intelligence<br />
                                        [Current] Machine Learning<br />
                                    </p>
                                </div>
                            </div>

                            {/* New Education */}
                            <div className="flex md:contents">
                                <div className="col-start-11 col-end-13 md:mx-auto row-start-2 row-end-3 mr-6">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 relative -top-1/2 -mt-3 rounded-full bg-third shadow">
                                        <i className="fas fa-check-circle text-white"></i>
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