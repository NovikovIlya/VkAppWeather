import React, { useState, useEffect } from 'react';
import './../Home.css'
import City from './City';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const API_KEY = 'd98cd3476cb035d53bab5f6271750206';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const ICON_URL = 'https://openweathermap.org/img/wn/';

function Main() {
  const [location, setLocation] = useState({});
  // const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState();
  const [clothes, setClothes] = useState([]);
  const [citiz,setCitiz] = useState([])
  const [desc,setDesc] = useState()
  const [feel,setFeel] = useState()
  const [city,setCity] = useState()
  const [isLoading,setIsLoading] = useState(true)
  const [scrytZagrysky,setScrytZagrysky] = useState(false)

    function geo(){
    setScrytZagrysky(true)
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
   }
//    useEffect(() => {
//     if (location.latitude && location.longitude) {
//       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`)
//         .then((response) => response.json())
//         .then((data) => {
//           setWeather(data)
//           getRecommendations(data)
//         });
//     }
//   }, [location]);
         useEffect(() => {
         if (location.latitude && location.longitude) {
             fetch(`https://atoma-weather.onrender.com/weather/now/?latitude=${location.latitude}&longitude=${location.longitude}&api_key=1I2L3U4K5H6A7E8T9O0D1L2Y3A4T5E6B7Y8A9`)
           .then((response) => response.json())
           .then((data) => {
            console.log(data)
            console.log(data.weather)
           setWeather(data.weather)
            getRecommendations(data)
            setDesc(data.condition)
            setFeel(data.feeling)
            setCity(data.city)
            setIsLoading(false)
        });
    }
  }, [location]);


  const getWeather = async (q) => {
    const res = await fetch(`${API_URL}${q}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    setWeather(data.weather);
    getRecommendations(data);
  };

  const getRecommendations = (data) => {
    let temp = data.weather;
    let desc = data.condition;
    // let city = data.name
    // setCitiz(city)
    // console.log(city);
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
    setScrytZagrysky(true)
  }
  const info =()=>{
    console.log(weather);
    console.log(clothes);
    
    
    
  }


  return (
    <div className="App">
      <div className='container'>
            <h1 className='hightText'>Что надеть?</h1>
            <div className='btnGorod'>
              <Button variant="contained" className='btn ' onClick={geo}>Найти город автоматически</Button>
            </div>
            <div className='btnVyborGorod'>
              <TextField label="Введите ваш город" variant="filled"   
                style={{backgroundColor:'#FFFFFF'}}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введите город"

              />
               <Button variant="contained" onClick={polet}>Нажми</Button>
            </div>
            <button onClick={info}>НАЖМИ</button>
            {scrytZagrysky?
              (isLoading? <div className='wh'>Идет загрузка...</div>: '') : ''}
            <City weather={weather} citiz={citiz} clothes={clothes} desc={desc} feel={feel} city={city} isLoading={isLoading}/>

            <button>
                <Link to='/tomorrow'>Погода на завтра</Link>
            </button>
          </div>
      </div>
      
  );
}

export default Main;