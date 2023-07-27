import React from 'react'

function About() {
    return (
        <>
            <div className="bg-first h-fit w-full">
                <div className="p-8">
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
                                    <a className="scp" href="https://i-psdi.org/">
                                        International Public Safety Data Institute
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        July 2023 - Current
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        Focused on data pipeline for FireCARES, NFORS Analytics, and NFORS Exposure projects.<br/>
                                        Implementation of features regarding AWS.
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
                                    <a className="scp" href="https://i-psdi.org/">
                                        Samsung Austin Semiconductor, LLC.
                                    </a>
                                    <p className="leading-tight text-left w-full scp mb-3">
                                        June 2018 - Current
                                    </p>
                                    <p className="leading-tight text-left w-full scp">
                                        <em>Process Engineer - Plasma Enhanced TEOS Films</em><br/>
                                        Developed big data cloud dashboard using Python and Streamlit to aid department on visualization of process monitoring<br/>
                                        Generated automated analysis sent by email and messenger notifications on time-sensitive events / daily reporting for engineering visibility and review<br/>

                                        Improved process marginality through standardization and recipe modifications across owned process groups<br/>
                                        Increased capacity throughput by reduction of process step times<br/>
                                        Reduction of raw materials usage in process for cost savings<br/>
                                        
                                        Troubleshooting process trend shifts and equipment particle / sensor alarms to determine root cause and address<br/>
                                        Mentorship for new process engineers and college interns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* This Portion is for Education */}
                    <h1 className="text-4xl text-center font-semibold mb-6 mt-6 text-fourth roboto">Education</h1>
                    <div className="w-full">
                        <div className="flex flex-col md:grid grid-cols-12 w-full">

                            {/* New Education */}
                            <div className="flex md:contents">
                                {/* <div className="col-start-11 col-end-13 md:mx-auto relative"> */}
                                <div className="col-start-11 col-end-13 md:mx-auto row-start-1 row-end-2">
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
                                    <a className="scp" href="https://i-psdi.org/">
                                        Georgia Institute of Technology
                                    </a>
                                    <p className="leading-tight text-justify w-full scp mb-3">
                                        Jan 2022 - Current (50% Completion)
                                    </p>
                                    <p className="leading-tight text-justify w-full scp">
                                        GPA: 4.00 / 4.00<br/>
                                        Machine Learning Specialization<br/><br/>
                                        <em>Coursework</em><br/>
                                        [A] Data & Visual Analytics<br/>
                                        [A] Database System Concepts & Design<br/>
                                        [A] Computer Vision<br/>
                                        [A] Artificial Intelligence, Ethics, & Society<br/>
                                        [Current] Game Artificial Intelligence<br/>
                                    </p>
                                </div>
                            </div>

                            {/* New Education */}
                            <div className="flex md:contents">
                            <div className="col-start-11 col-end-13 md:mx-auto row-start-2 row-end-3">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-third pointer-events-none"></div>
                                    </div>
                                    <div className="w-6 h-6 relative -top-1/2 -mt-3 rounded-full bg-third shadow">
                                        <i className="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div className="bg-third col-start-2 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-fourth">
                                    <h3 className="font-semibold text-lg scp">
                                        Bachelor's in Mechanical Engineering
                                    </h3>
                                    <a className="scp" href="https://i-psdi.org/">
                                        University of Texas at Austin
                                    </a>
                                    <p className="leading-tight text-justify w-full scp mb-3">
                                        Aug 2015 - June 2018
                                    </p>
                                    <p className="leading-tight text-justify w-full scp">
                                        GPA:  3.83 / 4.00<br/>
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