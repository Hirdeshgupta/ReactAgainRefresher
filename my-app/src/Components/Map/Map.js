import React from 'react'
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Paper,Typography ,useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import {Rating} from "@material-ui/lab"
import { minWidth } from '@mui/system';
const Map = ({coords,setCoords,setBounds}) => {
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
        onChildClick={''}
        margin={[50,50,50,50]}
        >

        </GoogleMapReact>
        </div>
    )
}

export default Map
