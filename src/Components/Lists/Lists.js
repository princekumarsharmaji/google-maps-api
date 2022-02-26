import React , {useState} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from '../PlaceDetails/PlaceDetails';


export default function Lists({places, childClicked}) {
    const classes = useStyles(); 
    const [type, setType] = useState('');
    const [rating, setRating] = useState('');
    const newType = (e) => {
       setType(e.target.value)
    }
    const ratingSelect = (e) => {
        setRating(e.target.value)
    }
        console.log({childClicked})
       return (
        <div className = {classes.container}>
        <Typography variant='h4'>Restaurants, Hotels and Attractions around you</Typography>
        <FormControl className={classes.FormControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={newType}>
                <MenuItem value ="restaurants">Restaurants</MenuItem>
                <MenuItem value ="hotels">Hotels</MenuItem>
                <MenuItem value ="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.FormControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={ratingSelect}>
                <MenuItem value ={0}>All</MenuItem>
                <MenuItem value ={3}>Above 3.0</MenuItem>
                <MenuItem value ={4}>Above 4.0</MenuItem>
                <MenuItem value ="best">5.0</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing = {3} className={classes.list}>
            {places?.map( (place,i) => (
                <Grid item key = {i} xs = {12}>
                    
                    <PlaceDetails place = {place}/>
                </Grid>

                
            ))}
        </Grid>
            
        </div>
    )
}
