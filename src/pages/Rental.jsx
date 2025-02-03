import React from 'react'
import Rent from '../../app/Rental/Rent'
import Heading from '../components/Heading'

const Rental = () => {

  return (
    <section className=' min-h-screen flex flex-col items-center text-center justify-center'>
    <div className='mt-32'>
      <Heading title='Available Property For Rent' />
      <div className=' flex flex-col w-full my-16 pb-16 md:max-w-[40rem] lg:min-w-[65rem] lg:gap-2  lg:flex-row px-7 text-center justify-center '>
      <Rent />
      </div>
    </div>
    </section>
  )
}

export default Rental