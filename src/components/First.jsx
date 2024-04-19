import { Button, TextField, Typography } from '@mui/material'
import React, {useState}  from 'react'

const First = () => {
    var[input,setInput]=useState()
    var[b,setB]=useState()
    const inputHandler=(e)=>{
        //console.log(e.target.value)
        setInput(e.target.value)
    }
    const btnClicked=()=>{
        setB(input)
    }
     
  return (
    <div style={{margin:"5%"}}>
        
         <Typography variant='h3'>{b}</Typography>
        <TextField id="outlined-basic" label="Enter Text" variant="outlined" onChange={inputHandler} />
        <br></br><br></br>
         <Button variant="contained" onClick={btnClicked}>Login</Button>
    </div>
  )
}   

export default First
