import React from 'react'
import { useState } from 'react'

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

  return (
    <>
      <div className="bg-first h-screen">

        {/* Grid of Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer grid grid-cols-1 grid-rows-2" onClick={() => openModal('card1')}>
              {/* Image Section */}
              <div className="grid-row flex items-center justify-center p-6">
                <img className='object-contain h-full w-auto invert' src={require("../images/ClearView_Card.png")} alt='ClearView Vision Logo'></img>
              </div>
              {/* Description Section */}
              <div className="grid-row p-6 flex flex-col justify-center">
                <h2 className="text-lg font-bold text-white mb-2">ClearView Vision</h2>
                <p className="text-white">
                  Freelance project to develop a website for a new business owner.
                  Gathered a team including another Developer and a UX/UI Designer to design, develop, and deploy the website.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-second rounded-lg shadow-md cursor-pointer p-6" onClick={() => openModal('card2')}>
              <div className="flex items-center justify-center h-45 mb-6">
                <img className='h-full w-auto' src={require("../images/DVA_Card.png")} alt='ClearView Vision Logo'></img>
              </div>
              <h2 className="text-lg font-bold text-white">Data & Visual Analytics</h2>
              <p className="mt-2 text-white">
                OMSCS Georgia Tech Coursework Project.
                My team of 5 created a dashboard analyzing different aspects of National Fire Incident Reporting System (NFIRS) dataset.
                Goal was to explore any large dataset and generate useful visualizations.
              </p>
            </div>

            {/* ... Similarly add more cards as needed */}

          </div>
        </div>

        {/* Modal for Card 1 */}
        {activeModal === 'card1' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold">ClearView Vision</h2>
              <p className="text-gray-700 mt-4">
                Website for ClearView Vision a new business that opened in Austin, TX.
                The site contains information regarding location, contact, services, insurances, and scheduling paired with a third party landing page.
              </p>
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button>
            </div>
          </div>
        )}

        {/* Modal for Card 2 */}
        {activeModal === 'card2' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-3/4" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold">ClearView Vision</h2>
              <p className="text-gray-700 mt-4">
                Website for ClearView Vision a new business that opened in Austin, TX.
                The site contains information regarding location, contact, services, insurances, and scheduling paired with a third party landing page.
              </p>
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Close</button>
            </div>
          </div>
        )}

        {/* ... Similarly add modals for other cards as needed */}

      </div>
    </>
  )
}

export default Projects