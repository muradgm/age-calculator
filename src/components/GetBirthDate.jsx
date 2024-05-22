import React, { useState } from 'react'
import  './App.scss'

const GetBirthDate = ({birthDate, setBirthDate, error, setError}) => {
  const { day, month, year } = birthDate;

  const [inputName, setInputName] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;

    let errorMessage = '';

    if (name === 'month' && (parseInt(value) < 1 || parseInt(value) > 12)) {
      errorMessage = 'Must be a valid Month'
      setInputName(name)
    } else if (name === 'day') {
      const daysInMonth = new Date(year, month, 0).getDate();
      if (parseInt(value) < 1 || parseInt(value) > daysInMonth) {
        errorMessage = 'Must be a vlid Day'
        setInputName(name)
      }
    } else if (name === 'year') {
     if(value.length === 4 && (parseInt(value) < 1900 || parseInt(value) > new Date().getFullYear())) {
      errorMessage='Must be in the past'
        setInputName(name)
      }
      
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    
    setBirthDate((prevBirthDate) =>
    ({
      ...prevBirthDate,
      [name]: parseInt(value, 10)
    }))
  }

  const handleFocus = (e) => {
    const { name } = e.target;
    setBirthDate((prevBirthDate) => ({
    ...prevBirthDate,
    [name]: '',
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
    e.target.placeholder=''
    
  };


  return (
    <div className='date-wrapper'>
      <div className={`date day ${error.day ? 'error' : ''}`}>
        <p>day</p>
        <input
          type="number"
          value={day || ''}
          className='date-input'
          name="day"
          id="day"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={(e) => e.target.placeholder = 'DD'}
          placeholder='DD'
        />
        <div className="error-message-container">
          <span className={`error-message ${error.day ? 'visible' : ''}`}>
            {error.day}
          </span>
        </div>
      </div>
      <div className={`date month ${error.month ? 'error' : ''}`}>
        <p>month</p>
        <input
          type="number"
          value={month || ''}
          className='date-input'
          name="month"
          id="month"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={(e) => e.target.placeholder = 'MM'}
          placeholder='MM'
        />
        <div className="error-message-container">
          <span className={`error-message ${error.month ? 'visible' : ''}`}>
            {error.month}
          </span>
        </div>
      </div>
      <div className={`date year ${error.year ? 'error' : ''}`}>
        <p>year</p>
        <input
          type="number"
          value={year || ''}
          className='date-input'
          name="year"
          id="year"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={(e) => e.target.placeholder = 'YYYY'}
          placeholder='YYYY'
        />
        <div className="error-message-container">
          <span className={`error-message ${error.year ? 'visible' : ''}`}>
            {error.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default GetBirthDate;