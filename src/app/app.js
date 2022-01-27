import React, { Component } from "react";
import WeatherInfo from "./components/weatherinfo";
import WeatherForm from "./components/weatherform";

class App extends Component {
  render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <WeatherForm/>
                    <WeatherInfo/>
                </div>
            </div>                                    
        </div> 
    );
  }
}

export default App;
