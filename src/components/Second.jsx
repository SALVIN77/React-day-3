
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Second = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" style={{textAlign:"left"}}component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit" variant="contained" ><Link to={"/"} style = {{color:'blue'}}>Login</Link></Button>
          <Button color="inherit" variant="contained"><Link to={"/s"} style = {{color:'blue'}}>Third</Link></Button>
          <Button color="inherit" variant="contained"><Link to={"/t"} style = {{color:'blue'}}>Next</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Second
