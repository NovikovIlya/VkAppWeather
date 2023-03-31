import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './../Home.css'




const City = ({weather,citiz,clothes,desc,feel,city}) => {

  

  const {id}= useParams()
  return (
    <>
            <div className='wh'>{city? city : ''}</div>
            <div className='wh'>
             <div>{weather? weather : ''}</div>
            </div>
            <div className='wh'>
              {feel? <div>Ощущается как: {feel}</div>  : ''}
            </div>
            <div className='wh'>{desc? desc : ''}</div>



            <div className='recomndationOdezhda'>
            {clothes.length > 0 ? (
              <div className="clothes">
                <h2>Рекомендации по одежде:</h2>
                <ul>
                  {clothes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ): ''}
            </div>
</>
  )
}

export default City