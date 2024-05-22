import React from 'react'

const CalculateAgeBtn = ({ handleOnClick }) => {


  return (
    <div className="btn-container">
      <span className="line"></span>
      <div className="calc-btn" onClick={handleOnClick}>
        <div className="circle">
          <span className="arrow"></span>
          <span className="arrow-line"></span>
        </div>
      </div>

    </div>
  )
}

export default CalculateAgeBtn