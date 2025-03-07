const WeeklyWeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.img} alt={props.imgAlt}></img>
            <p><span>conditions: {props.conditions}</span></p>
            <p><span>time: {props.time}</span></p>

        </div>
    );
};

export default WeeklyWeatherForecast;