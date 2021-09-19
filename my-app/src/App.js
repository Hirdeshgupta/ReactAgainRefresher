import React from "react";
import Header from "./Components/Header/Header";
import Lists from "./Components/Lists/Lists";
import Map from "./Components/Map/Map";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import {useEffect,useState} from "react";
import { fetchRestuarants } from "./Components/api";

const App =()=>{
    const [rest,setRest]=useState([]);
    const [coords,setCoords]=useState({lat:51.5074,lng:0.1278});
    const [bonds,setBounds]=useState({sw:{lat:0,lng:0},ne:{lat:0,lng:0}});
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( ({ coords: { latitude, longitude } }) => {
            setCoords({lat:latitude,lng:longitude})
        });
      }, []);
    useEffect(()=>{
        // setCoords(coords)
            const fetchapi=async ()=>{
                const data =  await fetchRestuarants(bonds);
                setRest(data);
                console.log(data);
            }
            fetchapi();

    },[coords,bonds])
    return(
        <>
         <CssBaseline/>
         <Header/>
         <Grid container spacing={3} style={{width:"100%"}} >
             <Grid item xs={12} md={4} >
                 <Lists />
             </Grid>
             <Grid item xs={12} md={8}>
                 <Map coords={coords} setCoords={setCoords} setBounds={setBounds} />
             </Grid>
         </Grid>   
        </>
    )
}
export default App;