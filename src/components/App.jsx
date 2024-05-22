import GetBirthDate from "./GetBirthDate";
import './App.scss'
import CalculateAgeBtn from "./CalculateAgeBtn";
import DisplayAge from "./DisplayAge";
import { useEffect, useState } from "react";

export default function App() {

    const [birthDate, setBirthDate] = useState({
    day: 0,
    month: 0,
    year: 0
    });
  
  const [age, setAge] = useState({
    days: 0,
    months: 0,
    years: 0
  })

  const [error, setError] = useState({
    day: '',
    month: '',
    year:''
  });

    const calculateAge = () => {
      const { day, month, year } = birthDate;
      const bDate = new Date(year, month - 1, day);
      const currentDate = new Date();
      
      //validation
      if (!day || !month || !year || day === 0 || month === 0 || year === 0) {
        return {years:0, months:0, days:0}
      }

      let years = currentDate.getFullYear() - bDate.getFullYear();
      let months = currentDate.getMonth() - bDate.getMonth();
      let days = currentDate.getDate() - bDate.getDate()
    // Adjust Months
      if (currentDate.getMonth() < bDate.getMonth() || (
      currentDate.getMonth() === bDate.getMonth() && 
      currentDate.getDate() < bDate.getDate()
      )) {
        years--;
        months = 12 - (bDate.getMonth() - currentDate.getMonth())
      } else {
        months = currentDate.getMonth() - bDate.getMonth();
      }

    // Adust months and days if current day is beofre birth day
    if (currentDate.getDate() < bDate.getDate()) {
      months--;
      //calculate the days in the previous month
      const prevMonth = (currentDate.getMonth() === 0) ? 11 : currentDate.getMonth() - 1;
      const prevMonthDays = new Date(currentDate.getFullYear(), prevMonth + 1, 0).getDate();
      days = prevMonthDays - bDate.getDate() + currentDate.getDate()
    }
      // return {years, months, days}
      setAge({ years, months, days })
      setBirthDate({
        year: 0,
        month: 0,
        day: 0
      });

    }
  
  const handleOnClick = () => {
    let hasError = false;

    if (!birthDate.day) {
      setError((prevError) => ({
        ...prevError,
        day: 'Day is required!'
      }));
      hasError = true;
    } else {
      setError((prevError) => ({
        ...prevError,
        day: '',
      }));
    }
    if (!birthDate.month) {
      setError((prevError) => ({
        ...prevError,
        month: 'Month is required!'
      }));
      hasError = true;
    } else {
      setError((prevError) => ({
        ...prevError,
        month: '',
      }));
    }
    if (!birthDate.year) {
      setError((prevError) => ({
        ...prevError,
        year: 'Year is required!'
      }));
      hasError = true;
    } else {
      setError((prevError) => ({
        ...prevError,
        year: '',
      }));
    }

    if (!hasError) {
      calculateAge()
    }
  };

  return(
    <main className='App'>
      <div className="container">
        <div className="wrapper">
          <GetBirthDate birthDate={birthDate} setBirthDate={setBirthDate} error={error} setError={setError} />
          <CalculateAgeBtn handleOnClick={handleOnClick}/>
          <DisplayAge age={age} />
        </div>
      </div>
  </main>);
};
