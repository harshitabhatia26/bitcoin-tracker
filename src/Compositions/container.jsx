import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TrendingList from './trending';
import GetStarted from './getstarted';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" disableGutters='true'>
                <Box sx={{ position: 'relative', bgcolor: '#EFF2F5', height: '100vh', paddingTop: 2, paddingX: 2 }}>
                    <GetStarted sx={{ position: 'absolute', zIndex: 1 }} />
                    <TrendingList sx={{ position: 'absolute', zIndex: 1 }} />
                </Box>
            </Container>
        </React.Fragment>
    );
}