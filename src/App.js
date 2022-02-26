import {useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import Header from './Components/Header/Header';
import Lists from './Components/Lists/Lists';
import Map from './Components/Maps/Map';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import { getPlacesData } from './api';


 

function App() {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});


    useEffect(() => {
         navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
           setCoordinates({lat: latitude, lng: longitude});
         })
    },[])



  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
    .then((data)=>{
      console.log(data);
      setPlaces(data);
    })
  },[coordinates, bounds])

  const[childClicked,setChildClicked] = useState("")
  return (
    <div className="App">
     <CssBaseline />
     <Header/>
     <Grid container spacing = {3}>
       <Grid item xs = {12} md = {4}>
       <Lists places = {places}
         childClicked = {childClicked}
       /></Grid>
       <Grid item xs = {12} md = {8}>
       <Map 
         setCoordinates = {setCoordinates}
         setBounds = {setBounds}
         coordinates = {coordinates}
         places = {places}
         childClicked = {childClicked}
       /></Grid>
     </Grid>
    </div>
  );
}

export default App;
