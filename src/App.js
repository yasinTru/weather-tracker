import './App.css';
import {useState} from "react"
import axios from 'axios'
import {useEffect} from 'react';
import React from 'react'
import WeatherData from "../src/weatherData/weatherData"



function App() {

  let cityName="";
  const apiKey="964e5d51da3f41d688953312220201"
 //const fetchLink=`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=7&aqi=no&alerts=no`
  const [weather, setWeather]= useState([]);
const cityHandle = () => 
{
  document.querySelector("input").addEventListener("input", (e)=> 
  {
    e.preventDefault();
    cityName = e.target.value;
    console.log(cityName);
  })
}

 async function getCity(value) 
{
  const data= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=7&aqi=no&alerts=no`)
 
  
  const res= await data.json();
  console.log(res.forecast.forecastday[0])
  setWeather(res.forecast.forecastday)

}

  return (
    <div>
    <div className="container">
      <input className="input" type="text" placeholder="Search a city" onChange={cityHandle} ></input>
      <button className="search" onClick={() =>getCity(cityName)}>Search </button>
      </div>

      {weather.map((index)=>(<WeatherData key={index.date} date={index.date} current={index.hour[12].temp_c}  min={index.day.mintemp_c} max={index.day.maxtemp_c}icon={index.day.condition.icon} />))}
    </div>
  )
}

export default App

 
