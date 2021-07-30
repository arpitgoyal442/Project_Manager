import React from 'react'
import HomeBodyAdd from './HomeBodyAdd'
import HomeBodyBoard from './HomeBodyBoard'
import Popup from './Popup';



 function HomeBody() {

    const[arr,setarr]=React.useState([]);
    const[boardtitle , setTitle]=React.useState("");

    const [isOpen, setIsOpen] = React.useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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

    // To create New Board
    function handleClickAdd(){
        
        setIsOpen(!isOpen);
    }

    // To take Title
    function handleChangeTitle(event){

        setTitle(event.target.value);
    }



    return (
        <div style={divstyle}>
            <h3 style={hstyle}>Boards</h3>
            <ul>
            <li style={listyle} onClick={handleClickAdd} ><HomeBodyAdd/></li>
            <li style={listyle} ><HomeBodyBoard/></li>
            
            {arr.map( ()=><li style={listyle} ><HomeBodyBoard/></li> )}
               
            </ul>

            
    {isOpen && <Popup
      content={<>
        <b>Title</b>
        <input type="text" onChange={handleChangeTitle}  placeholder="Enter Board's Name" value={boardtitle}/>
        <button >Make Board</button>
      </>}
      handleClose={handleClickAdd}
    />}

        </div>
    )
}

export default HomeBody;
