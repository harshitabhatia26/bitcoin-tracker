import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TrendingChange from './trendingChange';

function Suggestion() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            .then(data => {
                const coins = data.coins;
                setTrendingCoins(coins);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="mx-10 my-5" style={{ position: 'relative' }}>
            <h1 className="text-2xl font-semibold">You May Also Like</h1>
            <div className="scrollbar" style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'thin', msOverflowStyle: 'none' }}>
                {trendingCoins.map((coin, index) => (
                    <Box key={index} sx={{
                        flex: '0 0 auto',
                        position: 'relative',
                        height: '20vh',
                        width: '20vw',
                        minWidth: '200px',
                        padding: 2,
                        borderRadius: 2,
                        borderColor: 'grey',
                        borderWidth: 1,
                        margin: 1,
                        '@media (max-width: 1024px)': {
                            width: '20vw',
                        },
                        '@media (max-width: 768px)': {
                            width: '30vw',
                        },
                        '@media (max-width: 480px)': {
                            width: '50vw',
                        }
                    }}>
                        <div className="flex flex-row items-center">
                            <img src={coin.item.thumb} alt={coin.item.name} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                            <h1 className='text-xl my-2' >{coin.item.symbol ? coin.item.symbol.toUpperCase() : ''}</h1>
                            {coin.item.symbol && <TrendingChange id={coin.item.data.price_change_percentage_24h.usd} />}
                        </div>
                        <h1 className='text-2xl font-semibold'>${typeof parseFloat(coin.item.data.price.replace('$', '')) === 'number' ? parseFloat(coin.item.data.price.replace('$', '')).toFixed(2) : ''}</h1>
                        <img src={coin.item.data.sparkline} alt="Graph" style={{ width: '100%', height: '50px', marginTop: '8px' }} />
                    </Box>
                ))}
            </div>
            <div className="scrollbar" style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'thin', msOverflowStyle: 'none'}}>
                {trendingCoins.map((coin, index) => (
                    <Box key={index} sx={{
                        flex: '0 0 auto',
                        position: 'relative',
                        height: '20vh',
                        width: '20vw',
                        minWidth: '200px',
                        padding: 2,
                        borderRadius: 2,
                        borderColor: 'grey',
                        borderWidth: 1,
                        margin: 1,
                        '@media (max-width: 1024px)': {
                            width: '20vw',
                        },
                        '@media (max-width: 768px)': {
                            width: '30vw',
                        },
                        '@media (max-width: 480px)': {
                            width: '50vw',
                        }
                    }}>
                        <div className="flex flex-row items-center">
                            <img src={coin.item.thumb} alt={coin.item.name} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                            <h1 className='text-xl my-2' >{coin.item.symbol ? coin.item.symbol.toUpperCase() : ''}</h1>
                            {coin.item.symbol && <TrendingChange id={coin.item.data.price_change_percentage_24h.usd} />}
                        </div>
                        <h1 className='text-2xl font-semibold'>${typeof parseFloat(coin.item.data.price.replace('$', '')) === 'number' ? parseFloat(coin.item.data.price.replace('$', '')).toFixed(2) : ''}</h1>
                        <img src={coin.item.data.sparkline} alt="Graph" style={{ width: '100%', height: '50px', marginTop: '8px' }} />
                    </Box>
                ))}
            </div>
        </div>
    );
}

export default Suggestion;
