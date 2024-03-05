import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GetStarted() {

    return (
        <Box sx={{ width: '100%', maxWidth: 427, bgcolor: '#0052FE', borderRadius: '8px', marginY: 2, paddingY: 4, paddingX: 5 }}>
            <div className='flex flex-col items-center'>
                <Typography variant="h6" align="center" fontWeight={600} fontSize={24} color="whitesmoke" >
                    Get Started with KoinX
                </Typography>
                <Typography variant="h6" align="center" fontWeight={600} fontSize={24} color="whitesmoke">
                    for FREE
                </Typography>
                <Typography variant="body1" align="center" fontWeight={400} fontSize={14} color="whitesmoke" sx={{ marginTop: 2 }}>
                    With our range of features that you can equip for free,<br />
                    KoinX allows you to be more educated and aware of your tax reports.
                </Typography>
                <div className='py-10'>
                    <img src="https://new-blog.koinx.com/wp-content/uploads/2023/03/Frame.png" alt="Image" style={{ display: 'block', margin: 'auto', maxWidth: '50%' }} />
                </div>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: 'whitesmoke', textTransform: 'none', color: 'black', fontWeight: 600, fontSize: 20 }}>Get started for FREE</Button>
            </div>
        </Box>
    );
}
