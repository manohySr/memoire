import { Stack } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import Upload from './Upload';
import Download from './Dowload';
const Dashboard = () => {
    return (
       <Stack direction="row" spacing={10}>
            <Navbar />
            <Upload />
            <Download />
       </Stack>
    )
}

export default Dashboard;
