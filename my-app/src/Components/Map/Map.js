import React from 'react'
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Paper,Typography ,useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import {Rating} from "@material-ui/lab"
import { minWidth } from '@mui/system';
const Map = ({coords,setCoords,setBounds,places,setChildClicked}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    return (
        <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC4N4m52FuxyEum6tCqjyDiffsUeOgW-SQ'}}
        defaultCenter={coords}
        defaultZoom={14}
        center={coords}
        options={''}
        onChange={(e)=>{
            setCoords({lat:e.center.lat,lng:e.center.lng});
            setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
            // console.log(coords)
        }}
        onChildClick={(child)=>setChildClicked(child)}
        margin={[50,50,50,50]}
        >
            {places?.map((place,i)=>
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {!isMobile ? <LocationOnOutlinedIcon color="primary" fontSize="large" /> :(
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle2">{place.name}</Typography>
                            <img
                            className={classes.pointer}
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            alt={place.name}
                            />
                            <Rating size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                            
                            ) }
                    </div>
            )}
        </GoogleMapReact>
        </div>
    )
}

export default Map
