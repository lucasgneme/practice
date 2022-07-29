import { useState } from 'react'

const WeatherForm = ({ onChangeCity }) => {
    const [city, setCity] = useState('')
    
    function handleChange(e) {
        const value = e.target.value
        if (value !== '') setCity(value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
    }
    return (
        <form 
            onSubmit={handleSubmit}
        >
            <input 
                type='text'
                onChange={handleChange}
            />
        </form>
    )
}

export default WeatherForm