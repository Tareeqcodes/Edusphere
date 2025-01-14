import React from 'react'
import { useState } from 'react'
import { FaPlusCircle, FaListAlt } from 'react-icons/fa'
import UploadRoom from '../../app/Rental/UploadRoom'
import ViewRoom from '../../app/Rental/ViewRental'


const ViewContent = ( {onSelectSection }) => {
    return (
        <section className='items-center text-center justify-center'>
        <div className='flex gap-32 pt-5 pb-3 justify-center' >
        <button
                  className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-700 px-2 py-3 rounded"
                  onClick={() => onSelectSection('upload')}
                >
                  <FaPlusCircle className="text-xl" />
                  <span className="text-xs">Add</span>
                </button>
               <button
                         className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-700 px-2 py-3 rounded"
                         onClick={() => onSelectSection('rental')}
                       >
                         <FaListAlt className="text-xl" />
                         <span className="text-xs">My Rentals</span>
                       </button>
        </div>
    </section>
    )
}
const Content = ({ selectedSection }) => {
    return (
        <>
     { selectedSection === 'rental' && ( <ViewRoom /> )}

      {selectedSection === 'upload' && (
        <div className="min-w-full px-12">
          <UploadRoom />
        </div>
      )}
    </>
    )
}

const RentalDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('upload');
    
  return (
    <div >
     <ViewContent onSelectSection={setSelectedSection} />
     <Content selectedSection={selectedSection} />
    </div>
  )
}

export default RentalDashboard