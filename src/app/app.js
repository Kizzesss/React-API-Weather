import React, { Component } from "react";
import WeatherInfo from "./components/weatherinfo";
import WeatherForm from "./components/weatherform";

import {API_WEATHER_KEY} from "./keys";

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind: '',
        city: '',
        country: '',
        error: null
    };

    getWeather = async e => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(this.state);

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            }, () => console.log(this.state));
        }else{
            this.setState({error: 'Ingresa una ciudad y pais crack'});
        }
    }
  
    render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <WeatherForm getWeather={this.getWeather}/>
                    <WeatherInfo {...this.state}/>
                </div>
            </div>                                    
        </div> 
    );
  }
}

export default App;
