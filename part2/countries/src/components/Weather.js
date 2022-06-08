const Weather = ({data}) => {
    return (<>
        <p>temperature {data.main?.temp}</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather}@2x.png`} />
        <p>wind {data.wind?.speed} m/s</p>
    </>)
}

export default Weather