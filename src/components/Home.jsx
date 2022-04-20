import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import videoback from '../videos/video-2.mp4';

import "./style.css";

const Home = () => {
    return (
        <div>
            <video src={videoback} autoPlay loop muted/>
            <div className="content1">
                <Typography variant='h2' align='center'>
                    ADVENTURE AWAITS
                </Typography>
                <Typography variant='h6' align="center" style={{ marginTop : "30px" }}>
                    What are you waiting for
                </Typography>
            </div>
            <div className='content2'>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item><Typography align='center' variant='h4'><Link to='/profile' className='linkGetStarted link'>GET STARTED</Link></Typography></Grid>
                    <Grid item><Typography align='center' variant='h4'>BUY ME COFFEE</Typography></Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Home;
