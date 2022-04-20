import React from 'react';
import {Grid, Typography, Container} from '@mui/material'
import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
    return (
        <>
            <Grid container className='navigation' style={{ width : "100%" }}>
                <Grid item md={8}>
                    <Container><Typography variant="h4"><span>PROTAS</span></Typography></Container>
                </Grid>
                <Grid item md={4}>
                    <Grid container spacing={2}>
                        <Grid item><Link to="/" className='link'><Typography variant="h5"  className='nav'>Home</Typography></Link></Grid>
                        <Grid item><Link to="/profile" className='link'><Typography variant="h5" className='nav'>Profile</Typography></Link></Grid>
                        <Grid item><Link to="/about" className='link'><Typography variant="h5" className='nav'>About</Typography></Link></Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    );
}

export default Navbar;
