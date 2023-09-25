import React from 'react'
import { useState } from 'react'
import CarouselImages from './CarouselImages.jsx'
import CarouselVideos from './CarouselVideos.jsx'

import clearviewSlide1 from '../images/ClearView_Slide1.png'
import clearviewSlide2 from '../images/ClearView_Slide2.png'
import clearviewSlide3 from '../images/ClearView_Slide3.png'
import clearviewSlide4 from '../images/ClearView_Slide4.png'

import DVASlide0 from '../images/DVA_Card.png'
import DVASlide1 from '../images/DVA_Slide1.png'
import DVASlide2 from '../images/DVA_Slide2.png'

import GameAI1 from '../images/GameAI_Dodgeball.mp4'
import GameAI2 from '../images/GameAI_RaceTrack.mp4'

function Projects() {

  // Create a React hook, variable activeModal, modified by setActiveModal, set to default null
  const [activeModal, setActiveModal] = useState(null);

  // Call function setActiveModal to update activeModal
  const openModal = (cardId) => {
    setActiveModal(cardId);
  }
  const closeModal = (cardId) => {
    setActiveModal(null);
  }

  const ClearviewImages = [clearviewSlide1, clearviewSlide2, clearviewSlide3, clearviewSlide4];
  const DVAImages = [DVASlide0, DVASlide1, DVASlide2];
  const GameAI = [GameAI1, GameAI2]

  return (
    <>
      <div className="bg-first h-fit">

        {/* Introduction for Projects Page */}
        <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Projects</h1>
        <div className='w-full mt-8 px-20 scp text-white bg-first break-word grid place-items-center text-center'>
          <p>Below are cards displaying coding my projects / assignments. Please click on a card to view additional information.</p>
        </div>

        {/* Grid of Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card1')}>
              {/* Image Section */}
              <div className="grid-row py-auto flex justify-center align-center pt-6">
                <img className='h-40 w-auto my-auto invert' src={require("../images/ClearView_Card.png")} alt='ClearView Vision Logo'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col">
                <h2 className="text-lg font-bold text-white mb-2">ClearView Vision</h2>
                <p className="mt-2 text-white scp">
                  Freelance Project. <br/>
                  Given the task to develop a website for a new business owner in Austin, TX.
                  Gathered a team including another Developer and a UX/UI Designer to design, develop, and deploy the website at https://clearviewatx.com.
                </p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card2')}>
              {/* Image Section */}
              <div className="grid-row py-auto flex justify-center align-center pt-6">
                <img className='h-40 w-auto my-auto' src={require("../images/DVA_Card.png")} alt='Data & Visual Analytics Main Page'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col">
                <h2 className="text-lg font-bold text-white mb-2">Data & Visual Analytics</h2>
                <p className="mt-2 text-white scp">
                  OMSCS GATech Coursework Project. <br/>
                  My team of 5 created a dashboard analyzing different aspects of National Fire Incident Reporting System (NFIRS) dataset.
                  Goal was to explore any large dataset and generate useful visualizations.
                </p>
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card3')}>
              {/* Image Section */}
              <div className="grid-row py-auto flex justify-center align-center pt-6">
                <img className='h-40 w-auto my-auto' src={require("../images/DBS_Card.png")} alt='Database Systems Card Image'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col">
                <h2 className="text-lg font-bold text-white mb-2">Database System Concepts & Design</h2>
                <p className="mt-2 text-white scp">
                  OMSCS GATech Coursework Project. <br/>
                  Given customer requirements to develop an application for trading board games.
                  Specific customer constraints such as functions to search zip codes, usernames, etc.
                </p>
              </div>
            </div>


            {/* Card 4 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card4')}>
              {/* Image Section */}
              <div className="grid-row py-auto flex justify-center align-center pt-6">
                <img className='h-40 w-auto my-auto' src={require("../images/CV_Card.png")} alt='Computer Vision Card Image'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col">
                <h2 className="text-lg font-bold text-white mb-2">Computer Vision</h2>
                <p className="mt-2 text-white scp">
                  OMSCS GATech Coursework Project. <br/>
                  From the final project choices, I chose to learn and implement Stereo Correspondence.
                  It involves using algorithms to determine depth in images.
                </p>
              </div>
            </div>


            {/* Card 5 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card5')}>
              {/* Image Section */}
              <div className="grid-row py-auto flex justify-center align-center pt-6">
                <img className='h-40 w-auto my-auto' src={require("../images/GameAI_Card.png")} alt='Game Artificial Intelligence Card Image'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col">
                <h2 className="text-lg font-bold text-white mb-2">Game Artificial Intelligence</h2>
                <p className="mt-2 text-white scp">
                  OMSCS GATech Coursework Homework. <br/>
                  In this course focused on Unity development, two homework assignment / projects particularly entrigued me.
                  Development of behavior for minions in a dodgeball game and driving control mechanics for an autonomous vehicle navigating a virtual track.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Modal for Card 1 */}
        {activeModal === 'card1' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4 h-fit" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-center">ClearView Vision</h2>
              <div className="pt-6 flex items-center mx-auto lg:h-96 lg:w-[784px] h-auto w-auto"><CarouselImages images={ClearviewImages}></CarouselImages></div>
              <p className="text-gray-700 mt-4 scp">
                Technologies: Tailwind, React, JSX, HTML, CSS<br/>
                Deployed at <a className="text-second hover:underline" href='https://clearviewatx.com' target="_blank">https://clearviewatx.com</a>.
                The project began with myself and another developer searching various different optometrist sites to generate ideas and note down interesting sections / layouts we saw.
                A basic wireframe was created through excalidraw to jot down the basic blueprint.
                While working on initial drafts of the website which were scrapped, we noticed the need for a UX / UI Designer due to our non-optimal theme selection and sectional layout.
                Through contacts, we found a UX / UI Designer looking to build on their portfolio and asked for her to join the team.
                With a proper Figma drawn out, the whole website was revamped with full functionality and deployed through github pages and the purchased GoDaddy domain.
              </p>
              {/* <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button> */}
            </div>
          </div>
        )}


        {/* Modal for Card 2 */}
        {activeModal === 'card2' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4 h-fit" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-center">Data & Visual Analytics</h2>
              <div className="pt-6 flex items-center mx-auto lg:h-96 lg:w-[784px] h-auto w-auto"><CarouselImages images={DVAImages}></CarouselImages></div>
              <p className="text-gray-700 mt-4 scp">
                Technologies: Flask, Bootstrap, Python<br/>
                Previously deployed through Heroku at https://gatech-dva.herokuapp.com/.
                The dashboard is not live anymore after Heroku revoked free project deployments, but is easily accessable locally.
                Project scope for this Georgia Tech course was to explore a large dataset to develop interesting findings and visualizations.
                My team of 5 students, including myself, worked with National Fire Incident Reporting System data to study different aspects of fires.
                Python was used for the backend with packages like scikit-learn, ArcGIS, matplotlib to generate regression models, heatmaps, waterfall graphs, and choropleths depicting our dataset.
                With Bootstrap and Flask, we were able to create a dashboard with tabs to showcase different visualization perspectives of the data.
              </p>
              {/* <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button> */}
            </div>
          </div>
        )}


        {/* Modal for Card 3 */}
        {activeModal === 'card3' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4 h-fit" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-center">Database System Concepts & Design</h2>
              <div className="pt-6 flex items-center mx-auto lg:h-96 lg:w-[784px] h-auto w-auto">
                <video controls className="relative mx-auto lg:h-96 h-auto w-auto">
                  <source src={require("../images/DBS.mp4")} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-700 mt-4 scp">
                Technologies: C#, SQL, SQL Server Management Studio, Azure<br/>
                Project scope was to design and build an application from the ground up including database architecture.
                Customer specifications were given to us for certain functionalities, restrictions, etc.
                Created an Extended Entity Relationship (EER) to understand relationships between data tables, primary keys, foreign keys, and cardinality ratios.
                Then an Instance Focused Diagram (IFD) was developed to better understand functionality and database transactions.
                With all the schemas built and hosted through Azure SQL Database, our team created an application through C# Windows Forms to showcase our final product.
              </p>
              {/* <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button> */}
            </div>
          </div>
        )}


        {/* Modal for Card 4 */}
        {activeModal === 'card4' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4 h-fit" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-center">Computer Vision</h2>
              <div className="pt-6 flex items-center mx-auto lg:h-96 lg:w-[784px] h-auto w-auto">
                <iframe src="/CS6474_FinalReport.pdf" class="w-full h-full border-none"></iframe>
              </div>
              <p className="text-gray-700 mt-4 scp">
                Technologies: Python, OpenCV, LaTeX<br/>
                For this final project, students were given topic options to do in depth research, implement, and discuss the results and outputs.
                My chosen topic, Stereo Correspondence, revolves around the concept that computers are unable to recognize depth perception with singular images that solely contain information on pixel intensity and color.
                With stereo images (two images on a rectified planar), we can algorithmically produce a disparity map (image depth).
                After research on state of the art methods, I utilized a combination of hamming distance, census transform, and semi-global matching to create these disparity maps.
                My final project report is downloadable <a className="text-second hover:underline" href={require("../images/CS6474_FinalReport.pdf")} download target="_blank" rel="noopener noreferrer">here</a> explaining methodology, outputs, results, and insights to the process.
              </p>
              {/* <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button> */}
            </div>
          </div>
        )}


        {/* Modal for Card 5 */}
        {activeModal === 'card5' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4 h-fit" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-center">Game Artificial Intelligence</h2>
              <div className="pt-6 flex items-center mx-auto lg:h-96 lg:w-[680px] h-auto w-auto"><CarouselVideos videos={GameAI}></CarouselVideos></div>
              <p className="text-gray-700 mt-4 scp">
                Technologies: C#, Unity<br/>
                1. Development of advanced Artificial Intelligence algorithms that guide the behavior for minions in a Dodgeball game.
                Utilized Finite State Machines to create states and transitions for optimal minion behavior.
                Generated strategy to prioritize saving teammates and optimizing ball usage.
                Placed in top 8 of ~140 participating graduate students in an optional tournament.
                My opponent's control of the balls on the field and dodging transitions were much better and was later crowned the champion.
                2. Implementation of Artificial Intelligence driven control mechanics for an autonomous car navigating a virtual track.
                Created Fuzzy Logic for a vehicle to make decisions regarding speed, acceleration, and steering using environmental variables.
              </p>
              {/* <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button> */}
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Projects