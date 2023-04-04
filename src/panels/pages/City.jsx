import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './../Home.css'
import vesna from './../../../src/vesna.gif'
import winter from './../../../src/winter.gif'
import fall from './../../../src/Fall.gif'
import summer from './../../../src/Refreshing.gif'
import Carousel from 'nuka-carousel/lib/carousel';




const City = ({weather,citiz,clothes,desc,feel,city,odezhda}) => {

  

  const {id}= useParams()
  return (
    <>
            <div className='wh cityStyle'>{city? city : ''}</div>
            <div className='wh wearCurrent'>
             <div>{weather? weather : ''}</div>
            </div>
            <div className='wh wearPrimerno'>
              {feel? <div>Ощущается как: {feel}</div>  : ''}
            </div>
            <div className='wh wearDesc'>{desc? desc : ''}</div>



            <div className='recomndationOdezhda'>
            {odezhda.length > 0 ? (
              <div className="clothes">
                
                <div className='imageBigParent'>
                  {weather >= 20 ? <img className='imageBig' src={summer}/> : ''}
                  {weather < 20 && weather  >=10 ? <img className='imageBig' src={fall}/> : ''}
                  {weather < 10 && weather >= 0? <img className='imageBig' src={vesna}/> : ''}
                  {weather < 0? <img src={winter}/> : ''}
                
                </div>
                <h2 className='h2Style'>Что надеть?</h2>
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