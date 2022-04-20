import React from 'react';
import {Grid, Typography, Container} from '@mui/material'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Grid container>
                <Grid item md={8}>
                    <Container><Typography variant="h5">PROTAS</Typography></Container>
                </Grid>
                <Grid item md={4}>
                    <Grid container spacing={2}>
                        <Grid item><Link to="/"><Typography variant="h6">Home</Typography></Link></Grid>
                        <Grid item><Link to="/profile"><Typography variant="h6">Profile</Typography></Link></Grid>
                        <Grid item><Link to="/about"><Typography variant="h6">About</Typography></Link></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;
