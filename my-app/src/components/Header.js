import React from 'react';
import { AppBar, Toolbar, TextField, Button, Typography } from '@mui/material';
import {
  Search,FilterList
} from "@mui/icons-material";
const Header = () => {
  return (
    <AppBar position="static" sx={{marginBottom:"2%" , height:"10vh",backgroundColor:"#fff"}}>
      <Toolbar sx={{display:"flex" , justifyContent:"space-around",gap:"5%"}}>
        <Typography variant="h6" sx={{width:"16%", color:"grey"}}>
          Logo
        </Typography>
        <TextField 
          variant="outlined" 
          size="small" 
          placeholder="Search..." 
          sx={{backgroundColor: 'white', borderRadius: 1 ,width:"55%",height:"60%"}} 
        />
        <Button variant="contained" sx={{width:"25%",height:"80%",backgroundColor:"lightgreen"}}>
          Become a Seller
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
