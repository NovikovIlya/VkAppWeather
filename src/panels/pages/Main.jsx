import React, { useState, useEffect } from 'react';
import './../Home.css'
import City from './City';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import jacket from './../../svg/jacket.svg'
import jeans from './../../svg/jeans (1).svg'
import sweater from './../../svg/sweater.svg'
import boots from './../../svg/rain-boots.svg'
import vesna1 from './../../clothes/весна/темно-красное-пальто-без-рукавов-разноцветная-блузка-с-длинным-рукавом-темно-синие-брюки-кюлоты-large-42680.webp'
import vesna2 from './../../clothes/весна/голубая-короткая-шуба-темно-серый-свитер-с-хомутом-голубые-джинсы-large-42885.webp'
import vesna3 from './../../clothes/весна/пальто-водолазка-классические-брюки-large-34230.webp'

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
  const [temp,setTemp] = useState()
  const [odezhda,setOdezhda] = useState([])

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
    setTemp(temp)
    let desc = data.condition;
    // let city = data.name
    // setCitiz(city)
    // console.log(city);
    let clothesArr = [];

    if (temp < 0) {
      clothesArr.push(jacket);
      clothesArr.push('Шапка');
      clothesArr.push('Шарф');
      clothesArr.push('Перчатки');
      clothesArr.push('Термобелье');
      clothesArr.push('Утепленные ботинки');
    } else if (temp < 10) {
      async function send(){
        let response = await fetch('https://api.unsplash.com/search/photos?query=winter%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
        let result = await response.json() 
        let odezda1 = result.results
        // for (let item of odezda1){
        //   const odin = item.urls.regular
        //   console.log(odin);
        //   setOdezhda(odin)
        //   // clothesArr.push(<img className='svgStyle' src={odin} />);
          
          
          
        // }
        const odezhda2 = odezda1.map((item)=>{
          const od = item.urls.regular
          return od
        })
        console.log(odezhda2)
        setOdezhda(odezhda2)
      }
      send()
      
      // clothesArr.push(<img className='svgStyle' src={vesna1}/>);
      // clothesArr.push(<img className='svgStyle' src={vesna2}/>);
      // clothesArr.push(<img className='svgStyle' src={vesna3}/>);
      // clothesArr.push('Куртка');
      // clothesArr.push('Джинсы');
      // clothesArr.push('Свитер');
      // clothesArr.push('Ботинки');
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
  const isz = ()=>{
    console.log(odezhda);
    
  }


  return (
    <div className="App">
      <div className='container'>
            <button onClick={isz}>LLL</button>
            <h1 className='hightText'>Что надеть?</h1>
            <div className='btnGorod'>
              <Button variant="contained" className='btn ' onClick={geo}>Найти город автоматически</Button>
            </div>
            <div className='btnVyborGorod'>
              {/* <TextField label="Введите ваш город" variant="filled"   
                style={{backgroundColor:'#FFFFFF'}}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                

              />
               <Button variant="contained" onClick={polet}>Нажми</Button> */}
            </div>
            {/* <button onClick={info}>НАЖМИ</button> */}
            {scrytZagrysky?
              (isLoading? <div className='wh'>Идет загрузка...</div>: '') : ''}
            <City odezhda={odezhda} weather={weather} citiz={citiz} clothes={clothes} desc={desc} feel={feel} city={city} isLoading={isLoading} temp={temp}/>

            <button>
                <Link to='/tomorrow'>Погода на завтра</Link>
            </button>
          </div>
      </div>
      
  );
}

export default Main;