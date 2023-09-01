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
      <div className="bg-gray-100 h-screen">

        {/* Grid of Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md cursor-pointer p-6" onClick={() => openModal('card1')}>
              <h2 className="text-lg font-bold">Card 1</h2>
              <p className="text-gray-600 mt-2">Brief detail</p>
            </div>

            {/* ... Similarly add more cards as needed */}

          </div>
        </div>

        {/* Modal for Card 1 */}
        {activeModal === 'card1' && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 w-10/12 md:w-1/2" onClick={e => e.stopPropagation()}>
              <h2 className="text-2xl font-bold">Card 1 Details</h2>
              <p className="text-gray-700 mt-4">More details about card 1.</p>
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