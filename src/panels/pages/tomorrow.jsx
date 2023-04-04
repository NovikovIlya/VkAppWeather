import {useState,useEffect} from 'react'
import { useTodos } from '../../store'
import { Link } from 'react-router-dom'
import Header from './Header'
import City from './City'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'

const tomorrow = () => {
  const [location, setLocation] = useState({});
  const [scrytZagrysky,setScrytZagrysky] = useState(false)
  const [query, setQuery] = useState('');
  const [temp,setTemp] = useState()
  const [isLoading1,setIsLoading] = useState(true)
  const [citiz,setCitiz] = useState([])
  const [odezhda,setOdezhda] = useState([])
  const [weather, setWeather] = useState();
  const [clothes, setClothes] = useState([]);
  const [desc,setDesc] = useState()
  const [feel,setFeel] = useState()
  const [city,setCity] = useState()
  const [netgoroda,setNetgoroda] = useState(false)

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('dataKey'));
    setWeather(data[0].weather)
    getRecommendations(data[0])
    setDesc(data[0].condition)
    setFeel(data[0].feeling)
    setCity(data[0].city)
    setIsLoading(false)
  }, []);

  function geo(){
    setScrytZagrysky(true)
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
   }

   async function otpravka(city){
    fetch(`https://atoma-weather.onrender.com/weather/city/?api_key=1I2L3U4K5H6A7E8T9O0D1L2Y3A4T5E6B7Y8A9&city=${city}`)
   .then((response) => response.json())
   .then((data) => {
     if(data.status === '404'){
       console.log('Ошибока');
       setNetgoroda(true)
       setIsLoading(false)
     }
    console.log(data)
    console.log(data[0].weather)
   setWeather(data[0].weather)
    getRecommendations(data[0])
    setDesc(data[0].condition)
    setFeel(data[0].feeling)
    setCity(data[0].city)
    setIsLoading(false)
    setNetgoroda(false)
    localStorage.setItem('dataKey', JSON.stringify(data))
    });
   }

   useEffect(() => {
    if (location.latitude && location.longitude) {
        fetch(`https://atoma-weather.onrender.com/weather/now/?latitude=${location.latitude}&longitude=${location.longitude}&api_key=1I2L3U4K5H6A7E8T9O0D1L2Y3A4T5E6B7Y8A9`)
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
       console.log(data[0].weather)
      setWeather(data[0].weather)
       getRecommendations(data[0])
       setDesc(data[0].condition)
       setFeel(data[0].feeling)
       setCity(data[0].city)
       setIsLoading(false)
       localStorage.setItem('dataKey', JSON.stringify(data))
       return data;
   });
  }
}, [location]);

const getRecommendations = (data) => {
  let temp = data.weather;
  setTemp(temp)
  let desc = data.condition;

  let clothesArr = [];

  if (temp < 0) {
    async function send(){
      let response = await fetch('https://api.unsplash.com/search/photos?query=winter%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
      let result = await response.json() 
      let odezda1 = result.results
      const odezhda2 = odezda1.map((item)=>{
        const od = item.urls.regular
        return od
      })
      console.log(odezhda2)
      setOdezhda(odezhda2)
    }
    send()

  } else if (temp < 10) {
    async function send(){
      let response = await fetch('https://api.unsplash.com/search/photos?query=spring%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
      let result = await response.json() 
      let odezda1 = result.results
      const odezhda2 = odezda1.map((item)=>{
        const od = item.urls.regular
        return od
      })
      console.log(odezhda2)
      setOdezhda(odezhda2)
    }
    send()
  }else if (temp < 15) {
      async function send(){
        let response = await fetch('https://api.unsplash.com/search/photos?query=autumn%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
        let result = await response.json() 
        let odezda1 = result.results
        const odezhda2 = odezda1.map((item)=>{
          const od = item.urls.regular
          return od
        })
        console.log(odezhda2)
        setOdezhda(odezhda2)
      }
      send()
  } else if (temp < 20) {
    async function send(){
      let response = await fetch('https://api.unsplash.com/search/photos?query=woman%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
      let result = await response.json() 
      let odezda1 = result.results
      const odezhda2 = odezda1.map((item)=>{
        const od = item.urls.regular
        return od
      })
      console.log(odezhda2)
      setOdezhda(odezhda2)
    }
    send()
    // clothesArr.push('Футболка');
    // clothesArr.push('Джинсы');
    // clothesArr.push('Кеды');
  } else {
    async function send(){
      let response = await fetch('https://api.unsplash.com/search/photos?query=woman%20fashion&client_id=kW741H2E_EGpTnjeNNm4_CczBL3V12Wud_S1GOAyGzo'); // завершается с заголовками ответа
      let result = await response.json() 
      let odezda1 = result.results
      const odezhda2 = odezda1.map((item)=>{
        const od = item.urls.regular
        return od
      })
      console.log(odezhda2)
      setOdezhda(odezhda2)
    }
    send()
  }
  setClothes(clothesArr);
  };

  const cifri = useTodos(state => state.massiv)
  console.log(cifri);
  const polet = ()=>{
    otpravka(query)
    setScrytZagrysky(true)
  }

  const isz = ()=>{
    console.log(odezhda);
  }

  const query1 =(e)=>{
    setQuery(e.target.value)
  }


  return (
    <div className='container'>
       <Header geo={geo} polet={polet} query1={query1} />
       <div className='btnZavtra'>
         <Button variant="contained">
          <Link to='/'>Погода сейчас</Link>
        </Button>
       </div>

      <div className='body2'>
        <div className='head2'>
          <Typography variant="h2" component="h2">
            Завтра:
          </Typography>;
        </div>

       <City odezhda={odezhda} weather={weather} citiz={citiz} clothes={clothes} desc={desc} feel={feel} city={city} isLoading1={isLoading1} temp={temp}/>
      </div>

     {netgoroda? <div className='netGororda'>Такой город не найден, пожалуйста проверьте, правильно ли введен город и повторите попытку</div> : ''}
    </div>
  )
}

export default tomorrow