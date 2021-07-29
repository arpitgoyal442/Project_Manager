import React from 'react'

 function HomeHeader() {

    const divstyle={

        innerHeight:"20vh",
        backgroundColor:"#ff66ff"
    }

    const textstyle={
        color:"white",
        textAlign:"center"
        
    }
     
    return (
        <div style={divstyle}>
            <h1 style={textstyle}>FLIP BOARD</h1>
        </div>
    )
}

export default HomeHeader;
