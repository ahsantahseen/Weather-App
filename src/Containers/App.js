import React, { useEffect, useState } from "react";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import axios from "axios";
import WeatherDetails from "../Components/WeatherDetails/WeatherDetails";
import Footerbar from "../Components/UI/footerbar/footerbar";
import Signup from "../Components/Signup/Signup"
import {Container} from "react-bootstrap"
import {AuthProvider} from "../Contexts/AuthContext"
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Login from "../Components/Login/Login"
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword"
import Privateroute from "../Components/PrivateRoutes/Privateroute"
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile"

function App() {
  const [Temperature, setTemperature] = useState([]);
  const [clouds, setclouds] = useState([]);
  const [city, setcity] = useState([]);
  const [wind, setwind] = useState([]);
  const [FeelsLike, setFeelsLike] = useState([]);

  const [Humidity, setHumidity] = useState([]);
  
  
  
  useEffect(() => {
    axios
      ({
        url:process.env.REACT_APP_WEATHER_API,
        method:'GET',
        params:{q:'Karachi',appid:process.env.REACT_APP_WEATHER_API_ID,units:'metric'}
      })
      .then((response) => {
         setTemperature(response.data.main.temp);
         setHumidity(response.data.main.humidity);
         setFeelsLike(response.data.main.feels_like);
         setclouds(response.data.weather[0].description);
         setcity(response.data.name);
         setwind(response.data.wind);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    
    
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh",color:"black"}}
      >
    
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
        
        <AuthProvider>
          <Switch>
            <Privateroute exact path="/" component={routeProps => (
            <WeatherDetails
            Temperature={Temperature}
            FeelsLike={FeelsLike}
            clouds={clouds}
            city={city}
            windSpeed={wind.speed}
            Humidity={Humidity}
            ></WeatherDetails>)}>
            
  
            </Privateroute>
            <Privateroute exact path="/update-profile" component={UpdateProfile}></Privateroute>
            <Route path="/signup" component={Signup}>
          
            </Route>
            <Route path="/login" component={Login}></Route>
            
            <Route path="/forgot-password" component={ForgotPassword}></Route>
          </Switch>
        </AuthProvider>
        </Router>
      
      </div>
      </Container>
      
      
      

  );
}

export default withErrorHandler(App, axios);
