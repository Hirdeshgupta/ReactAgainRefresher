import React from 'react'
import useStyles from "./styles";
const PlaceDetails = ({place}) => {
    const classes = useStyles();
    return (
        <h2>
            {place.name}
        </h2>
    )
}

export default PlaceDetails
