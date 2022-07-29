import { useState, useEffect } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)  
    
    useEffect(() => {
      loadInfo()
    }, [])
    
    useEffect(() => {
        document.title = `Weather | ${weather?.location?.name ?? ''}`
    },[weather])

    async function loadInfo(city = "Villa Mercedes") {
        try {
            let response = await fetch(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            )
            const CITY = await response.json()
            console.log(CITY);
            setTimeout(() => {
            setWeather({ ...CITY });
            }, 2000)
        } catch (err) {
            console.error('Fetch error: ',err)
        }
    }
    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>
            <WeatherMainInfo weather={weather}/>
        </div>
    )
}

export default WeatherApp