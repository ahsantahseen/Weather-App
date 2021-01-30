import React,{useState} from "react";
import {Card,Alert,Button} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"
import {FaTemperatureLow,FaWind,FaCloud,FaThermometerHalf, FaUserCircle, FaEnvelope, FaSun} from "react-icons/fa"




const WeatherDetails = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateObj = new Date();
  let day = days[dateObj.getDay()]; //retruns for exp:MONDAY
  let month = months[dateObj.getMonth()]; //retruns for exp:JULY
  const ProperDate = day + ", " + dateObj.getDate() + "  " + month; //returns for exp: Friday,28 August
  const clouds = props.clouds.toString();
  const ProperClouds = clouds.charAt(0).toUpperCase() + clouds.slice(1);

  const [error, seterror] = useState('');
  const {currentUser,Logout}=useAuth();
  const history=useHistory();
  
  const handleLogout=async()=>{
   seterror('')
   try{
     await Logout()
     history.push("/login")
   }
   catch{
      seterror("Failure! cannot logout")
    }
  }
  
  return (
    <>
    
    <Card>
      <Card.Body>
        
    <h2 className="mb-4 text-center">Profile <FaUserCircle color="blue" size="24" style={{verticalAlign: '-1px'}}/></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <FaEnvelope color="blue" size="16" style={{verticalAlign: '-4px'}}/> <strong> Email: </strong>{currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
      </Card.Body>
    </Card>
    
    <Card className="mt-2">
      <Card.Body>
        <h2 className="text-center mb-2">Karachi </h2>
        <h2 className="text-center mb-4">{ProperDate}</h2>
        <p><FaTemperatureLow color="lime"/><strong> Temperature: </strong>{props.Temperature}  &#8451;</p>
        <p><FaWind color="grey"/><strong> Wind Speed: </strong>{props.windSpeed}  Knots</p>
        <p><FaCloud color="lightblue"/><strong> Clouds: </strong>{ProperClouds}  </p>
        <p><FaThermometerHalf color="lime"/><strong> Feels Like: </strong>{props.Temperature}  &#8451;</p>
        <p><FaSun color="orange"/><strong> Humidity: </strong>{props.Humidity}  %;</p>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Button className="btn btn-primary w-50 mt-3" onClick={handleLogout}>Log Out</Button>
    </div>
    </>
  );
};

export default WeatherDetails;
