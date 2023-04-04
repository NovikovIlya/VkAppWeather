import React from 'react'
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import City from './City';

const Body = () => {
    const [isLoading1,setIsLoading] = useState(true)
    const [scrytZagrysky,setScrytZagrysky] = useState(false)
    const [weather, setWeather] = useState();
    const [netgoroda,setNetgoroda] = useState(false)

  return (
    <div>
            {scrytZagrysky?
              (isLoading1? <div className='wh'>Идет загрузка...</div>: '') : ''}
            {weather != undefined?
            <div className='btnZavtra'>
              <Button  variant="contained">
                <Link to='/tomorrow'>Погода на завтра</Link>
              </Button></div> : ''
            }
           


            {netgoroda? <div className='netGororda'>Такой город не найден, пожалуйста проверьте, правильно ли введен город и повторите попытку</div> : ''}
    </div>
  )
}

export default Body