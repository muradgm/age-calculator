import React from 'react'

const DisplayAge
 = ({age}) => {
   const { days, months, years } = age;
   


  return (
    <div className="results-container">
      <div className="result years">
      <p className='text one'>{years || '--'}</p>
        <p className='text two'>{years === 1 ? 'year' : 'years'}</p>
      </div>
      <div className="result months">
      <p className='text one'>{months || '--'}</p>
        <p className='text two'>{months === 1 ? 'month' : 'months'}</p>
      </div>
      <div className="result days">
      <p className='text one'>{days || '--'}</p>
        <p className='text two'>{days === 1 ? 'day' : 'days'}</p>
      </div>
    </div>
  )
}

export default DisplayAge
