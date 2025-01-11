import React from 'react'

const Heading = ({title}) => {
  return (
    <section>
      <h1 className='text-2xl my-3 font-poppins font-semibold tracking-tight text-orange-600'>
        {title}
      </h1>
    </section>
  )
}

export default Heading