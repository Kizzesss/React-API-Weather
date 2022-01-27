import React from "react";

const WeatherInfo = props => {
    return (
        <div>
            {
                props.error && <div className="alert alert-danger">
                    <p>
                        {props.error}
                    </p>
                </div>
            }
            {
                props.temperature ? 
                <div className="card card-body">
                    <p>
                        Location: {props.city}, {props.country}
                    </p>
                    <p>
                        Temperature: {props.temperature} ºC, {props.description}
                    </p>
                    <p>
                        Humidity: {props.humidity} %
                    </p>
                    <p>
                        Wind: {props.wind} m/s
                    </p>
                </div>
                :
                <div className="card card-body">
                    <p>
                        Aun no ingresas ninguna ciudad y pais crack
                    </p>
                </div>
            }
            </div>
    )
}

export default WeatherInfo;