import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './../Home.css'




const City = ({weather,citiz,clothes}) => {
  const API_KEY = 'd98cd3476cb035d53bab5f6271750206';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const ICON_URL = 'https://openweathermap.org/img/wn/';


  const [location, setLocation] = useState({});
  // const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');




   function geo(){
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
   }
   useEffect(() => {
    if (location.latitude && location.longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data)
          getRecommendations(data)
        });
    }
  }, [location]);


  const getWeather = async (q) => {
    const res = await fetch(`${API_URL}${q}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    setWeather(data);
    getRecommendations(data);
  };

  const getRecommendations = (data) => {
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let city = data.name
    setCitiz(city)
    console.log(city);
    let clothesArr = [];

    if (temp < 0) {
      clothesArr.push('Пуховик');
      clothesArr.push('Шапка');
      clothesArr.push('Шарф');
      clothesArr.push('Перчатки');
      clothesArr.push('Термобелье');
      clothesArr.push('Утепленные ботинки');
    } else if (temp < 10) {
      clothesArr.push('Куртка');
      clothesArr.push('Джинсы');
      clothesArr.push('Свитер');
      clothesArr.push('Кроссовки');
    } else if (temp < 20) {
      clothesArr.push('Футболка');
      clothesArr.push('Джинсы');
      clothesArr.push('Кеды');
    } else {
      clothesArr.push('Футболка');
      clothesArr.push('Шорты');
      clothesArr.push('Сандалии');
    }

    if (desc.includes('дождь')) {
      clothesArr.push('Зонт');
    }

    setClothes(clothesArr);
  };

  const polet = ()=>{
	getWeather(query)
  }

  const {id}= useParams()
  return (
    <>
    <div>City{id}</div>
            <div className='recomndationPogogda'>
            {weather.main && (
              <div className="weather">
                {/* <img src={`${ICON_URL}${weather.weather[0].icon}@2x.png`} alt="" />
                <div>{citiz? citiz : ''}</div> */}
                <div className="temperature">
                  {/* {Math.round(weather.main.temp)}°C */}
                  {weather}°C
                </div>
                <div className="description">{weather.weather[0].description === 'overcast clouds' ? 'Пасмурно' 
                : weather.weather[0].description}</div>
              </div>
            )}
            </div>

            <div className='recomndationOdezhda'>
            {clothes ? (
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