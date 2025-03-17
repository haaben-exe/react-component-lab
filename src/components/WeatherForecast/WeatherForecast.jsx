const WeeklyWeatherForecast = (props) => {
    return (
        <>
        <div className="weather" key={props.weatherForecast.idx}>
            <h2>{props.weatherForecast.day}</h2>
            <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt}></img>
            <p><span>conditions: {props.weatherForecast.conditions}</span></p>
            <p><span>time: {props.weatherForecast.time}</span></p>
        </div>
        </>
    );
};

export default WeeklyWeatherForecast;