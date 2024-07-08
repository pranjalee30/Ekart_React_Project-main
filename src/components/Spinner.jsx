import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-bold text-green-600">Loading...</p>
      <div className='spinner'></div>
    </div>
  )
}

export default Spinner
