import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col text-white font-poppins items-center justify-center py-10'>  
      <h2 className="  font-semibold text-xl mb-5 font-roboto">
        What's Edusphere
      </h2>
      <p className=" mb-8 font-poppins word-spacing text-justify ">EduSphere is a Web3-powered platform that redefines how students interact with their university environment. From easy access to PDFs and hostel bookings to earning Archway tokens for exclusive benefits, EduSphere makes academic and campus life more connected and rewarding.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 items-center text-center justify-center">  
        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center">  
          <h3 className="text-xl font-medium text-black font-poppins">For Instructors</h3>
          <button className=' border-blue-900 border-2 font-poppins text-black font-normal rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>

        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center"> 

          <h3 className="text-xl text-black font-medium font-poppins">For Students</h3>
          <button className=' bg-black text-white font-normal  rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>
      </div>
    </div>
  )
}

export default About
