import React from 'react'

// const myStyles={
//     color:"red",
//     backgroundColor:"black"
// }
const Header= ({tittle})=>{
    return (
        <div>
            <h1>{tittle}</h1>
        </div>
    )
}
Header.defaultProps={
    tittle:"Task Tracker"
}

export default Header
