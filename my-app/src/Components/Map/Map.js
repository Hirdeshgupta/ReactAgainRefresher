import React from 'react'
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Paper,Typography ,useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import {Rating} from "@material-ui/lab"
import { minWidth } from '@mui/system';
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const cords ={lat:0,lng:0}
    return (
        <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC4N4m52FuxyEum6tCqjyDiffsUeOgW-SQ'}}
        defaultCenter={cords}
        defaultZoom={14}
        center={cords}
        options={''}
        onChange={''}
        onChildClick={''}
        margin={[50,50,50,50]}
        >

        </GoogleMapReact>
        </div>
    )
}

export default Map
