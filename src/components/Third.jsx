import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Third = () => {
    var data=[{name:"Salvin",age:19,place:"CKDY"},{name:"Hary",age:20,place:"TSR"}];
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return <TableRow key={i}>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.age}</TableCell>
                        <TableCell>{val.place}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Third
