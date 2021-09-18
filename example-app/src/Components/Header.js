import React from 'react'
const Header= ({tittle,onClickButton,addForm})=>{
    return (
        <header className="header">
            <h1>{tittle}</h1>
            <button onClick={onClickButton} className="btn">{addForm ? "Close" : "Add" }</button>
        </header>
    )
}
Header.defaultProps={
    tittle:"Task Tracker"
}

export default Header
