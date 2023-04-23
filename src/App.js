import icon from '../src/images/icon-dice.svg';
import dividerdesktop from '../src/images/pattern-divider-desktop.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App()
{

  const [advice, setAdvice] = useState({});
  
  const fetchData = () => {
     return axios.get("https://api.adviceslip.com/advice")
          .then((response) => setAdvice(response.data.slip));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="container">
      <div className='box'> 
          <span className='advice-id'> ADVICE #{advice.id}</span>
          <p className='advice'> "{advice.advice}" </p>
          <img className='divider' alt='' src={dividerdesktop}/> 
          <div  className='icon' onClick={fetchData}> 
          <img alt='' src={icon}/> 
          </div>
      </div>
     
    </div>
  );
}

export default App;
