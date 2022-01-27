import React, { Component } from "react";
import WeatherInfo from "./components/weatherinfo";
import WeatherForm from "./components/weatherform";

import {API_WEATHER_KEY} from "./keys";

class App extends Component {

    

    getWeather = async e => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

        console.log(cityValue, countryValue);
    }
  
    render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <WeatherForm getWeather={this.getWeather}/>
                    <WeatherInfo/>
                </div>
            </div>                                    
        </div> 
    );
  }
}

export default App;
