import React from 'react'
import  "./weatherData.css"
function weatherData({current, min, max, date, icon}) {
    return (
       
            <div className="active">
                <div className="date">{date}</div>
                <img className="icon" src={icon} alt="" />
                <div className="current">Current:  {Math.round(current)} </div>
                <div className="minMax">Min: {Math.round(min)} / Max: {Math.round (max)} </div> 
               
                </div>
               
    )
}

export default weatherData
