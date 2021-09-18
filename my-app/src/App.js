import React from "react";
import Header from "./Components/Header/Header";
import Lists from "./Components/Lists/Lists";
import Map from "./Components/Map/Map";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
const App =()=>{
    return(
        <>
         <CssBaseline/>
         <Header/>
         <Grid container spacing={4} >
             <Grid item xs={12} md={4} >
                 <Lists/>
             </Grid>
             <Grid item xs={12} md={8}>
                 <Map/>
             </Grid>
         </Grid>   
        </>
    )
}
export default App;