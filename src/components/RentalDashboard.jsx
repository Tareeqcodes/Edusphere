import React from 'react'
import { useState } from 'react'
import { FaPlusCircle, FaListAlt } from 'react-icons/fa'
import UploadRoom from '../../app/Rental/UploadRoom'
import ViewRoom from '../../app/Rental/ViewRental'


const ViewContent = ( {onSelectSection }) => {
    return (
        <section className='flex  flex-col items-center text-center justify-center'>
        <div className='flex gap-5 justify-between pt-5' >
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
        <div className="overflow-y-auto md:px-52">
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