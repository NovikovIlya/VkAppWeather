import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './../Home.css'
import vesna from './../../../src/vesna.gif'
import winter from './../../../src/winter.gif'
import Carousel from 'nuka-carousel/lib/carousel';


const City = ({weather,citiz,clothes,desc,feel,city,odezhda}) => {

  

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
            {odezhda.length > 0 ? (
              <div className="clothes">
                
                <div className='imageBigParent'>
                  {weather < 10? <img className='imageBig' src={vesna}/> : ''}
                  {weather < 0? <img src={winter}/> : ''}
                
                </div>
                <h2 className='h2Style'>Рекомендации по одежде:</h2>
                <ul className='ulStyle'>
                <Carousel animation={["zoom"]}
                defaultControlsConfig={{
                  nextButtonText: '→',
                  prevButtonText: '←'
                  }}>
                    {/* {clothes.map((item) => (
                      <li key={item} className='liStyle'>{item}</li>
                    ))} */}
                    {odezhda.map((item) => (
                      <img key={item} className='svgStyle' src={item}/>
                    ))}
                </Carousel>
                  </ul>
               
              </div>
            ): ''}
            </div>
</>
  )
}

export default City