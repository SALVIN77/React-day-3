import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, {useState} from 'react'

const Fourth = () => {
    var[Inputs,setInputs] = useState([]);
    var[data,setData] = useState([]);

    const inputHandler = (e)=>{
        setInputs({...Inputs,[e.target.name]:e.target.value});
        console.log(Inputs);
    }

    const addHandler = () =>{
        console.log('clicked');
        setData((data) =>[...data,Inputs]);
        console.log(data);
    
    }
  return (
    <div style={{margin:'10%'}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="sname" onChange={inputHandler} ></TextField> &nbsp;
      <TextField id="outlined-basic" label="Age" variant="outlined" name="sage" onChange={inputHandler}></TextField>
      <br></br><br></br>
      <TextField id="outlined-basic" label="Place" variant="outlined" name="splace" onChange={inputHandler}></TextField>&nbsp;
      <TextField id="outlined-basic" label="Phone" variant="outlined" name="sphone"  onChange={inputHandler}></TextField>
      <br></br><br></br>
      <Button variant="contained" onClick={addHandler}>Submit</Button>
      <br></br><br></br>

      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Phone</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return <TableRow key={i}>
                        <TableCell>{val.sname}</TableCell>
                        <TableCell>{val.sage}</TableCell>
                        <TableCell>{val.splace}</TableCell>
                        <TableCell>{val.sphone}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Fourth
