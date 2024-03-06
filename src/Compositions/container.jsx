import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TrendingList from './trending';
import GetStarted from './getstarted';
import TradingViewWidget from './tradingWidget';
import { Divider } from '@mui/material';

export default function SimpleContainer() {
    const [bitcoinSymbol, setBitcoinSymbol] = useState('');
    const [bitcoinLogo, setBitcoinLogo] = useState('');
    const [bitcoinPrices, setBitcoinPrices] = useState({ usd: 0, inr: 0 });

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr')
            .then(response => response.json())
            .then(data => {
                setBitcoinPrices({
                    usd: data.bitcoin.usd,
                    inr: data.bitcoin.inr
                });
            })
            .catch(error => console.error('Error fetching data: ', error));

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
            .then(response => response.json())
            .then(data => {
                setBitcoinSymbol(data.symbol.toUpperCase());
                setBitcoinLogo(data.image.small);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" disableGutters='true'>
                <Box sx={{ position: 'relative', bgcolor: '#EFF2F5', padding: 2 }}>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='flex flex-row  '>
                            <Box sx={{width: '70vw', bgcolor: 'background.paper', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: 4}}>
                                <div className='flex flex-row items-center'>
                                    <img src={bitcoinLogo} alt="Bitcoin Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                                    <h1 className='text-2xl font-semibold'>Bitcoin</h1>
                                    <h1 className='text-l font-semibold mx-4'>BTC</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-3xl font-semibold'>${bitcoinPrices.usd.toFixed(2)}</h1>
                                    <h1 className='text-l font-semibold mx-4'>(24H)</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-md font-semibold'>Rs.{bitcoinPrices.inr.toFixed(2)}</h1>
                                </div>
                                <Divider sx={{ margin: 2 }} />
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-md font-semibold'>Bitcoin Price Chart (USD)</h1>
                                </div>
                                <Box sx={{ margin: 'auto', height: '55vh', width: 'calc(100% - 20px)' }}>
                                    <TradingViewWidget />
                                </Box>

                            </Box>
                        </div>
                        <div className='flex flex-col mx-2 mt-8 mb-2'>
                            <GetStarted sx={{ position: 'absolute', zIndex: 1 }} />
                            <TrendingList sx={{ position: 'absolute', zIndex: 1 }} />
                        </div>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}
