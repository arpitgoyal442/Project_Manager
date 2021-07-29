import React from 'react'
import HomeBodyAdd from './HomeBodyAdd'
import HomeBodyBoard from './HomeBodyBoard'

 function HomeBody() {

    const[arr,setarr]=React.useState([]);

    const divstyle={

        innerHeight:"100%",
        innerWidth:"100%",
        marginLeft:"8%",
        marginRight:"8%",
       
    }

    const listyle={
        display:"inline-block",
        marginLeft:"10px"
    }
    const hstyle={
        marginLeft:"3%",
        fontSize:"30px"
    }

    function handleClickAdd(){
        setarr( (pre)=>{
             pre.push(pre.length+1);
             return pre;
        } )
    }

    return (
        <div style={divstyle}>
            <h3 style={hstyle}>Boards</h3>
            <ul>
            <li style={listyle} onClick={handleClickAdd} ><HomeBodyAdd/></li>
            <li style={listyle} ><HomeBodyBoard/></li>
            {arr.map( ()=> <li>Hello</li> )}
               
            </ul>
        </div>
    )
}

export default HomeBody;
