import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import useStyles from "./styles";
import {MdLocationOn} from 'react-icons/md';
import {BsTelephone  } from 'react-icons/bs';
import Rating from "@mui/lab/Rating";
import {RiStarSFill} from 'react-icons/ri';




export default function PlaceDetails({place}) {
    const classes = useStyles();
    return (
        <Card elevation={6}>
        <CardMedia 
            style={{height:350}}
            image= {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title = {place.name}
        />
        <CardContent>
            <Typography gutterBottom variant='h5'>{place.name}</Typography>
        </CardContent>
        <Box display= "flex" justifyContent = "space-between">
            <Typography variant = "subtitle1">Price</Typography>
            <Typography variant='subtitle1'>{place.price}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
            <Box my= {1} display="flex" justifyContent = "space-between" alignItems = "center">
                <img src = {award.images.small} alt = {award.display_name}></img>
                <Typography variant = "subtitle2" color = "textSecondary">{award.display_name}</Typography>
            </Box>
        ))}
        {place?.cuisine?.map(({name}) => (
            <Chip key = {name} size = "small" label = {name} className={classes.chip}/>
        ))}
        {place?.address && (
            <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                <MdLocationOn/> {place.address}
            </Typography>
        )}
        {place?.phone && (
            <Typography gutterBottom variant = "subtitle2" color='textSecondary' className={classes.spacing}>
                <BsTelephone/> {place.phone}
            </Typography>
        )}
        {place?.rating && (
            <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.spacing}>
                <RiStarSFill/> {place.rating}
            </Typography>
        )}
        <Button size = "small" color = "primary" onClick={() =>window.open(place.web_url,'_blank')}>
        Trip Advisor</Button>
        <Button size = "small" color = "primary" onClick={() =>window.open(place.website,'_blank')}>
        Full Details</Button>
        
        
        </Card>
    )
}
