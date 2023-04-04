import React from 'react'
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';


const Header = ({geo,polet,query1}) => {
    
    // const [query, setQuery] = useState('');




  return (
    <div className='head'>
            <div className='btnGorod'>
              <Button variant="contained" className='btn ' onClick={geo}>Найти город автоматически</Button>
            </div>
            <div className='btnVyborGorod'>
              <TextField label="Введите ваш город" variant="filled"   
                style={{backgroundColor:'#FFFFFF'}}
                type="text"
                onChange={(e) => query1(e)}
              />
               <Button variant="contained" onClick={polet}>Нажми</Button>
            </div>
    </div>
  )
}

export default Header