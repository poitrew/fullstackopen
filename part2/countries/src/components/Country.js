import axios from "axios"
import { useEffect, useState } from "react"

const api_key = process.env.REACT_APP_API_KEY

const Country = ({data}) => {  
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latlng[0]}&lon=${data.latlng[1]}&appid=${api_key}&units=metric`)
                .then(res => {
                    setWeatherData(res.data)
                })
        }, 1000)
    }, [])

    return (
        <div>
            <h1>{data.name.common}</h1>
            <p>capital {data.capital}</p>
            <p>area {data.area}</p>
            <h2>languages</h2>
            <ul>
                {Object.keys(data.languages).map(language => <li key={language}>{data.languages[language]}</li>)}
            </ul>
            <img src={data.flags.svg} alt="flag" width={300}></img>
            <h2>Weather in {data.name.common}</h2>
            {weatherData.length !== 0 
                ? <>
                    <p>temp {weatherData.main.temp} Celcius</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                    <p>wind {weatherData.wind.speed} m/s</p>
                </>
                : <></>
            }
        </div>
    )
}

export default Country