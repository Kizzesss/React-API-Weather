import React from "react";

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" className="form-control" name="city" placeholder="La ciudad crack" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="country" placeholder="El pais crack" />
            </div>
            <button className="btn btn-success btn-block">
                Muestrame el clima crack
            </button>
        </form>        
    </div>
);

export default WeatherForm;