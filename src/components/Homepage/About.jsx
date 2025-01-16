import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col text-black font-poppins items-center justify-center py-10'>  
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 items-center text-center justify-center">  
        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center">  
          <h3 className="text-xl font-medium text-white font-poppins">For Instructors</h3>
          <button className=' border-blue-900 border-2 font-poppins text-black font-normal rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>

        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center"> 

          <h3 className="text-xl text-white font-medium font-poppins">For Students</h3>
          <button className=' bg-black text-white font-normal  rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>
      </div>
    </div>
  )
}

export default About
