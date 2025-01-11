import React from 'react'

const FeatureCards = () => {
  return (
    <section className='items-center  text-white justify-center text-center'>
        <h2 className='font-semibold text-2xl mb-5'> Features</h2>
         
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto text-center gap-3 items-center justify-center">

    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">  
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Access Online PDFs</h2>
      <p className='font-poppins text-justify word-spacing tracking-tighter'>Download lecture notes, research papers, and syllabi effortlessly with a user-friendly interface.</p>
    </div> 

    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Tools for Teachers and Learners</h2>
      <p className='font-poppins word-spacing text-justify'>Browse and book campus hostels with ease. Compare amenities, prices, and secure your accommodation in just a few clicks.</p>
    </div>

    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Rental Services</h2>
      <p className='font-poppins text-justify word-spacing'>Find and rent hostels and homes near your campus.</p>
    </div>

    <div className="py-5 px-4 text-justify rounded shadow-xl border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Marketplace</h2>
      <p className='font-poppins text-justify word-spacing'>Order goods online from trusted sellers within your campus community.</p>
    </div>

    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Campus News</h2>
      <p className='font-poppins text-justify word-spacing'>Stay informed with the latest updates, events, and announcements from your university.</p>
    </div>

    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Bukstore</h2>
      <p className='font-poppins text-justify word-spacing'>Use Archway tokens to buy digital goods, subscribe to premium services, or gain access to workshops and events.</p>
    </div>
    <div className="py-5 px-4 text-justify rounded shadow-xl  border-t-2 border-blue-400">
      <h2 className="text-xl  font-medium font-poppins pb-5 text-white">Tokens system</h2>
      <p className='font-poppins text-justify word-spacing'>Engage with EduSphere and earn Archway tokens to unlock discounts, exclusive content, and more.</p>
    </div>
  </div>
 
  </section>
  )
}

export default FeatureCards